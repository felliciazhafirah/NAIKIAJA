import { NotificationService } from './notification.service';
export declare class NotificationController {
    private service;
    constructor(service: NotificationService);
    findAll(req: any): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }[]>;
    findOne(id: string): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        id: number;
        userId: number;
        title: string;
        message: string;
        isRead: boolean;
    }>;
}
