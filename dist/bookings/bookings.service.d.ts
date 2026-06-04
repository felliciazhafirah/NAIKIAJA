import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    createBooking(userId: number, dto: CreateBookingDto): Promise<{
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
    payBooking(id: number): Promise<{
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
    getInvoice(id: number): Promise<{
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
    getMyBookings(userId: number): Promise<({
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
}
