import { BusesService } from './buses.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
export declare class BusesController {
    private service;
    constructor(service: BusesService);
    create(dto: CreateBusDto): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: string, dto: UpdateBusDto): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
