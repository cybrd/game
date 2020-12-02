import React, { useLayoutEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";

import { Lights } from "./lights";
import { Floor } from "./floor";
import { Character } from "./character";
import { CharacterRed } from "./characters/Red";

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
    <Canvas
      shadowMap
      camera={{ position: [-8, 30, 30], fov: 70 }}
      style={style}
    >
      <Lights />
      <Stats />
      <OrbitControls />
      <Floor />
      <group>
        <Character position={[-3, 0, 0]} />
        <Character position={[-3, 0, 3]} />
        <Character position={[-3, 0, -3]} />
        <Character position={[-3, 0, 6]} />
        <Character position={[-3, 0, -6]} />
        <Character position={[-3, 0, 9]} />
        <Character position={[-3, 0, -9]} />

        <Character position={[-6, 0, 0]} />
        <Character position={[-6, 0, 3]} />
        <Character position={[-6, 0, -3]} />
        <Character position={[-6, 0, 6]} />
        <Character position={[-6, 0, -6]} />
        <Character position={[-6, 0, 9]} />
        <Character position={[-6, 0, -9]} />

        <Character position={[-9, 0, 0]} />
        <Character position={[-9, 0, 3]} />
        <Character position={[-9, 0, -3]} />
        <Character position={[-9, 0, 6]} />
        <Character position={[-9, 0, -6]} />
        <Character position={[-9, 0, 9]} />
        <Character position={[-9, 0, -9]} />

        <Character position={[-12, 0, 0]} />
        <Character position={[-12, 0, 3]} />
        <Character position={[-12, 0, -3]} />
        <Character position={[-12, 0, 6]} />
        <Character position={[-12, 0, -6]} />
        <Character position={[-12, 0, 9]} />
        <Character position={[-12, 0, -9]} />
      </group>

      <group>
        <Character position={[3, 0, 0]} />
        <Character position={[3, 0, 3]} />
        <Character position={[3, 0, -3]} />
        <Character position={[3, 0, 6]} />
        <Character position={[3, 0, -6]} />
        <Character position={[3, 0, 9]} />
        <Character position={[3, 0, -9]} />

        <Character position={[6, 0, 0]} />
        <Character position={[6, 0, 3]} />
        <Character position={[6, 0, -3]} />
        <Character position={[6, 0, 6]} />
        <Character position={[6, 0, -6]} />
        <Character position={[6, 0, 9]} />
        <Character position={[6, 0, -9]} />

        <Character position={[9, 0, 0]} />
        <Character position={[9, 0, 3]} />
        <Character position={[9, 0, -3]} />
        <Character position={[9, 0, 6]} />
        <Character position={[9, 0, -6]} />
        <Character position={[9, 0, 9]} />
        <Character position={[9, 0, -9]} />

        <Character position={[12, 0, 0]} />
        <Character position={[12, 0, 3]} />
        <Character position={[12, 0, -3]} />
        <Character position={[12, 0, 6]} />
        <Character position={[12, 0, -6]} />
        <Character position={[12, 0, 9]} />
        <Character position={[12, 0, -9]} />
      </group>
    </Canvas>
  );
}
