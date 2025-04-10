import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'Gabriel Torres'})
    @IsNotEmpty()
    name: string;

    @ApiProperty({example:'gabriel@email.com'})
    @IsEmail()
    email: string

    @ApiProperty({ example: "123456"})
    @MinLength(6)
    password: string
}