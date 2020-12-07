import React, { createRef, Suspense } from "react";
import { Mesh, Vector3 } from "three";
import { useFrame } from "react-three-fiber";

import { CharacterDefault } from "./characters/Default";
import { CharacterRed } from "./characters/Red";
import { CharacterBlue } from "./characters/Blue";
import { CharacterMcCree } from "./characters/McCree";
import { CharacterGirl1 } from "./characters/Girl1";
import { CharacterParrot } from "./characters/Parrot";
import { CharacterStork } from "./characters/Stork";
import { CharacterFlamingo } from "./characters/Flamingo";

export function Character({ who = null, side = 1, ...props }) {
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

      thisMesh.current.lookAt(
        new Vector3(
          thisMesh.current.position.x + speedX * directionX,
          thisMesh.current.position.y,
          thisMesh.current.position.z + speedZ * directionZ
        )
      );
    }
  });

  props.side = side;

  return (
    <Suspense fallback={<CharacterDefault ref={thisMesh} {...props} />}>
      <CharModel ref={thisMesh} {...props} />
    </Suspense>
  );
}
