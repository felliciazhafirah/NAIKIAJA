import { SchedulesService } from './schedules.service';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { CreateScheduleDto } from './dto/create-schedule.dto';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    create(dto: CreateScheduleDto): Promise<{
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
    }>;
    update(id: string, dto: UpdateScheduleDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    findAll(): Promise<({
        bus: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            class: string;
            totalSeats: number;
            facilities: string;
            isActive: boolean;
        };
    } & {
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
    })[]>;
    findByClass(busClass: string): import(".prisma/client").Prisma.PrismaPromise<({
        bus: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            class: string;
            totalSeats: number;
            facilities: string;
            isActive: boolean;
        };
    } & {
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
    })[]>;
    findByDate(date: string): Promise<({
        bus: {
            name: string;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            class: string;
            totalSeats: number;
            facilities: string;
            isActive: boolean;
        };
    } & {
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
    })[]>;
    getSeats(scheduleId: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        seatNumber: string;
        isBooked: boolean;
        busId: number;
        bookingId: number | null;
    }[]>;
}
