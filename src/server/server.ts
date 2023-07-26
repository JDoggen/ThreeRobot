import express from "express";
import path from "path";
import { SocketManager } from "./sockets/socket-manager";

class App {

    constructor() {
    }

    public Start() {
        console.log("Start");
        
        const app = express()
        app.use(express.static(path.join(__dirname, '../client')));

        SocketManager.instance.init(app);
    }
}

new App().Start()
