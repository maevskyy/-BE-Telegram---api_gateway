import { config as dotenvConfig } from 'dotenv'
import { IConfig } from 'src/common/config'

dotenvConfig({ path: '.env.local' })

export default {
    nodeEnv: process.env.NODE_ENV || 'development',
    app: {
        port: Number.parseInt(process.env.APP_PORT || '8000', 10),
        name: process.env.APP_NAME || 'api-gateway',
    },
    botToken: process.env.BOT_TOKEN || '7523558216:AAEVrYtlKD05I2GlScw4ACrb162lzZzYTns'
} as IConfig