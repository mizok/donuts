import { WebGLRenderer } from 'three';
import { Base } from './base';
export declare class Renderer {
    private base;
    instance: WebGLRenderer;
    private sizer;
    private canvas;
    private scene;
    private camera;
    constructor(base: Base);
    setInstance(): void;
    resize(): void;
    update(): void;
}
