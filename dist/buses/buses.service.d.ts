import { PrismaService } from '../prisma/prisma.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
export declare class BusesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    remove(id: number): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, dto: UpdateBusDto): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(busClass?: string): Promise<{
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
