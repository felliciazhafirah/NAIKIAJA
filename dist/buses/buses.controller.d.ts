import { BusesService } from './buses.service';
import { CreateBusDto } from './dto/create-bus.dto';
export declare class BusesController {
    private service;
    constructor(service: BusesService);
    create(dto: CreateBusDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
    }>;
    findAll(): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
    }[]>;
}
