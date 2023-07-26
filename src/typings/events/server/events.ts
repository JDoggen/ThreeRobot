import { EventsMap } from "socket.io/dist/typed-events";

export type ServerEvents =  EventsMap & {
	ping: (t1: string, v: number, callback: (value: string) => void) => void;
    // 'load-basescene': (callback: (scene: string) => void) => void;
}

export type ClientEvents = EventsMap & {
	pong: (test: string, callback: (value: string) => void) => void;
    'load-basescene': (callback: (name: string) => void ) => void;
}
