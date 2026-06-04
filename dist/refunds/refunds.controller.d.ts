import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
export declare class RefundsController {
    private service;
    constructor(service: RefundsService);
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
    create(dto: CreateRefundDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    }>;
    findMyRefund(req: any): Promise<({
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
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
        status: string;
        reason: string;
    }>;
    approve(id: number): Promise<{
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
