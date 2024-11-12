import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserMicroserviceModule } from '@/modules/microservices';

@Module({
  imports: [
    // ClientsModule.register(
    //   [
    //   {
    //     name: 'USER',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 8001
    //     }
    //   }
    // ])
    UserMicroserviceModule
  ],
  controllers: [DemoController],
  providers: [DemoService]
})
export class DemoModule { }
