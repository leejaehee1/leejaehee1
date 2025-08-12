import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello(): string {
    const message = this.configService.get('MESSAGE') as string;
    return message;
  }

  @Get('service-url')
  getServiceUrl(): string {
    return this.configService.get('SERVICE_URL') as string;
  }

  @Get('db-info')
  getTest(): string {
    console.log(this.configService.get('apiVersion'));
    console.log(this.configService.get('logLevel'));
    return this.configService.get('dbInfo') as string;
  }

  @Get('redis-info')
  getRedisInfo(): string {
    return `host: ${this.configService.get('redis.host')}, port: ${this.configService.get('redis.port')}`;
  }
}
