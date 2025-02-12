import { Controller, Get } from '@nestjs/common';
import { HellowService } from './hellow.service';

@Controller()
export class HellowController {
  constructor(private readonly hellowService: HellowService) {}

  @Get()
  getHello(): string {
    return this.hellowService.getHello();
  }

}
