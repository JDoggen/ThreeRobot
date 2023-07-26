import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Socket, io } from 'socket.io-client';
import { SceneManager } from './scenes/scene-manager';
import { ClientEvents, ServerEvents } from '../typings/events/server/events';


export class Client {

    constructor() {
    }

    public run(): void {

    }

}

new Client().run();




const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});



let socket: Socket<ServerEvents, ClientEvents> = io(':3000');
socket.connect();
new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    socket.emit('load-basescene', (name) => console.warn('Just loaded basescene: ' + name));
})
// socket.on('move', () => {
//     cube.rotation.x += 0.1;
//     console.log('rotate');
// });
