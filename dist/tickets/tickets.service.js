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
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const QRCode = require("qrcode");
let TicketsService = class TicketsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generate(bookingId) {
        const booking = await this.prisma.booking.findUnique({
            where: {
                id: bookingId,
            },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking not found');
        }
        const qr = await QRCode.toDataURL(bookingId.toString());
        return this.prisma.ticket.create({
            data: {
                bookingId,
                qrCode: qr,
            },
            include: {
                booking: {
                    include: {
                        user: true,
                        schedule: true,
                        seats: true,
                    },
                },
            },
        });
    }
    async findTicket(bookingId) {
        return this.prisma.ticket.findUnique({
            where: {
                bookingId,
            },
            include: {
                booking: {
                    include: {
                        schedule: true,
                        seats: true,
                        user: true,
                    },
                },
            },
        });
    }
};
exports.TicketsService = TicketsService;
exports.TicketsService = TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TicketsService);
//# sourceMappingURL=tickets.service.js.map