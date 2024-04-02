import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, BookModule, HealthcheckModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
