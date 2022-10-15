import { Env } from "./env";
import { Base } from "./base";
import { Clock } from "three";
import { Donuts } from '../mesh/index'

export class Playground {
    env: Env;
    donuts: Donuts;
    private ready = false;
    constructor(private base: Base) {
        this.init();
    }
    init() {
        this.base.getResources().then(() => {
            this.env = new Env(this.base);
            this.donuts = new Donuts(this.base);
            this.ready = true;
        })
    }

    update(clock: Clock) {
        if (this.ready) {
            this.env.update(clock);
            this.donuts.update(clock);
        }

    }
}