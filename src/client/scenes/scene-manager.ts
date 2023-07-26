import {PerspectiveCamera, Camera, WebGLRenderer, Scene } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class SceneManager {

    // #region singleton
    private static _instance: SceneManager;
    public static get instance(): SceneManager {
        if(SceneManager._instance === undefined) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    }
    // #endregion
    
    private scene!: Scene;
    private camera!: PerspectiveCamera;
    private renderer!: WebGLRenderer;
    private controls!: OrbitControls;

    private constructor() { }


    private createBaseScene(): void {
        
        // Create base scene
        this.scene = new Scene();

        // Generate Camera
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Generate WebGL Renderer
        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Generate controls
        this.controls = new OrbitControls(this.camera, renderer.domElement);

    }

    private subscribeEvents(): void {
        window.addEventListener('resize', this.onWindowResize, false);
        this.animate();
    }

    private onWindowResize(): void {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.render()
    }

    private render(): void {
        this.renderer.render(this.scene, this.camera);
    }

    private animate(): void {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.render();
    }
    
}