
import http  from 'http';
import { Server } from 'socket.io';
import * as core from 'express-serve-static-core';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { ClientEvents, ServerEvents } from '../../typings/events/server/events';

export class SocketManager {
    // #region singleton
    private static _instance: SocketManager;
    public static get instance(): SocketManager {
        if(SocketManager._instance === undefined) {
            SocketManager._instance = new SocketManager();
        }
        return SocketManager._instance;
    }
    // #endregion

    private port: number = 3000; // TODO make configurable
    private server: http.Server;
    private io: Server<ClientEvents, ServerEvents>;

    private constructor() { }

    public init(app: core.Express): void {
        this.createServer(app);
        this.subscribeEvents();
       

        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`)
        });
    }

    private createServer(app: core.Express): void {
        this.server = new http.Server(app)
        this.io = new Server(this.server, { 
            cors: {
                origin: "http://localhost:8080", // TODO fix origin
                methods: ["GET", "POST"]
            }
        });
    }

    private subscribeEvents(): void {
        this.io.on('connection', (socket) => {
            socket.onAny((args) => console.log('On any:', args));
           socket.on('load-basescene', (callback) => {console.log('Server on load-basescene'); callback('some-map-name')});
        });
    }


    // TODO Fix wrapper for io.on
    private listen(): void {

    }

    // TODO fix wrapper for socket.send
    private send(): void {

    }

    
}