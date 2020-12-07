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
    // window.addEventListener("resize", updateSize); // resize stops animation
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
      <OrbitControls maxPolarAngle={Math.PI / 2} />
      <Floor />
      <group>
        <Character who="McCree" position={[-3, 0, 0]} />
        <Character who="Flamingo" position={[-3, 0, 3]} />
        <Character who="Girl1" position={[-3, 0, -3]} />
        <Character who="McCree" position={[-3, 0, 6]} />
        <Character who="Stork" position={[-3, 0, -6]} />
        <Character who="Red" position={[-3, 0, 9]} />
        <Character who="Parrot" position={[-3, 0, -9]} />

        <Character who="Parrot" position={[-6, 0, 0]} />
        <Character who="Stork" position={[-6, 0, 3]} />
        <Character who="Red" position={[-6, 0, -3]} />
        <Character who="Flamingo" position={[-6, 0, 6]} />
        <Character who="Girl1" position={[-6, 0, -6]} />
        <Character who="Red" position={[-6, 0, 9]} />
        <Character who="Girl1" position={[-6, 0, -9]} />

        <Character who="Flamingo" position={[-9, 0, 0]} />
        <Character who="Red" position={[-9, 0, 3]} />
        <Character who="Girl1" position={[-9, 0, -3]} />
        <Character who="Red" position={[-9, 0, 6]} />
        <Character who="Parrot" position={[-9, 0, -6]} />
        <Character who="Stork" position={[-9, 0, 9]} />
        <Character who="Red" position={[-9, 0, -9]} />

        <Character who="McCree" position={[-12, 0, 0]} />
        <Character who="Red" position={[-12, 0, 3]} />
        <Character who="Stork" position={[-12, 0, -3]} />
        <Character who="Girl1" position={[-12, 0, 6]} />
        <Character who="Stork" position={[-12, 0, -6]} />
        <Character who="Parrot" position={[-12, 0, 9]} />
        <Character who="Flamingo" position={[-12, 0, -9]} />
      </group>

      <group>
        <Character who="Stork" side={2} position={[3, 0, 0]} />
        <Character who="Blue" side={2} position={[3, 0, 3]} />
        <Character who="Parrot" side={2} position={[3, 0, -3]} />
        <Character who="McCree" side={2} position={[3, 0, 6]} />
        <Character who="Flamingo" side={2} position={[3, 0, -6]} />
        <Character who="Girl1" side={2} position={[3, 0, 9]} />
        <Character who="Blue" side={2} position={[3, 0, -9]} />

        <Character who="Blue" side={2} position={[6, 0, 0]} />
        <Character who="Girl1" side={2} position={[6, 0, 3]} />
        <Character who="Parrot" side={2} position={[6, 0, -3]} />
        <Character who="McCree" side={2} position={[6, 0, 6]} />
        <Character who="Blue" side={2} position={[6, 0, -6]} />
        <Character who="Flamingo" side={2} position={[6, 0, 9]} />
        <Character who="Stork" side={2} position={[6, 0, -9]} />

        <Character who="Stork" side={2} position={[9, 0, 0]} />
        <Character who="McCree" side={2} position={[9, 0, 3]} />
        <Character who="Blue" side={2} position={[9, 0, -3]} />
        <Character who="Blue" side={2} position={[9, 0, 6]} />
        <Character who="Parrot" side={2} position={[9, 0, -6]} />
        <Character who="Flamingo" side={2} position={[9, 0, 9]} />
        <Character who="Parrot" side={2} position={[9, 0, -9]} />

        <Character who="Parrot" side={2} position={[12, 0, 0]} />
        <Character who="Stork" side={2} position={[12, 0, 3]} />
        <Character who="Blue" side={2} position={[12, 0, -3]} />
        <Character who="Girl1" side={2} position={[12, 0, 6]} />
        <Character who="McCree" side={2} position={[12, 0, -6]} />
        <Character who="Girl1" side={2} position={[12, 0, 9]} />
        <Character who="Stork" side={2} position={[12, 0, -9]} />
      </group>
    </Canvas>
  );
}
