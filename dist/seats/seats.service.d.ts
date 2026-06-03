import { PrismaService } from '../prisma/prisma.service';
export declare class SeatsService {
    private prisma;
    constructor(prisma: PrismaService);
    getSeats(busId: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        seatNumber: string;
        isBooked: boolean;
        busId: number;
        bookingId: number | null;
    }[]>;
}
