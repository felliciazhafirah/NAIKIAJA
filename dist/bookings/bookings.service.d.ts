import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(userId: number, dto: CreateBookingDto): Promise<{
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
        id: number;
        userId: number;
        scheduleId: number;
    }>;
    payBooking(id: number): Promise<{
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
        id: number;
        userId: number;
        scheduleId: number;
    }>;
    getInvoice(id: number): Promise<{
        schedule: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
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
            createdAt: Date;
            updatedAt: Date;
            id: number;
            busId: number;
            seatNumber: string;
            isBooked: boolean;
            bookingId: number | null;
        }[];
    } & {
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
        id: number;
        userId: number;
        scheduleId: number;
    }>;
    getMyBookings(userId: number): Promise<({
        schedule: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
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
            createdAt: Date;
            updatedAt: Date;
            id: number;
            busId: number;
            seatNumber: string;
            isBooked: boolean;
            bookingId: number | null;
        }[];
    } & {
        Namalengkap: string;
        totalPrice: number;
        Email: string;
        NoHp: string;
        KTP: string;
        status: import(".prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        invoiceNumber: string | null;
        updatedAt: Date;
        id: number;
        userId: number;
        scheduleId: number;
    })[]>;
}
