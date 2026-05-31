import { BusesService } from './buses.service';
import { CreateBusDto } from './dto/create-bus.dto';
export declare class BusesController {
    private service;
    constructor(service: BusesService);
    create(dto: CreateBusDto): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        id: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__BusClient<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        id: number;
    }[]>;
}
