import { Base } from './base';
import { AmbientLight, Clock, DirectionalLight, PointLight } from 'three';

export class Env {
    ambientLight: AmbientLight;
    pointLight: PointLight;
    directionalLight: DirectionalLight;

    constructor(private base: Base) {
        this.setLights();
    }

    setLights() {
        this.setAmbientLight();
        this.setPointLight();
        this.setDirectionalLight();
    }

    setPointLight() {
        this.pointLight = new PointLight(0x2b41a1, 3.5);
        this.pointLight.position.set(5, -2, -1);
        this.base.scene.add(this.pointLight)
    }

    setDirectionalLight() {
        this.directionalLight = new DirectionalLight(0xfae598, 4);
        this.directionalLight.position.set(-3, 2, 2);
        this.base.scene.add(this.directionalLight);
    }

    setAmbientLight() {
        this.ambientLight = new AmbientLight(0xfae598, 0.6);
        this.base.scene.add(this.ambientLight)
    }


    update(clock: Clock) {

    }

}