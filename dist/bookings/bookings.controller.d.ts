import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsController {
    private service;
    constructor(service: BookingsService);
    getMyBookings(req: any): Promise<({
        schedule: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            isActive: boolean;
            busId: number;
            origin: string;
            destination: string;
            departureTime: Date;
            arrivalTime: Date;
            price: number;
            totalTickets: number;
            availableTickets: number;
        };
        seats: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            seatNumber: string;
            isBooked: boolean;
            busId: number;
            bookingId: number | null;
        }[];
    } & {
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
    })[]>;
    payBooking(id: string): Promise<{
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
    }>;
    getInvoice(id: string): Promise<{
        schedule: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            isActive: boolean;
            busId: number;
            origin: string;
            destination: string;
            departureTime: Date;
            arrivalTime: Date;
            price: number;
            totalTickets: number;
            availableTickets: number;
        };
        seats: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            seatNumber: string;
            isBooked: boolean;
            busId: number;
            bookingId: number | null;
        }[];
    } & {
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
    }>;
    create(dto: CreateBookingDto): Promise<{
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
    }>;
}
