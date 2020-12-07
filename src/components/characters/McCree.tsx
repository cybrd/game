import React, { forwardRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { withPrefix } from "gatsby";

export const CharacterMcCree = forwardRef((props: any, ref) => {
  const gltf = useGLTF(withPrefix("/characters/McCree/scene.gltf"));
  const scene = gltf.scene.clone();
  scene.scale.multiplyScalar(1.5);
  scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.castShadow = false;
    }
  });

  if (props.side === 1) {
    scene.rotateY(Math.PI / 2);
  } else if (props.side === 2) {
    scene.rotateY(-Math.PI / 2);
  }

  return <primitive ref={ref} object={scene} {...props} />;
});

useGLTF.preload(withPrefix("/characters/McCree/scene.gltf"));
