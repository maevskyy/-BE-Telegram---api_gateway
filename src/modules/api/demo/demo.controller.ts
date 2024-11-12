import { Body, Controller, Get, Inject, Post, Req, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response, Request } from 'express';
import { DemoService } from './demo.service';
import { UserDTO } from './dto';
import { EUserMessagePatterns } from 'src/common';
import { firstValueFrom } from 'rxjs';
import { UserMicroserviceService } from '@/modules/microservices/user-microservice/user-microservice.service';

@Controller('demo')
export class DemoController {

    constructor(
        // @Inject('USER') private readonly userMicroService: ClientProxy,
        private readonly userMicroservice: UserMicroserviceService,
        private readonly demoService: DemoService

    ) { }

    @Post('auth')
    async authHandler(@Body() userData: UserDTO) {

        // const response = await firstValueFrom(
        //     this.userMicroService.send(EUserMessagePatterns.AUTH_USER, userData)
        // );
        // console.log(response, 'this is response')
        const response = await this.userMicroservice.authUser(userData)
        if (!response) return 'error'
        return response
    }

    // @Get()
    // getUserHandler() {
    //     return this.userMicroService.send('users.getOne', {})
    // }

    // @Post()
    // getFilmRecomendations(@Body() body: MovieFilterDto) {

    //     console.log(body)

    //     return 'privet'

    // }
}
