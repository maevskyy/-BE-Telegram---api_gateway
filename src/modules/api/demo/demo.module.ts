import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
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
  controllers: [DemoController],
  providers: [DemoService]
})
export class DemoModule { }
