import { Clock, Object3D } from "three";
import { Base } from "../class/base";
export declare class Donuts {
    private base;
    scene: Object3D;
    constructor(base: Base);
    setModel(): void;
    update(clock: Clock): void;
}
