import { PrismaService } from '../prisma/prisma.service';
import { CreateRefundDto } from './dto/create-refund.dto';
export declare class RefundsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateRefundDto): Promise<{
        reason: string;
        status: string;
        id: number;
        bookingId: number;
    }>;
    approve(id: number): Promise<{
        reason: string;
        status: string;
        id: number;
        bookingId: number;
    }>;
}
