import * as THREE from "three";
export class Tank {
  constructor(scene) {
    this.scene = scene;
    this.tank = new THREE.Group();

    // Tank body
    const bodyGeometry = new THREE.BoxGeometry(4, 1.5, 2);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.tank.add(body);

    // Tank turret
    const turretGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const turretMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const turret = new THREE.Mesh(turretGeometry, turretMaterial);
    turret.rotation.z = Math.PI / 2;
    turret.position.set(1.5, 0.5, 0);
    this.tank.add(turret);

    // Add tank to scene
    this.scene.add(this.tank);
  }

  setPosition(x, y, z) {
    this.tank.position.set(x, y, z);
  }

  setRotation(x, y, z) {
    this.tank.rotation.set(x, y, z);
  }

  setScale(x, y, z) {
    this.tank.scale.set(x, y, z);
  }
}
