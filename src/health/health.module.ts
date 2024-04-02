import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [TerminusModule, PrismaModule],
    controllers: [HealthController],
    providers: [PrismaService]
})
export class HealthModule {}
