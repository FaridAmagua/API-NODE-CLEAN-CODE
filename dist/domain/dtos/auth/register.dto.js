"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const validators_1 = require("../../../config/validators");
class RegisterDto {
    constructor(nick_name, password, mail) {
        this.nick_name = nick_name;
        this.password = password;
        this.mail = mail;
    }
    static create(object) {
        const { nick_name, password, email } = object;
        if (!nick_name)
            return ['missing nickname', undefined];
        if (!email)
            return ['missing email', undefined];
        if (!validators_1.Validators.email.test(email))
            return ['email is not valid'];
        if (!password)
            return ['password to short'];
        if (password.length < 6)
            return ['Password must be at least 6 characters'];
        return [
            undefined,
            new RegisterDto(nick_name, email, password)
        ];
    }
}
exports.RegisterDto = RegisterDto;
