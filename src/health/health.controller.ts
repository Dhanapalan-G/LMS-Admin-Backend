import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('api/v1/health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async check() {
    const result = await this.healthService.check();

    return {
      message: 'Database connection is working',
      data: result,
    };
  }
}
