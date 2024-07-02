import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Model = ({ Model }) => {
  const model = useGLTF(Model);
  const ref = useRef(null);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <>
      <mesh ref={ref}>
        <primitive object={model.scene} />
      </mesh>
    </>
  );
};
