import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

export enum EUserMessagePatterns {
    AUTH_USER = 'users.auth',
}

export interface AuthUserDTO {
    externalId: string;
    tgId: string;
    tgname: string;
    tgusername: string;
    tglanguageCode: string;
}

export interface UserResponseDTO {
    userId: string;
    username: string;
    status: string;
}

@Injectable()
export class UserMicroserviceService {
    constructor(@Inject('USER') private readonly userMicroService: ClientProxy) { }

    async sendMessage<TRequest, TResponse>(
        pattern: EUserMessagePatterns,
        data: TRequest
    ): Promise<TResponse> {

        try {
            return await firstValueFrom(
                this.userMicroService.send<TResponse>(pattern, data)
            );
        } catch (err) {
            console.error('Error during microservice call:', err);
            throw err;
        }
    }

    async authUser(userData: AuthUserDTO): Promise<UserResponseDTO> {
        return this.sendMessage<AuthUserDTO, UserResponseDTO>(
            EUserMessagePatterns.AUTH_USER,
            userData
        );
    }
}
