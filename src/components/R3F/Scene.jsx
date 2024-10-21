"use client";

import {
  AccumulativeShadows,
  Box,
  Center,
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  PerformanceMonitor,
  Plane,
  RandomizedLight,
  Stats,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Scene({ configuration, colors }) {
  const [degraded, degrade] = useState(false);

  return (
    <Canvas resize camera={{ position: [0, 2, 4] }} shadows dpr={[1, 2]}>
      <OrbitControls />
      <Stats />
      <group>
        {Object.keys(configuration).map((key) =>
          configuration[key] ? (
            <Model color={colors[key]} path={configuration[key]} />
          ) : null
        )}
      </group>
      <spotLight castShadow position={[0, 5, 0]} intensity={5} />
      {/* <ambientLight color="white" intensity={0.05} /> */}
      <ContactShadows position={[0, -0.45, 0]} />
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment preset="city" />
    </Canvas>
  );
}

function Model({ color, path }) {
  const { scene, nodes, materials } = useGLTF(path);
  console.log(path);
  scene.traverse((child) => {
    // console.log(child);
    if (
      child.material &&
      (!path.includes("pcb") ||
        !path.includes("case") ||
        !path.includes("plate"))
    ) {
      child.material = new THREE.MeshStandardMaterial({ color: color });
    }
    if (path.includes("keycap")) {
      child.castShadow = true;
      //   if (child.children.length == 46) {
      // for (let i = 0; i < 23; i++) {
      //   child.children[i].visible = false;
      // }
      //   }
    }
    if (path.includes("plate")) {
      child.receiveShadow = true;
      child.castShadow = true;
    }
    if (path.includes("pcb")) {
      child.castShadow = true;
    }
    if (path.includes("case")) {
      child.receiveShadow = true;
      child.castShadow = true;
    }
    if (path.includes("switches")) {
      child.castShadow = true;
    }
  });
  //   console.log(scene);
  console.log(materials);
  return <primitive scale={30} object={scene} />;
}
