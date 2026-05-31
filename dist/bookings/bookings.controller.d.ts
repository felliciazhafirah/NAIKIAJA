import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsController {
    private service;
    constructor(service: BookingsService);
    create(dto: CreateBookingDto): Promise<{
        totalPrice: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        id: number;
        userId: number;
        scheduleId: number;
    }>;
}
