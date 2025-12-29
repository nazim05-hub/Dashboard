import { Controller, Get } from '@nestjs/common';
import { SystemService } from './system.service';

@Controller('api/system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get('stats')
  async getStats() {
    return this.systemService.getStats();
  }

  @Get('stats/bandwidth')
  async getBandwidthStats() {
    return this.systemService.getBandwidthStats();
  }

  @Get('stats/nodes')
  async getNodesStatistics() {
    return this.systemService.getNodesStatistics();
  }

  @Get('health')
  async getHealth() {
    return this.systemService.getHealth();
  }

  @Get('nodes/metrics')
  async getNodesMetrics() {
    return this.systemService.getNodesMetrics();
  }
}


