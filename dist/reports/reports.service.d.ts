import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getGlobalLastUpdate(): Promise<Date>;
    getSummary(): Promise<{
        totalUsers: number;
        totalBuses: number;
        totalSchedules: number;
        totalBookings: number;
        totalTickets: number;
        totalRefunds: number;
    }>;
}
