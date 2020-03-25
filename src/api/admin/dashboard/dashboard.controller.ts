import { Controller, Get } from '@nestjs/common';

@Controller('api/admin/dashboard')
export class DashboardController {
  @Get()
  showDashboard(): string {
    return 'My Dashboard';
  }
}
