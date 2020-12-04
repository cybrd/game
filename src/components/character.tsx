import React, { createRef, Suspense } from "react";
import { Mesh } from "three";
import { useFrame } from "react-three-fiber";

import { CharacterDefault } from "./characters/Default";
import { CharacterRed } from "./characters/Red";
import { CharacterBlue } from "./characters/Blue";
import { CharacterMcCree } from "./characters/McCree";
import { CharacterGirl1 } from "./characters/Girl1";
import { CharacterDeer } from "./characters/Deer";

export function Character({ who = null, ...props }) {
  const thisMesh = createRef<Mesh>();

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
    case "Deer":
      CharModel = CharacterDeer;
      break;
  }

  let directionX = Math.random() > 0.5 ? 1 : -1;
  let directionZ = Math.random() > 0.5 ? 1 : -1;

  const speedX = Math.random() * 0.4;
  const speedZ = Math.random() * 0.4;

  useFrame(() => {
    if (thisMesh && thisMesh.current) {
      if (
        thisMesh.current.position.x >= 30 ||
        thisMesh.current.position.x <= -30
      ) {
        directionX *= -1;
      }
      if (
        thisMesh.current.position.z >= 15 ||
        thisMesh.current.position.z <= -15
      ) {
        directionZ *= -1;
      }
      thisMesh.current.position.x += speedX * directionX;
      thisMesh.current.position.z += speedZ * directionZ;
    }
  });

  return (
    <Suspense fallback={<CharacterDefault ref={thisMesh} {...props} />}>
      <CharModel ref={thisMesh} {...props} />
    </Suspense>
  );
}
