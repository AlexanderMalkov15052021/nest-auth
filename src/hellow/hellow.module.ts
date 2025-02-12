import { Module } from '@nestjs/common';
import { HellowService } from './hellow.service';
import { HellowController } from './hellow.controller';

@Module({
  imports: [],
  controllers: [HellowController],
  providers: [HellowService],
})
export class HellowModule {}
