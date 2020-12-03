import React, { forwardRef, Suspense } from "react";
import { Mesh, Texture, MeshBasicMaterial } from "three";
import { MeshProps } from "react-three-fiber";
import { useFBX, useTexture } from "@react-three/drei";

export const CharacterGirl1 = forwardRef((props: MeshProps, ref) => {
  const texture = useTexture("/characters/Girl1/textures.png") as Texture;
  const material = new MeshBasicMaterial({ map: texture });
  const fbx = useFBX("/characters/Girl1/scene.fbx");
  const newFbx = fbx.clone();
  newFbx.scale.multiplyScalar(0.00006);
  newFbx.traverse(function (child) {
    if (child instanceof Mesh) {
      child.material = material;
    }
  });

  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={newFbx} {...props} />
    </Suspense>
  );
});

useTexture.preload("/characters/Girl1/textures.png");
useFBX.preload("/characters/Girl1/scene.fbx");
