import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'

import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { PrismaService } from '../prisma/prisma.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async register(dto: RegisterDto) {
    const hashed = await bcrypt.hash(dto.password, 10)

    return this.prisma.user.create({
      data: {
        ...dto,
        password: hashed,
        role: 'USER',
      },
    })
  }

  async login(dto: LoginDto) {
    console.log(dto)

    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    })

    if (!user) {
      throw new UnauthorizedException()
    }

    const valid = await bcrypt.compare(
      dto.password,
      user.password,
    )

    if (!valid) {
      throw new UnauthorizedException()
    }

    return {
      access_token: this.jwtService.sign({
        sub: user.id,
        email: user.email, // 👈 TAMBAH INI
        role: user.role,    // sudah ada
      }),

      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    }
  }
}
