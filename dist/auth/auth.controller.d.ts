import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    test(): string;
    register(dto: RegisterDto): Promise<{
        name: string;
        email: string;
        password: string;
        phone: string | null;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        id: number;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
}
