import React from "react";

export function CharacterRed() {
  return (
    <group>
      <cylinderBufferGeometry args={[1, 0.5, 3, 32]} />
      <meshStandardMaterial color={"orange"} />
    </group>
  );
}
