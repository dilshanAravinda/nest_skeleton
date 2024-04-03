import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { HealthModule } from './health/health.module';
import {TemplatesModule} from './templates/templates.module'

@Module({
  imports: [UsersModule, BookModule, HealthModule, TemplatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
