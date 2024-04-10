"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor() {
        this.registerUser = (req, res) => {
            res.json(req.body);
        };
        this.loginUser = (req, res) => {
            res.json('login User Controller');
        };
    }
}
exports.AuthController = AuthController;
