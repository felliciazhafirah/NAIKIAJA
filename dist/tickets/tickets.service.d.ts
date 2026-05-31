import { PrismaService } from '../prisma/prisma.service';
export declare class TicketsService {
    private prisma;
    constructor(prisma: PrismaService);
    generate(bookingId: number): Promise<{
        qrCode: string;
        id: number;
        bookingId: number;
    }>;
    findTicket(bookingId: number): Promise<{
        qrCode: string;
        id: number;
        bookingId: number;
    }>;
}
