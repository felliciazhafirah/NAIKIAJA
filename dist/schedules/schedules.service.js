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
exports.SchedulesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SchedulesService = class SchedulesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.schedule.create({
            data: {
                ...dto,
                availableTickets: dto.totalTickets,
            },
        });
    }
    async update(id, dto) {
        const schedule = await this.prisma.schedule.findUnique({
            where: { id },
        });
        if (!schedule) {
            throw new Error('Schedule not found');
        }
        return this.prisma.schedule.update({
            where: { id },
            data: {
                ...dto,
                availableTickets: dto.totalTickets ??
                    schedule.availableTickets,
            },
        });
    }
    async getSeats(scheduleId) {
        const schedule = await this.prisma.schedule.findUnique({
            where: {
                id: scheduleId,
            },
            include: {
                bus: true,
            },
        });
        if (!schedule) {
            throw new common_1.NotFoundException('Schedule not found');
        }
        return this.prisma.seat.findMany({
            where: {
                busId: schedule.busId,
            },
            orderBy: {
                seatNumber: 'asc',
            },
        });
    }
    async remove(id) {
        return this.prisma.schedule.update({
            where: {
                id,
            },
            data: {
                isActive: false,
            },
        });
    }
    findByClass(busClass) {
        return this.prisma.schedule.findMany({
            where: {
                bus: {
                    class: busClass,
                },
            },
            include: {
                bus: true,
            },
        });
    }
    async findByDate(date) {
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
        return this.prisma.schedule.findMany({
            where: {
                departureTime: {
                    gte: startDate,
                    lt: endDate,
                },
            },
            include: {
                bus: true,
            },
        });
    }
    async findAll() {
        return this.prisma.schedule.findMany({
            include: {
                bus: true,
            }
        });
    }
};
exports.SchedulesService = SchedulesService;
exports.SchedulesService = SchedulesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SchedulesService);
//# sourceMappingURL=schedules.service.js.map