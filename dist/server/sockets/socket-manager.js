"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketManager = void 0;
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
class SocketManager {
    static get instance() {
        if (SocketManager._instance === undefined) {
            SocketManager._instance = new SocketManager();
        }
        return SocketManager._instance;
    }
    constructor() {
        // #endregion
        this.port = 3000; // TODO make configurable
    }
    init(app) {
        this.createServer(app);
        this.subscribeEvents();
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
    createServer(app) {
        this.server = new http_1.default.Server(app);
        this.io = new socket_io_1.Server(this.server, {
            cors: {
                origin: "http://localhost:8080",
                methods: ["GET", "POST"]
            }
        });
    }
    subscribeEvents() {
        this.io.on('connection', (socket) => {
            socket.onAny((args) => console.log('On any:', args));
            socket.on('load-basescene', (callback) => { console.log('Server on load-basescene'); callback('some-map-name'); });
        });
    }
    // TODO Fix wrapper for io.on
    listen() {
    }
    // TODO fix wrapper for socket.send
    send() {
    }
}
exports.SocketManager = SocketManager;
