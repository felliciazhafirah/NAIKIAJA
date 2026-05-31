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
        id: number;
        busId: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ScheduleClient<{
        origin: string;
        destination: string;
        departureTime: Date;
        arrivalTime: Date;
        price: number;
        totalTickets: number;
        availableTickets: number;
        id: number;
        busId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<({
        bus: {
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
        id: number;
        busId: number;
    })[]>;
}
