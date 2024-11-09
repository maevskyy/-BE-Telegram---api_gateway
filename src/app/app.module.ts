import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { config } from '../common/config';
import { DemoModule } from '../modules/api/demo/demo.module';
import * as Modules from '../modules'
import { ClientsModule, Transport } from '@nestjs/microservices';

const sessions = new LocalSession({ database: 'session_db.json' })

let imports = [
  ...Object.values(Modules),
  TelegrafModule.forRoot({
    middlewares: [sessions.middleware()],
    token: '7523558216:AAEVrYtlKD05I2GlScw4ACrb162lzZzYTns'
  })
];

let providers = [AppUpdate]
let controllers;


@Module({
  imports,
  controllers,
  providers,
})
export class AppModule { }
