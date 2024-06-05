import * as THREE from "three";
export class UFO {
  constructor(scene, x = 0, y = 0, z = 0) {
    this.scene = scene;
    this.ufo = new THREE.Group();
    this.createUFO();
    this.setPosition(x, y, z);
    scene.add(this.ufo);
  }
  degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  createUFO() {
    // Main body (dome)
    const domeGeometry = new THREE.SphereGeometry(
      2,
      32,
      32,
      0,
      Math.PI * 2,
      0,
      Math.PI / 2,
    );
    const domeMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 });
    const dome = new THREE.Mesh(domeGeometry, domeMaterial);

    dome.position.y = 0;

    // Bottom part
    const bottomGeometry = new THREE.CylinderGeometry(2, 5, 1, 32);
    const bottomMaterial = new THREE.MeshPhongMaterial({ color: 0x606060 });
    const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
    bottom.position.y = 0;

    // Central antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
    const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0x303030 });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.y = 3;

    // Antenna tip
    const antennaTipGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const antennaTipMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const antennaTip = new THREE.Mesh(antennaTipGeometry, antennaTipMaterial);
    antennaTip.position.y = 4;

    // Lights
    const lightGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const lightMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });

    // Create lights around the bottom edge
    for (let i = 0; i < 16; i++) {
      const light = new THREE.Mesh(lightGeometry, lightMaterial);
      const angle = (i / 16) * Math.PI * 2;
      light.position.set(Math.cos(angle) * 2.5, -0.5, Math.sin(angle) * 2.5);
      this.ufo.add(light);
    }

    // Additional decorations
    const decorationGeometry = new THREE.ConeGeometry(0.2, 0.5, 16);
    const decorationMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    for (let i = 0; i < 4; i++) {
      const decoration = new THREE.Mesh(decorationGeometry, decorationMaterial);
      const angle = (i / 4) * Math.PI * 2;
      decoration.position.set(Math.cos(angle) * 2, 1, Math.sin(angle) * 2);
      decoration.rotation.x = Math.PI / 2;
      this.ufo.add(decoration);
    }

    // Assemble UFO
    this.ufo.add(dome);
    this.ufo.add(bottom);
    this.ufo.add(antenna);
    this.ufo.add(antennaTip);
  }

  // Set the position of the UFO
  setPosition(x, y, z) {
    this.ufo.position.set(x, y, z);
  }

  // Optional: Add animation for the UFO
  animate(speed) {
    if (!speed) {
      speed = 0.01;
    }
    this.ufo.rotation.y = this.ufo.rotation.y + 0.01 + 0.01 * speed;
  }
  scale(x, y, z) {
    this.ufo.scale.set(x, y, z);
  }
  rotateX(degrees) {
    this.ufo.rotation.x = this.degreesToRadians(degrees);
  }

  rotateY(degrees) {
    this.ufo.rotation.y = this.degreesToRadians(degrees);
  }

  rotateZ(degrees) {
    this.ufo.rotation.z = this.degreesToRadians(degrees);
  }
}
