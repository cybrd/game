import React, { forwardRef, createRef } from "react";
import { Mesh } from "three";
import { MeshProps, useFrame } from "react-three-fiber";
import { Line } from "@react-three/drei";

export const EffectHP = forwardRef((props: MeshProps, ref) => {
  const thisMesh = createRef<Mesh>();

  useFrame((state) => {
    thisMesh.current.quaternion.copy(state.camera.quaternion);
  });

  return (
    <group position={[0, 4, 0]}>
      <group ref={thisMesh}>
        <mesh ref={ref} {...props}>
          <Line
            points={[
              [-2, 0, 0],
              [2, 0, 0],
            ]}
            lineWidth={5}
            color={"yellow"}
          />
        </mesh>
      </group>
    </group>
  );
});
