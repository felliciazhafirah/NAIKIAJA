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
        const schedule = await this.prisma.schedule.findUnique({
            where: { id: dto.scheduleId },
        });
        if (!schedule) {
            throw new common_1.BadRequestException('Schedule not found');
        }
        const seats = await this.prisma.seat.findMany({
            where: {
                busId: schedule.busId,
                seatNumber: {
                    in: dto.seatIds,
                },
            },
        });
        const booked = seats.find(seat => seat.isBooked);
        if (booked) {
            throw new common_1.BadRequestException('Seat already booked');
        }
        if (!schedule) {
            throw new common_1.BadRequestException('Schedule not found');
        }
        if (schedule.availableTickets <
            dto.seatIds.length) {
            throw new common_1.BadRequestException('Tickets sold out');
        }
        const seatCount = dto.seatIds.length;
        const booking = await this.prisma.booking.create({
            data: {
                Namalengkap: dto.Namalengkap,
                Email: dto.Email,
                NoHp: dto.NoHp,
                KTP: dto.KTP,
                userId,
                scheduleId: dto.scheduleId,
                totalPrice: seatCount * schedule.price,
                status: 'PENDING',
                seats: {
                    connect: seats.map(seat => ({
                        id: seat.id,
                    })),
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
                seatNumber: {
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
    async payBooking(id) {
        return this.prisma.booking.update({
            where: { id },
            data: {
                status: 'PAID',
            },
        });
    }
    async getInvoice(id) {
        const booking = await this.prisma.booking.findUnique({
            where: { id },
            include: {
                schedule: true,
                seats: true,
            },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking tidak ditemukan');
        }
        if (booking.status !== 'PAID') {
            throw new common_1.BadRequestException('Pembayaran belum selesai');
        }
        return booking;
    }
    async getMyBookings(userId) {
        return this.prisma.booking.findMany({
            where: {
                userId,
            },
            include: {
                schedule: true,
                seats: true,
            },
        });
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map