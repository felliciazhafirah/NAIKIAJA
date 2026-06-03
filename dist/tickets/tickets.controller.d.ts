import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(dto: CreateTicketDto): Promise<{
        booking: {
            user: {
                name: string;
                email: string;
                password: string;
                phone: string | null;
                role: import(".prisma/client").$Enums.Role;
                createdAt: Date;
                updatedAt: Date;
                id: number;
            };
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
            totalPrice: number;
            Email: string;
            NoHp: string;
            KTP: string;
            status: import(".prisma/client").$Enums.BookingStatus;
            invoiceNumber: string | null;
            userId: number;
            scheduleId: number;
        };
    } & {
        id: number;
        bookingId: number;
        qrCode: string;
    }>;
    findOne(bookingId: string): Promise<{
        booking: {
            user: {
                name: string;
                email: string;
                password: string;
                phone: string | null;
                role: import(".prisma/client").$Enums.Role;
                createdAt: Date;
                updatedAt: Date;
                id: number;
            };
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
            totalPrice: number;
            Email: string;
            NoHp: string;
            KTP: string;
            status: import(".prisma/client").$Enums.BookingStatus;
            invoiceNumber: string | null;
            userId: number;
            scheduleId: number;
        };
    } & {
        id: number;
        bookingId: number;
        qrCode: string;
    }>;
}
