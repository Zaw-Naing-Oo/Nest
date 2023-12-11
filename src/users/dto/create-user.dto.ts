import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsEnum(['Admin', 'User'], {
        message: 'Role must be Admin or User'
    })
    role: 'Admin' | 'User'
}