import { Injectable } from '@nestjs/common';

@Injectable()
export class HellowService {
    getHello(): string {
        return 'Hello World!!!';
    }
}
