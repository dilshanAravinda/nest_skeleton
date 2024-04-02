import { Module } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { HealthcheckController } from './healthcheck.controller';
import { PrismaHealthCheck } from './prismaHealthCheck.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HealthcheckService, PrismaHealthCheck],
  controllers: [HealthcheckController]
})
export class HealthcheckModule {}
