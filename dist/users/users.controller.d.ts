import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        id: number;
    }[]>;
}
