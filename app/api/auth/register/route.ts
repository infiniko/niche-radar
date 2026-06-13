import { NextRequest, NextResponse } from "next/server";
import db from '@/lib/prisma';
import bcrypt from "bcryptjs";
import { Role, PlanType } from "@/lib/generated/prisma/enums";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password, name } = body;
        console.log(body);

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email or password is required' },
                { status: 400 }
            )
        }

        const existingUser = await db.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exists!' },
                { status: 400 }
            )
        }

        const hashedPass = await bcrypt.hash(password, 12);


        const user = await db.user.create({
            data: {
                email,
                password: hashedPass,
                name: name || null,
                role: Role.USER,
                image: '/todo',
                subscription: {
                    create: {
                        planType: PlanType.FREE,
                        isActive: true
                    }
                },
                usage: {
                    create: {
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear(),
                        validationCount: 0
                    }
                }
            },
            include: {
                subscription: true,
            }
        })


        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json(
            {
                message: 'User created successfully',
                user: userWithoutPassword
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.log('Register error...', error)
    }
}