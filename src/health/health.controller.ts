import { Controller, Get } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { 
    HealthCheckService, 
    HealthCheck, 
    DiskHealthIndicator, 
    MemoryHealthIndicator, 
    TypeOrmHealthIndicator, 
    PrismaHealthIndicator} from '@nestjs/terminus';


@Controller('health')
export class HealthController {
    constructor(
        private healthCheckService: HealthCheckService,
        private readonly diskHealthIndicator: DiskHealthIndicator,
        private memoryHealthIndicator: MemoryHealthIndicator,
        private typeOrmHealthIndicator: TypeOrmHealthIndicator,
        private prismaHealthIndicator : PrismaHealthIndicator,
        // private prismaClient: PrismaClient,
        private prismaService : PrismaService
    ){};

    @Get("storage")
    @HealthCheck()
    checkStorage() {
      return this.healthCheckService.check([
        () => this.diskHealthIndicator.checkStorage('storage', { path: 'C:\\', thresholdPercent: 0.5 }),
      ]);
    }


    @Get("memory_heap")
    @HealthCheck()
    checkHeap() {
      return this.healthCheckService.check([
        () => this.memoryHealthIndicator.checkHeap('memory_heap', 150 * 1024 * 1024),
      ]);
    }

    @Get("memory_rss")
    @HealthCheck()
    checkMemory_rss() {
      return this.healthCheckService.check([
        () => this.memoryHealthIndicator.checkRSS('memory_rss', 150 * 1024 * 1024),
      ]);
    }

    @Get("db")
    @HealthCheck()
    checkDb() {
      return this.healthCheckService.check([
        () => this.prismaHealthIndicator.pingCheck("database", this.prismaService),
      ]);
    }

}
