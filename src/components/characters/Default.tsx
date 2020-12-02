import React from "react";

export function CharacterDefault() {
  return (
    <React.Fragment>
      <cylinderBufferGeometry args={[1, 0.5, 3, 32]} />
      <meshStandardMaterial color={"orange"} />
    </React.Fragment>
  );
}
