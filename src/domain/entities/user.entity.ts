






export class UserEntity {

    constructor(
        public id: string,
        public nick_name:string,
        // public username:string,
        // public last_name: string
        public password: string,
        public mail:string,
        public  role:string[],
        public img?:string,
    
    ){
    }
}