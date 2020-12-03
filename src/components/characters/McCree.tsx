import React, { forwardRef, Suspense } from "react";
import { MeshProps } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

export const CharacterMcCree = forwardRef((props: MeshProps, ref) => {
  const gltf = useGLTF("/characters/McCree/scene.gltf");

  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={gltf.scene.clone()} {...props} />
    </Suspense>
  );
});

useGLTF.preload("/characters/McCree/scene.gltf");
