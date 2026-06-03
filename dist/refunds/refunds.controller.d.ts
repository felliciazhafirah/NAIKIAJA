import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
export declare class RefundsController {
    private service;
    constructor(service: RefundsService);
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
    create(dto: CreateRefundDto): Promise<{
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    }>;
    findMyRefund(req: any): Promise<({
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
    findOne(id: string): Promise<{
        reason: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        bookingId: number;
    }>;
    approve(id: number): Promise<{
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
