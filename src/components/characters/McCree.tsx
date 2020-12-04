import React, { forwardRef } from "react";
import { MeshProps } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { withPrefix } from "gatsby";

export const CharacterMcCree = forwardRef((props: MeshProps, ref) => {
  const gltf = useGLTF(withPrefix("/characters/McCree/scene.gltf"));

  return <primitive ref={ref} object={gltf.scene.clone()} {...props} />;
});

useGLTF.preload(withPrefix("/characters/McCree/scene.gltf"));
