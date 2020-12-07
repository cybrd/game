import React, { forwardRef } from "react";
import { AnimationMixer, Mesh } from "three";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import { withPrefix } from "gatsby";

export const CharacterFlamingo = forwardRef((props: any, ref) => {
  const gltf = useGLTF(withPrefix("/characters/Flamingo/Flamingo.glb"));
  const scene = gltf.scene.clone();
  scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.position.y = 2;
    }
  });

  if (props.side === 1) {
    scene.rotateY(Math.PI / 2);
  } else if (props.side === 2) {
    scene.rotateY(-Math.PI / 2);
  }

  const mixer = new AnimationMixer(scene);
  mixer.clipAction(gltf.animations[0]).play();

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return <primitive ref={ref} object={scene} {...props} />;
});

useGLTF.preload(withPrefix("/characters/Flamingo/Flamingo.glb"));
