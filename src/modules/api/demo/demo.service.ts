import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class DemoService {

    // constructor(
    //     @Inject('USER') private readonly userMicroService: ClientProxy
    // ) { }

    // createUser() {
    //     return this.userMicroService.send({ cmd: 'create_user' }, {})
    // }
}
