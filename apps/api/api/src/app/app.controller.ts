import { Controller, Get, Header } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header("Content-Type", "application/json")
  getData() {
    return this.appService.getData();
  }
}
