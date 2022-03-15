import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../../application/use_cases/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCkeck(): string {
    return this.appService.healthCheck();
  }
}
