import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(userId: number, dto: CreateBookingDto): Promise<{
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        id: number;
        userId: number;
        scheduleId: number;
    }>;
}
