import { RegisterUserDto } from "../dtos/auth/auth.register-user.dto"
export abstract class AuthRepository{

    //login

    //register 
    abstract register (registerUserDto:RegisterUserDto):<UserEntity>


}