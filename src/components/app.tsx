import React from "react";
import * as THREE from "three";

export function App() {
  let container;

  let camera, scene, renderer;

  const spheres = [];

  init();
  animate();

  function init() {
    container = document.createElement("div");
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      100000
    );
    camera.position.z = 3200;

    scene = new THREE.Scene();
    scene.background = new THREE.CubeTextureLoader()
      .setPath("/textures/")
      .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

    const geometry = new THREE.SphereBufferGeometry(100, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      envMap: scene.background,
    });

    for (let i = 0; i < 500; i++) {
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = Math.random() * 10000 - 5000;
      mesh.position.y = Math.random() * 10000 - 5000;
      mesh.position.z = Math.random() * 10000 - 5000;

      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

      scene.add(mesh);

      spheres.push(mesh);
    }

    //

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //
  }

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    const timer = 0.0001 * Date.now();

    for (let i = 0, il = spheres.length; i < il; i++) {
      const sphere = spheres[i];

      sphere.position.x = 5000 * Math.cos(timer + i);
      sphere.position.y = 5000 * Math.sin(timer + i * 1.1);
    }

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  return <div></div>;
}
