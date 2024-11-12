import { Module } from '@nestjs/common';
import { UserMicroserviceService } from './user-microservice.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER',
        transport: Transport.TCP,
        options: {
          port: 8001
        }
      }
    ])
  ],
  providers: [UserMicroserviceService],
  exports: [UserMicroserviceService]
})
export class UserMicroserviceModule { }
