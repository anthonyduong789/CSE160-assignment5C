import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
export class Farmer {
  constructor(scene, scale, x = 0, y = 0, z = 0) {
    this.scene = scene;
    this.object = null;
    this.pivot = new THREE.Group();
    this.pivot.position.set(x, y, z);
    this.loader = new OBJLoader();
    scene.add(this.pivot);
    this.loader.load(
      "./Farmer/17864_Farmer_v1.obj",
      (object) => {
        object.scale.set(scale, scale, scale);
        // position relative to the pivot
        //         object.rotation.x = THREE.MathUtils.degToRad(-90);
        // object.position.set(0, 0, 0);
        // object.position.set(5, 0, 0); // This sets the object 5 units away from the pivot along the x-axis

        this.object = object;
        this.pivot.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error happened", error);
      },
    );
  }
  animate() {
    this.pivot.rotation.y -= 0.05;
    // this.pivot.rotation.z+=0.0011;
    // this.pivot.rotation.x+=.01;
    // this.object.rotation.x += time*0.2
    // this.object.rotation.y += time*0.2
    // if (this.pivot) {
    //   time *= 0.001; // convert time to seconds
    //   const speed = 1 + 0 * 0.1;
    //   const rot = time * speed;
    //    this.pivot.rotation.x = rot;
    //    // this.pivot.rotation.y = rot;
    // }
    // if (this.object) {
    //    time *= 0.001; // convert time to seconds
    //    const speed = 1 + 2 * 0.1;
    //    const rot = time * speed;
    //    this.object.rotation.x = rot;
    //    this.object.rotation.y = rot;
    //  }
  }
}
