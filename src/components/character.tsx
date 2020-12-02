import React, { useRef } from "react";
import { Mesh } from "three";
import { MeshProps, useFrame } from "react-three-fiber";
import { CharacterDefault } from "./characters/Default";

export function Character({ who = null, ...props }) {
  const mesh = useRef<Mesh>();
  const CharModel = () => <CharacterDefault />;

  let direction = 1;
  useFrame(() => {
    if (mesh.current.position.x >= 30 || mesh.current.position.x <= -30) {
      direction *= -1;
    }

    mesh.current.position.x += 0.2 * direction;
  });

  return (
    <mesh {...props} ref={mesh} castShadow>
      <CharModel />
    </mesh>
  );
}
