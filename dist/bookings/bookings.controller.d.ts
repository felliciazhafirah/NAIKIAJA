import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsController {
    private service;
    constructor(service: BookingsService);
    getMyBookings(req: any): Promise<({
        schedule: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            origin: string;
            destination: string;
            departureTime: Date;
            arrivalTime: Date;
            price: number;
            totalTickets: number;
            availableTickets: number;
            busId: number;
            isActive: boolean;
        };
        seats: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            busId: number;
            seatNumber: string;
            isBooked: boolean;
            bookingId: number | null;
        }[];
    } & {
        id: number;
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        userId: number;
        scheduleId: number;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
    })[]>;
    payBooking(id: string): Promise<{
        id: number;
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        userId: number;
        scheduleId: number;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
    }>;
    getInvoice(id: string): Promise<{
        schedule: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            origin: string;
            destination: string;
            departureTime: Date;
            arrivalTime: Date;
            price: number;
            totalTickets: number;
            availableTickets: number;
            busId: number;
            isActive: boolean;
        };
        seats: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            busId: number;
            seatNumber: string;
            isBooked: boolean;
            bookingId: number | null;
        }[];
    } & {
        id: number;
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        userId: number;
        scheduleId: number;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
    }>;
    create(dto: CreateBookingDto): Promise<{
        id: number;
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        userId: number;
        scheduleId: number;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
    }>;
}
