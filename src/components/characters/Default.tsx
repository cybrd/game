import React, { forwardRef } from "react";
import { MeshProps } from "react-three-fiber";

export const CharacterDefault = forwardRef((props: MeshProps, ref) => (
  <mesh ref={ref} {...props} castShadow>
    <cylinderBufferGeometry args={[1, 0.5, 3, 32]} />
    <meshStandardMaterial color={"orange"} />
  </mesh>
));
