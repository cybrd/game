import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import { Floor } from "./floor";
import { Character } from "./character";

export function App() {
  return (
    <Canvas
      shadowMap
      camera={{ position: [5, 10, 10] }}
      style={{ height: window.innerHeight }}
    >
      <directionalLight castShadow position={[50, 100, 50]} />
      <directionalLight position={[50, 100, -50]} intensity={0.3} />
      <directionalLight position={[-50, 100, 50]} intensity={0.3} />
      <directionalLight position={[-50, 100, -50]} intensity={0.3} />
      <OrbitControls />
      <Floor />
      <Character position={[-3, 0, 0]} />
      <Character position={[3, 0, 0]} />
    </Canvas>
  );
}
