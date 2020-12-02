import React from "react";

export function Lights() {
  const d = 50;

  return (
    <group>
      <directionalLight
        castShadow
        position={[50, 100, -50]}
        shadow-camera-left={-d}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-bottom={-d}
      />
      <directionalLight position={[50, 100, 50]} intensity={0.3} />
      <directionalLight position={[-50, 100, 50]} intensity={0.3} />
      <directionalLight position={[-50, 100, -50]} intensity={0.3} />
    </group>
  );
}
