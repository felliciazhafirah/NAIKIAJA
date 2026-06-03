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
exports.RefundsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const notification_service_1 = require("../notification/notification.service");
let RefundsService = class RefundsService {
    constructor(prisma, notificationService) {
        this.prisma = prisma;
        this.notificationService = notificationService;
    }
    async create(dto) {
        const booking = await this.prisma.booking.findUnique({
            where: {
                id: dto.bookingId,
            },
            include: {
                seats: true,
            },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking tidak ditemukan');
        }
        if (booking.status !== 'PAID') {
            throw new common_1.BadRequestException('Booking belum dibayar');
        }
        await this.prisma.seat.updateMany({
            where: {
                bookingId: booking.id,
            },
            data: {
                isBooked: false,
                bookingId: null,
            },
        });
        await this.prisma.booking.update({
            where: {
                id: booking.id,
            },
            data: {
                status: 'REFUNDED',
            },
        });
        return this.prisma.refund.create({
            data: {
                bookingId: dto.bookingId,
                reason: dto.reason,
                status: 'PENDING',
            },
        });
    }
    async getMyRefund(userId) {
        return this.prisma.refund.findMany({
            where: {
                booking: {
                    userId: userId,
                },
            },
            include: {
                booking: true,
            },
        });
    }
    async findAll(status) {
        return this.prisma.refund.findMany({
            where: status
                ? {
                    status: status,
                }
                : {},
            include: {
                booking: true,
            },
            orderBy: {
                id: 'desc',
            },
        });
    }
    async findOne(id) {
        console.log('ID masuk:', id);
        return this.prisma.refund.findUnique({
            where: {
                id,
            },
        });
    }
    async findMyRefunds(userId) {
        return this.prisma.refund.findMany({
            where: {
                booking: {
                    userId,
                },
            },
            include: {
                booking: true,
            },
        });
    }
    async approve(refundId) {
        const refund = await this.prisma.refund.update({
            where: { id: refundId },
            data: {
                status: 'APPROVED',
            },
            include: {
                booking: true,
            },
        });
        await this.notificationService.create(refund.booking.userId, 'Refund Disetujui', `Refund untuk booking #${refund.booking.id} telah disetujui. Dana akan diproses.`);
        return refund;
    }
};
exports.RefundsService = RefundsService;
exports.RefundsService = RefundsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_service_1.NotificationService])
], RefundsService);
//# sourceMappingURL=refunds.service.js.map