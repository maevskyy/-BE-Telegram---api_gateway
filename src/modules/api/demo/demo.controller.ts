import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response, Request } from 'express';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {

    constructor(
        @Inject('USER') private readonly userMicroService: ClientProxy,
        private readonly demoService: DemoService

    ) { }

    @Get()
    getUserHandler() {
        return this.userMicroService.send('users.getOne', {})
    }
}
