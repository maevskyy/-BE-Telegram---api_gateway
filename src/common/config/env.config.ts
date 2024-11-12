import nodeConfig from 'config'

export interface IConfig {
    nodeEnv: string;
    botToken: string;
    app: {
        port: number;
        name: string;
    }
}

export const internalConfig: IConfig = {
    nodeEnv: nodeConfig.get('nodeEnv'),
    botToken: nodeConfig.get('botToken'),
    app: nodeConfig.get('app')
}
