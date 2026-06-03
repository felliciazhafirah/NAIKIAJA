import {
  Controller,
  Get,
  Res,
  UseGuards,
} from '@nestjs/common';

import { Response } from 'express';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../auth/roles.decorator'
import { Role } from 'src/auth/role.enum'


const PDFDocument = require('pdfkit');
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('access-token')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
@Controller('reports')
export class ReportsController {
  constructor(
    private readonly reportsService: ReportsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('pdf')
  async exportPdf(
    @Res() res: Response,
  ) {
    const summary =
      await this.reportsService.getSummary();

    const doc = new PDFDocument();
    const lastSystemUpdate =
    await this.reportsService.getGlobalLastUpdate();

    res.setHeader(
      'Content-Type',
      'application/pdf',
    );

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=laporan-tiket-bus.pdf',
    );

    doc.pipe(res);

    doc.fontSize(20)
      .text('LAPORAN SISTEM TIKET BUS');

    doc.moveDown();

    doc.fontSize(14)
      .text(
        `Total User : ${summary.totalUsers}`,
      );

    doc.text(
      `Total Bus : ${summary.totalBuses}`,
    );

    doc.text(
      `Total Schedule : ${summary.totalSchedules}`,
    );

    doc.text(
      `Total Booking : ${summary.totalBookings}`,
    );


    doc.text(
      `Total Refund : ${summary.totalRefunds}`,
    );

    doc.text(
  `Last System Update : ${lastSystemUpdate.toLocaleString()}`,
);

    doc.end();
  }
}