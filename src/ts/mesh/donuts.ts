import { Clock, Object3D } from "three";
import { Base } from "../class/base";

export class Donuts {
    scene: Object3D;
    constructor(private base: Base) {
        this.setModel()
    }

    setModel() {
        this.scene = this.base.resources.donutsModel.scene as Object3D;

        this.base.scene.add(this.scene);
        this.scene.scale.set(45, 45, 45)
        this.scene.position.set(2, 0, 0)
        this.scene.rotation.x = Math.PI * 0.3
        this.scene.rotation.z = Math.PI * 0.15
    }

    update(clock: Clock) {
        this.scene.rotation.y = clock.getElapsedTime()
    }
}