import { Base } from './base';
import { AmbientLight, Clock, DirectionalLight, PointLight } from 'three';
export declare class Env {
    private base;
    ambientLight: AmbientLight;
    pointLight: PointLight;
    directionalLight: DirectionalLight;
    constructor(base: Base);
    setLights(): void;
    setPointLight(): void;
    setDirectionalLight(): void;
    setAmbientLight(): void;
    update(clock: Clock): void;
}
