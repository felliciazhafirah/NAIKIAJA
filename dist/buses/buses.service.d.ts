import { PrismaService } from '../prisma/prisma.service';
import { CreateBusDto } from './dto/create-bus.dto';
export declare class BusesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBusDto): Promise<{
        name: string;
        class: string;
        totalSeats: number;
        facilities: string;
        id: number;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BusClient<{
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
