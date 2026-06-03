import { PrismaService } from '../prisma/prisma.service';
import { CreateBusDto } from './dto/create-bus.dto';
export declare class BusesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    remove(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        class: string;
        totalSeats: number;
        facilities: string;
        isActive: boolean;
    }>;
    findAll(busClass?: string): Promise<{
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
