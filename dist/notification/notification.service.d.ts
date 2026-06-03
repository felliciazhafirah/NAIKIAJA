import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, title: string, message: string): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }>;
    findAll(userId: number): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }>;
}
