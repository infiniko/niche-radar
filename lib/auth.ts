import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from '@auth/prisma-adapter';
import db from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Prisma, Role, User, Subscription } from "./generated/prisma/client";

export type UserWithSubscription = Prisma.UserGetPayload<{
    include: { subscription: true }
}>;


export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password ' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invvalid credentials')
                }
                const user = await db.user.findUnique({
                    where: { email: credentials.email as string },
                    include: {
                        subscription: true
                    }
                })

                if (!user || !user.password) throw new Error('Invalid credentials');

                const isPasswordValid = await bcrypt.compare(
                    credentials.password as string, user.password
                )

                if (!isPasswordValid) {
                    throw new Error('Invvalid credentials')
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    image: user.image
                }

            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger }) {

            if (user) {
                token.id = user.id;
                token.role = (user as User).role;
                token.name = user.name;
                token.email = user.email;
            }

            if (trigger === 'update' || user) {
                const updatedUser = await db.user.findUnique({
                    where: { id: token.id as string },
                    select: {
                        name: true,
                        email: true,
                        role: true,
                        subscription: {
                            select: {
                                planType: true,
                                isActive: true,
                                endDate: true,
                            }
                        }
                    }
                })


                if (updatedUser) {
                    token.name = updatedUser.name;
                    token.email = updatedUser.email;
                    token.role = updatedUser.role;
                    token.subscription = updatedUser.subscription;
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as UserWithSubscription).id = token.id as string;
                (session.user as UserWithSubscription).role = token.role as Role;
                (session.user as UserWithSubscription).subscription = token.subscription as Subscription;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
            }
            return session;
        }
    },
    pages: {
        signIn: '/signin',
        signOut: '/signout',
        error: '/error'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    }
});

console.log("Auth handlers:", handlers); // Add this