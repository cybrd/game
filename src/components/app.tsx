import React, { useLayoutEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import { Floor } from "./floor";
import { Character } from "./character";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export function App() {
  const [width, height] = useWindowSize();
  let style = { width, height };

  return (
    <Canvas shadowMap camera={{ position: [5, 10, 10] }} style={style}>
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
