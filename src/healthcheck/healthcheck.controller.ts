import { Controller, Get } from '@nestjs/common';
import {PrismaHealthCheck} from './prismaHealthCheck.service';

@Controller('healthcheck')
export class HealthcheckController {
    constructor(private readonly prismaHealthCheck : PrismaHealthCheck){}
    @Get()
    async test(){
       return this.prismaHealthCheck.isPrismaHealthy()
    }
}
