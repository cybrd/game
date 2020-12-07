import React, { forwardRef } from "react";
import { Mesh, Texture, MeshBasicMaterial } from "three";
import { useFBX, useTexture } from "@react-three/drei";
import { withPrefix } from "gatsby";

export const CharacterGirl1 = forwardRef((props: any, ref) => {
  const texture = useTexture(
    withPrefix("/characters/Girl1/textures.png")
  ) as Texture;
  const material = new MeshBasicMaterial({ map: texture });
  const fbx = useFBX(withPrefix("/characters/Girl1/scene.fbx"));
  const newFbx = fbx.clone();
  newFbx.scale.multiplyScalar(0.00006);
  newFbx.traverse((child) => {
    if (child instanceof Mesh) {
      child.material = material;
      child.castShadow = false;
    }
  });

  if (props.side === 1) {
    newFbx.rotateY(Math.PI / 2);
  } else if (props.side === 2) {
    newFbx.rotateY(-Math.PI / 2);
  }

  return <primitive ref={ref} object={newFbx} {...props} />;
});

useTexture.preload(withPrefix("/characters/Girl1/textures.png"));
useFBX.preload(withPrefix("/characters/Girl1/scene.fbx"));
