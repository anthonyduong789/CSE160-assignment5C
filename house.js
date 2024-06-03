import * as THREE from "three";
export class House {
  constructor(scene) {
    this.group = new THREE.Group();
    this.createHouse();
    scene.add(this.group);
  }

  createHouse() {
    const material = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x8b0000 });

    // Base of the house
    const baseGeometry = new THREE.BoxGeometry(1, 1, 1);
    const base = new THREE.Mesh(baseGeometry, material);
    this.group.add(base);

    // Roof of the house
    const roofGeometry = new THREE.ConeGeometry(0.75, 0.6, 4);
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 0.8;
    roof.rotation.y = Math.PI / 4;
    this.group.add(roof);

    // Door
    const doorGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.1);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, -0.2, 0 - 0.51);
    this.group.add(door);
  }

  setPosition(x, y, z) {
    this.group.position.set(x, y, z);
  }

  setScale(scale) {
    this.group.scale.set(scale, scale, scale);
  }
  setRotation(deg) {
    this.group.rotation.y = THREE.MathUtils.degToRad(deg);
  }
}
