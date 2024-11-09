import { Context, Telegraf } from 'telegraf';
import { InjectBot, On, Start, Update } from 'nestjs-telegraf';
import axios from 'axios'

const webAppUrl = 'https://25.26.32.238:5173/reactjs-template'

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>
  ) { }

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Hi friend')
  }

  @On('text')
  async textTest(ctx: Context) {
    ctx.sendMessage('Privet', { reply_markup: { inline_keyboard: [[{ text: 'Привет', web_app: { url: webAppUrl } }]] } })
  }

  // @On('voice')
  // async onVoiceMessage(ctx: Context) {
  //   try {
  //     if ('voice' in ctx.message) {
  //       await ctx.telegram.sendMessage(ctx.message.chat.id, 'Processing voice message ...');

  //       const fileUrl = await ctx.telegram.getFileLink(ctx.message.voice.file_id);

  //       const { data: voiceMessageStream } = await axios.get(fileUrl.href, { responseType: 'stream' })

  //       await ctx.telegram.sendMessage(ctx.message.chat.id, `Voice message received! File URL: ${fileUrl}`);
  //     } else {
  //       await ctx.telegram.sendMessage(ctx.message.chat.id, 'Это не голосовое сообщение.');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     await ctx.telegram.sendMessage(ctx.message.chat.id, 'Something went wrong');
  //   }
  // }
}
