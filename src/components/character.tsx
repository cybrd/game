import React, { createRef, Suspense } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

import { EffectHP } from "./effects/hp";

import { CharacterDefault } from "./characters/Default";
import { CharacterRed } from "./characters/Red";
import { CharacterBlue } from "./characters/Blue";
import { CharacterMcCree } from "./characters/McCree";
import { CharacterGirl1 } from "./characters/Girl1";
import { CharacterParrot } from "./characters/Parrot";
import { CharacterStork } from "./characters/Stork";
import { CharacterFlamingo } from "./characters/Flamingo";

export function Character({ who = null, side = 1, ...props }) {
  const meshGroup = createRef<Mesh>();
  const meshCharModle = createRef<Mesh>();

  let CharModel = CharacterDefault;
  switch (who) {
    case "Red":
      CharModel = CharacterRed;
      break;
    case "Blue":
      CharModel = CharacterBlue;
      break;
    case "McCree":
      CharModel = CharacterMcCree;
      break;
    case "Girl1":
      CharModel = CharacterGirl1;
      break;
    case "Parrot":
      CharModel = CharacterParrot;
      break;
    case "Stork":
      CharModel = CharacterStork;
      break;
    case "Flamingo":
      CharModel = CharacterFlamingo;
      break;
  }

  let directionX = Math.round(Math.random()) ? 1 : -1;
  let directionZ = Math.round(Math.random()) ? 1 : -1;

  const speedX = Math.random() * 0.1;
  const speedZ = Math.random() * 0.1;

  useFrame(() => {
    if (meshGroup && meshGroup.current) {
      if (
        meshGroup.current.position.x >= 30 ||
        meshGroup.current.position.x <= -30
      ) {
        directionX *= -1;
      }
      if (
        meshGroup.current.position.z >= 15 ||
        meshGroup.current.position.z <= -15
      ) {
        directionZ *= -1;
      }

      // meshGroup.current.position.x += speedX * directionX;
      // meshGroup.current.position.z += speedZ * directionZ;

      // meshCharModle.current.lookAt(
      //   new Vector3(
      //     meshGroup.current.position.x + speedX * directionX,
      //     meshGroup.current.position.y,
      //     meshGroup.current.position.z + speedZ * directionZ
      //   )
      // );
    }
  });

  return (
    <group>
      <mesh ref={meshGroup} {...props}>
        <EffectHP />
        <Suspense
          fallback={<CharacterDefault ref={meshCharModle} side={side} />}
        >
          <CharModel ref={meshCharModle} side={side} />
        </Suspense>
      </mesh>
    </group>
  );
}
