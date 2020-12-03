import React, { useLayoutEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";

import { Lights } from "./lights";
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
    <Canvas shadowMap camera={{ position: [-6, 30, 30] }} style={style}>
      <Lights />
      <Stats />
      <OrbitControls />
      <Floor />
      <group>
        <Character who="Red" position={[-3, 0, 0]} />
        <Character who="Red" position={[-3, 0, 3]} />
        <Character who="Red" position={[-3, 0, -3]} />
        <Character who="Red" position={[-3, 0, 6]} />
        <Character who="Red" position={[-3, 0, -6]} />
        <Character who="Red" position={[-3, 0, 9]} />
        <Character who="Red" position={[-3, 0, -9]} />

        <Character who="Red" position={[-6, 0, 0]} />
        <Character who="Red" position={[-6, 0, 3]} />
        <Character who="Red" position={[-6, 0, -3]} />
        <Character who="Red" position={[-6, 0, 6]} />
        <Character who="Red" position={[-6, 0, -6]} />
        <Character who="Red" position={[-6, 0, 9]} />
        <Character who="Red" position={[-6, 0, -9]} />

        <Character who="Red" position={[-9, 0, 0]} />
        <Character who="Red" position={[-9, 0, 3]} />
        <Character who="Red" position={[-9, 0, -3]} />
        <Character who="Red" position={[-9, 0, 6]} />
        <Character who="Red" position={[-9, 0, -6]} />
        <Character who="Red" position={[-9, 0, 9]} />
        <Character who="Red" position={[-9, 0, -9]} />

        <Character who="Red" position={[-12, 0, 0]} />
        <Character who="Red" position={[-12, 0, 3]} />
        <Character who="Red" position={[-12, 0, -3]} />
        <Character who="Red" position={[-12, 0, 6]} />
        <Character who="Red" position={[-12, 0, -6]} />
        <Character who="Red" position={[-12, 0, 9]} />
        <Character who="Red" position={[-12, 0, -9]} />
      </group>

      <group>
        <Character who="Blue" position={[3, 0, 0]} />
        <Character who="Blue" position={[3, 0, 3]} />
        <Character who="Blue" position={[3, 0, -3]} />
        <Character who="Blue" position={[3, 0, 6]} />
        <Character who="Blue" position={[3, 0, -6]} />
        <Character who="Blue" position={[3, 0, 9]} />
        <Character who="Blue" position={[3, 0, -9]} />

        <Character who="Blue" position={[6, 0, 0]} />
        <Character who="Blue" position={[6, 0, 3]} />
        <Character who="Blue" position={[6, 0, -3]} />
        <Character who="Blue" position={[6, 0, 6]} />
        <Character who="Blue" position={[6, 0, -6]} />
        <Character who="Blue" position={[6, 0, 9]} />
        <Character who="Blue" position={[6, 0, -9]} />

        <Character who="Blue" position={[9, 0, 0]} />
        <Character who="Blue" position={[9, 0, 3]} />
        <Character who="Blue" position={[9, 0, -3]} />
        <Character who="Blue" position={[9, 0, 6]} />
        <Character who="Blue" position={[9, 0, -6]} />
        <Character who="Blue" position={[9, 0, 9]} />
        <Character who="Blue" position={[9, 0, -9]} />

        <Character who="Blue" position={[12, 0, 0]} />
        <Character who="Blue" position={[12, 0, 3]} />
        <Character who="Blue" position={[12, 0, -3]} />
        <Character who="Blue" position={[12, 0, 6]} />
        <Character who="Blue" position={[12, 0, -6]} />
        <Character who="Blue" position={[12, 0, 9]} />
        <Character who="Blue" position={[12, 0, -9]} />
      </group>
    </Canvas>
  );
}
