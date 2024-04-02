import { Injectable } from '@nestjs/common';
import { HealthCheckError, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaHealthCheck extends HealthIndicator {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async isPrismaHealthy(): Promise<HealthIndicatorResult> {
    try {
      await this.prismaService.$connect();
      this.prismaService.$disconnect();
      return this.getStatus('prisma', true);
    } catch (error) {
      throw new HealthCheckError('Prisma database check failed', { prismaError: error });
    }
  }
}
