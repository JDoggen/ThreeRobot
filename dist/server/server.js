"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const socket_manager_1 = require("./sockets/socket-manager");
class App {
    constructor() {
    }
    Start() {
        console.log("Start");
        const app = (0, express_1.default)();
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        socket_manager_1.SocketManager.instance.init(app);
    }
}
new App().Start();
