import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { CreateRefundDto } from './dto/create-refund.dto';
export declare class RefundsService {
    private prisma;
    private notificationService;
    constructor(prisma: PrismaService, notificationService: NotificationService);
    create(dto: CreateRefundDto): Promise<{
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    }>;
    getMyRefund(userId: number): Promise<({
        booking: {
            status: import(".prisma/client").$Enums.BookingStatus;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            totalPrice: number;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            invoiceNumber: string | null;
        };
    } & {
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    })[]>;
    findAll(status?: string): Promise<({
        booking: {
            status: import(".prisma/client").$Enums.BookingStatus;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            totalPrice: number;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            invoiceNumber: string | null;
        };
    } & {
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    })[]>;
    findOne(id: number): Promise<{
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    }>;
    findMyRefunds(userId: number): Promise<({
        booking: {
            status: import(".prisma/client").$Enums.BookingStatus;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            totalPrice: number;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            invoiceNumber: string | null;
        };
    } & {
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    })[]>;
    approve(refundId: number): Promise<{
        booking: {
            status: import(".prisma/client").$Enums.BookingStatus;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            totalPrice: number;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            invoiceNumber: string | null;
        };
    } & {
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    }>;
}
