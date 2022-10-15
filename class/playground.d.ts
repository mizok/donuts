import { Env } from "./env";
import { Base } from "./base";
import { Clock } from "three";
import { Donuts } from '../mesh/index';
export declare class Playground {
    private base;
    env: Env;
    donuts: Donuts;
    private ready;
    constructor(base: Base);
    init(): void;
    update(clock: Clock): void;
}
