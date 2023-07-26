import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

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

    private socket!: Socket<DefaultEventsMap, DefaultEventsMap>;
    private constructor() { }

    public init(): void {
        this.socket = io(':3000');
        this.socket.on('connect', this.onConnect.bind(this));
        this.socket.connect();
    }

    private onConnect(): void {
        
    }

    
}