import { Validators } from "../../../config/validators";


export class RegisterUserDto{
    private constructor(
        public nick_name:string,
        public password:string,
        public mail:string,
    ){}
    static create(object:{[key:string]:any}):[string?,RegisterUserDto?] {
        const {nick_name,password,mail} = object;

        if(!nick_name) return ['missing nickname',undefined];
        if(!mail) return ['missing email',undefined];
        if(!Validators.email.test(mail)) return ['email is not valid'];
        if(!password) return ['password to short'];
        if(password.length < 6) return ['Password must be at least 6 characters']

        return [
            undefined,
            new RegisterUserDto(nick_name,password,mail)
        ];
    }
}