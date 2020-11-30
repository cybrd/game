import React, { useRef } from "react";
import { Mesh } from "three";
import { MeshProps } from "react-three-fiber";

export function Character(props: MeshProps) {
  const mesh = useRef<Mesh>();

  return (
    <mesh {...props} ref={mesh} castShadow>
      <cylinderBufferGeometry args={[1, 0.5, 3, 32]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}
