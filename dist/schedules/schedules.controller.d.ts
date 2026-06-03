import { SchedulesService } from './schedules.service';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { CreateScheduleDto } from './dto/create-schedule.dto';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    create(dto: CreateScheduleDto): Promise<{
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
    }>;
    update(id: string, dto: UpdateScheduleDto): Promise<{
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
    }>;
    remove(id: string): Promise<{
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
    }>;
    findAll(): Promise<({
        bus: {
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            class: string;
            totalSeats: number;
            facilities: string;
        };
    } & {
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
    })[]>;
    findByClass(busClass: string): import(".prisma/client").Prisma.PrismaPromise<({
        bus: {
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            class: string;
            totalSeats: number;
            facilities: string;
        };
    } & {
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
    })[]>;
    findByDate(date: string): Promise<({
        bus: {
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            id: number;
            name: string;
            class: string;
            totalSeats: number;
            facilities: string;
        };
    } & {
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
    })[]>;
    getSeats(scheduleId: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        busId: number;
        seatNumber: string;
        isBooked: boolean;
        bookingId: number | null;
    }[]>;
}
