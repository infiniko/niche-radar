import "dotenv/config";
import { PrismaClient, Role, PlanType } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import bcrypt from 'bcryptjs';


const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('seeding started...');

    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'randomPass';

    const existingAdmin = await prisma.user.findUnique({
        where: { email: adminEmail }
    })

    if (existingAdmin) {
        console.log('admin already exists')
    } else {
        //hashing pass
        const hashedPassword = await bcrypt.hash(adminPassword, 12);

        const admin = await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                name: "Admin User",
                role: Role.ADMIN,
                image: '/default-avatar.png',
                subscription: {
                    create: {
                        planType: PlanType.PRO,
                        isActive: true,

                    }
                },
                usage: {
                    create: {
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear(),
                        validationCount: 0
                    }
                }
            }
        })

        console.log('admin user created successfully')
    }

    const userEmail = 'user@gmail.com';
    const userPassword = 'randomPassUser';

    const existingUser = await prisma.user.findUnique({
        where: { email: userEmail }
    })

    if (existingUser) {
        console.log('user already exists')
    } else {
        //hashing pass
        const hashedPassword = await bcrypt.hash(userPassword, 12);

        await prisma.user.create({
            data: {
                email: userEmail,
                password: hashedPassword,
                name: "Simple User",
                role: Role.USER,
                image: '/default-avatar.png',
                subscription: {
                    create: {
                        planType: PlanType.FREE,
                        isActive: true,

                    }
                },
                usage: {
                    create: {
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear(),
                        validationCount: 0
                    }
                }
            }
        })

        console.log('test user created successfully')
    }

    main

}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });