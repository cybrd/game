import React, { forwardRef, Suspense } from "react";
import { MeshProps } from "react-three-fiber";
import { useFBX } from "@react-three/drei";

export const CharacterDeer = forwardRef((props: MeshProps, ref) => {
  const fbx = useFBX("/characters/Deer/deer.fbx");
  const newFbx = fbx.clone();
  newFbx.scale.multiplyScalar(0.003);

  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={newFbx} {...props} />
    </Suspense>
  );
});

useFBX.preload("/characters/Deer/deer.fbx");
