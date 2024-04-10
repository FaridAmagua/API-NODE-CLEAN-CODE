import express, { Router } from 'express';


interface Options{
    port?: number;
    routes:Router;
}

export class Server  {

    public readonly app = express();

    private readonly port: number;

    private readonly routes:Router;

    constructor( options : Options ){
        const {port = 3100,routes} = options;
        this.port = port;
        this.routes = routes;
    }


    async start () {
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:true }));    //Url encoded

        //Usamos las routes predefinidas
        this.app.use(this.routes);
        //El port que lanzamos por el constructor de Class Server o si no ponemos uno ya lo ponemos por default
        this.app.listen(this.port,() =>{
            console.log(`Server running on port ${this.port}`)
        })
    }
}
