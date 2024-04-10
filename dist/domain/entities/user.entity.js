"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(id, nick_name, 
    // public username:string,
    // public last_name: string
    password, mail, role, img) {
        this.id = id;
        this.nick_name = nick_name;
        this.password = password;
        this.mail = mail;
        this.role = role;
        this.img = img;
    }
}
exports.UserEntity = UserEntity;
