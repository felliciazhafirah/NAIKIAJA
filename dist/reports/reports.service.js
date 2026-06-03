"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportsService = class ReportsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getGlobalLastUpdate() {
        const [schedule, booking, refund, bus] = await Promise.all([
            this.prisma.schedule.findFirst({ orderBy: { updatedAt: 'desc' } }),
            this.prisma.booking.findFirst({ orderBy: { updatedAt: 'desc' } }),
            this.prisma.refund.findFirst({ orderBy: { updatedAt: 'desc' } }),
            this.prisma.bus.findFirst({ orderBy: { updatedAt: 'desc' } }),
        ]);
        const dates = [
            schedule?.updatedAt,
            booking?.updatedAt,
            refund?.updatedAt,
            bus?.updatedAt,
        ].filter(Boolean);
        return new Date(Math.max(...dates.map(d => new Date(d).getTime())));
    }
    async getSummary() {
        const totalUsers = await this.prisma.user.count();
        const totalBuses = await this.prisma.bus.count();
        const totalSchedules = await this.prisma.schedule.count();
        const totalBookings = await this.prisma.booking.count();
        const totalTickets = await this.prisma.ticket.count();
        const totalRefunds = await this.prisma.refund.count();
        return {
            totalUsers,
            totalBuses,
            totalSchedules,
            totalBookings,
            totalTickets,
            totalRefunds,
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map