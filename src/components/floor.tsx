import React from "react";

export function Floor() {
  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[60, 30]} />
        <meshStandardMaterial color={"lightblue"} />
      </mesh>
      <mesh>
        <gridHelper
          args={[100, 100, `white`, `gray`]}
          position={[0, -1.5, 0]}
        ></gridHelper>
      </mesh>
    </group>
  );
}
