import { TicketsService } from './tickets.service';
export declare class TicketsController {
    private service;
    constructor(service: TicketsService);
    generate(body: {
        bookingId: number;
    }): Promise<{
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
