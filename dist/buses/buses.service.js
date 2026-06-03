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
exports.BusesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BusesService = class BusesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const bus = await this.prisma.bus.create({
            data: dto,
        });
        const seats = [];
        for (let i = 1; i <= dto.totalSeats; i++) {
            seats.push({
                seatNumber: `A${i}`,
                busId: bus.id,
            });
        }
        await this.prisma.seat.createMany({
            data: seats,
        });
        return bus;
    }
    async remove(id) {
        return this.prisma.bus.update({
            where: {
                id,
            },
            data: {
                isActive: false,
            },
        });
    }
    async findAll(busClass) {
        return this.prisma.bus.findMany({
            where: busClass
                ? {
                    class: busClass,
                }
                : {},
        });
    }
};
exports.BusesService = BusesService;
exports.BusesService = BusesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BusesService);
//# sourceMappingURL=buses.service.js.map