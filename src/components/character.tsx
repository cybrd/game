import React, { createRef } from "react";
import { Mesh } from "three";
import { useFrame } from "react-three-fiber";

import { CharacterDefault } from "./characters/Default";
import { CharacterRed } from "./characters/Red";
import { CharacterBlue } from "./characters/Blue";

export function Character({ who = null, ...props }) {
  const thisMesh = createRef<Mesh>();

  let CharModel = () => <CharacterDefault ref={thisMesh} {...props} />;
  switch (who) {
    case "Red":
      CharModel = () => <CharacterRed ref={thisMesh} {...props} />;
      break;
    case "Blue":
      CharModel = () => <CharacterBlue ref={thisMesh} {...props} />;
      break;
    default:
      break;
  }

  let directionX = Math.random() > 0.5 ? 1 : -1;
  let directionZ = Math.random() > 0.5 ? 1 : -1;

  const speedX = Math.random() * 0.4;
  const speedZ = Math.random() * 0.4;

  useFrame(() => {
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
  });

  return <CharModel />;
}
