import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        id: number;
    }[]>;
}
