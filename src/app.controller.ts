import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dos')
  getDos(): string {
    return 'QUE FUE MANO';
  }

  @Get('some/:id')
  getSome(@Param() params): string {
    return `params >>>>> ${params.id}`;
  }

  @Get('some')
  getSomeQuery(@Query() params): string {
    return `query params >>>>> ${params.someone}`;
  }
}
