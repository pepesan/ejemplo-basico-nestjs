import { Module } from '@nestjs/common';
import { ObjetoController } from './objeto/objeto.controller';
import { RestController } from './rest/rest.controller';
import { RestService } from './rest/rest.service';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [ObjetoController, RestController],
  providers: [RestService],
  imports: [AdminModule],
})
export class ApiModule {}
