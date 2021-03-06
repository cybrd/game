import React, { forwardRef } from "react";

export const CharacterRed = forwardRef((props: any, ref) => (
  <mesh ref={ref} {...props} castShadow>
    <cylinderBufferGeometry args={[1, 0.5, 3, 32]} />
    <meshStandardMaterial color={"red"} />
  </mesh>
));
