import { ArrayNotEmpty, IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Genre, Duration, AgeRating, Language } from '../types'

export class MovieFilterDto {

    @IsString()
    telegramUserId: string

    @IsArray()
    @IsEnum(Genre, { each: true })
    @ArrayNotEmpty()
    genres: Genre[];

    @IsArray()
    @IsEnum(Duration, { each: true })
    @ArrayNotEmpty()
    duration: Duration[];

    @IsArray()
    @IsEnum(AgeRating, { each: true })
    @ArrayNotEmpty()
    ageRating: AgeRating[];

    @IsArray()
    @IsEnum(Language, { each: true })
    @ArrayNotEmpty()
    language: Language[];

    @IsOptional()
    @IsString()
    releaseYear?: string;
}

// export class UserDTO {
// externalId: string
// tgId: string
// tgname: string
// tgusername: string
// tglanguageCode: string
// }
