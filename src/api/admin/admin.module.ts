import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard/dashboard.controller';

@Module({
  controllers: [DashboardController]
})
export class AdminModule {}
