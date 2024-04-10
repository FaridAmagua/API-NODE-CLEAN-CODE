import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(()=>{
    main();
})()


async function main (){
    //await de la base de datos
    new Server({
        port: 4200,
        routes: AppRoutes.routes
    })
        .start()
}