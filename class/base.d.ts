import { Renderer } from './renderer';
import { Camera } from './camera';
import { Ticker, Sizer } from '../util';
import { Scene } from 'three';
import { Playground } from './playground';
export declare class Base {
    canvas: HTMLCanvasElement;
    sizer: Sizer;
    scene: Scene;
    ticker: Ticker;
    camera: Camera;
    renderer: Renderer;
    playground: Playground;
    resources: {
        [key: string]: any;
    };
    constructor(canvas: HTMLCanvasElement);
    initResizeMechanic(): void;
    initTickMechanic(): void;
    getResources(): Promise<void>;
}
