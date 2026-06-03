import { SeatsService } from './seats.service';
export declare class SeatsController {
    private readonly seatsService;
    constructor(seatsService: SeatsService);
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
