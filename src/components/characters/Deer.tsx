import React, { forwardRef } from "react";
import { MeshProps } from "react-three-fiber";
import { useFBX } from "@react-three/drei";
import { withPrefix } from "gatsby";

export const CharacterDeer = forwardRef((props: MeshProps, ref) => {
  const fbx = useFBX(withPrefix("/characters/Deer/deer.fbx"));
  const newFbx = fbx.clone();
  newFbx.scale.multiplyScalar(0.003);

  return <primitive ref={ref} object={newFbx} {...props} />;
});

useFBX.preload(withPrefix("/characters/Deer/deer.fbx"));
