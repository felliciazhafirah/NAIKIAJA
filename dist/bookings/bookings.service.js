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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookingsService = class BookingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBooking(userId, dto) {
        const seats = await this.prisma.seat.findMany({
            where: {
                id: {
                    in: dto.seatIds,
                },
            },
        });
        const booked = seats.find(seat => seat.isBooked);
        if (booked) {
            throw new common_1.BadRequestException('Seat already booked');
        }
        const schedule = await this.prisma.schedule.findUnique({
            where: {
                id: dto.scheduleId,
            },
        });
        if (!schedule) {
            throw new common_1.BadRequestException('Schedule not found');
        }
        if (schedule.availableTickets <
            dto.seatIds.length) {
            throw new common_1.BadRequestException('Tickets sold out');
        }
        const booking = await this.prisma.booking.create({
            data: {
                userId,
                scheduleId: dto.scheduleId,
                totalPrice: seats.length * schedule.price,
                status: 'PENDING',
                seats: {
                    connect: dto.seatIds.map(id => ({ id })),
                },
            },
        });
        await this.prisma.schedule.update({
            where: {
                id: dto.scheduleId,
            },
            data: {
                availableTickets: {
                    decrement: dto.seatIds.length,
                },
            },
        });
        await this.prisma.seat.updateMany({
            where: {
                id: {
                    in: dto.seatIds,
                },
            },
            data: {
                isBooked: true,
                bookingId: booking.id,
            },
        });
        return booking;
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map