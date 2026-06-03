import {
    Injectable,
    CanActivate,
    ExecutionContext,
} from '@nestjs/common'

import { Reflector } from '@nestjs/core'

@Injectable()
export class RolesGuard
    implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) { }

    canActivate(
        context: ExecutionContext,
    ): boolean {

        const roles = this.reflector.getAllAndOverride<string[]>(
            'roles',
            [context.getHandler(), context.getClass()],
        )

        if (!roles) {
            return true
        }

        const request =
            context.switchToHttp().getRequest()
        console.log('USER FROM SWAGGER:', request.user)

        const user = request.user

        if (!user) {
            return false
        }

        return roles.includes(user.role)

    }

}