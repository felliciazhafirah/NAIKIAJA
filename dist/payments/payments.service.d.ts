import { PrismaService } from '../prisma/prisma.service';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    pay(bookingId: number): Promise<{
        message: string;
    }>;
}
