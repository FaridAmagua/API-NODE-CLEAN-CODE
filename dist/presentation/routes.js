"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./auth/routes");
//método statics o método normales
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/auth', routes_1.AuthRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
