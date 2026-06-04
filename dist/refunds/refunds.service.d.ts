import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { CreateRefundDto } from './dto/create-refund.dto';
export declare class RefundsService {
    private prisma;
    private notificationService;
    constructor(prisma: PrismaService, notificationService: NotificationService);
    create(dto: CreateRefundDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    }>;
    getMyRefund(userId: number): Promise<({
        booking: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            totalPrice: number;
            status: import(".prisma/client").$Enums.BookingStatus;
            invoiceNumber: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    })[]>;
    findAll(status?: string): Promise<({
        booking: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            totalPrice: number;
            status: import(".prisma/client").$Enums.BookingStatus;
            invoiceNumber: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    })[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    }>;
    findMyRefunds(userId: number): Promise<({
        booking: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            totalPrice: number;
            status: import(".prisma/client").$Enums.BookingStatus;
            invoiceNumber: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    })[]>;
    approve(refundId: number): Promise<{
        booking: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            Namalengkap: string;
            Email: string;
            NoHp: string;
            KTP: string;
            userId: number;
            scheduleId: number;
            totalPrice: number;
            status: import(".prisma/client").$Enums.BookingStatus;
            invoiceNumber: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    }>;
}
