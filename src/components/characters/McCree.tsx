import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei/useGLTF";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/characters/McCree/scene.gltf"
  );

  const actions = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      "mixamo.com": mixer.clipAction(animations[0], group.current),
    };
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, []);

  useEffect(() => actions.current["mixamo.com"].play(), []);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh
        receiveShadow
        castShadow
        material={materials.Beta_Joints_MAT}
        geometry={nodes.Beta_Joints.geometry}
        skeleton={nodes.Beta_Joints.skeleton}
      />
      <skinnedMesh
        receiveShadow
        castShadow
        material={materials["asdf1:Beta_HighLimbsGeoSG2"]}
        geometry={nodes.Beta_Surface.geometry}
        skeleton={nodes.Beta_Surface.skeleton}
        material-color="black"
      />
    </group>
  );
}

useGLTF.preload("/Rumba.glb");
