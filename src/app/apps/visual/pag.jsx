"use client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";
import projectGraph from "./graph";

// type Node = {
//   name: string;
//   children: Node[];
// };

// interface ProjectTreeProps {
//   graph: Node;
//   offsetX: number;
//   offsetY: number;
//   offsetZ: number;
//   parentPosition: number[] | null;
// }

const ProjectTree = ({
  graph,
  offsetX,
  offsetY,
  offsetZ,
  parentPosition = null,
// }: ProjectTreeProps) => {
}) => {
  //   const selfPosition = [];
  const selfPosition = [0, offsetY, offsetZ];
  return (
    <>
      <group>
        <mesh position={selfPosition}>
          <boxGeometry attach="geometry" args={[0.2, 0.2, 0.2]} />
          <meshBasicMaterial attach="material" color="black" />
        </mesh>
        {parentPosition && (
          <line
            geometry={new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(...parentPosition),
              new THREE.Vector3(0, offsetY, offsetZ),
            ])}
          >
            <lineBasicMaterial
              attach="material"
              color={"#9c88ff"}
              linewidth={10}
              linecap={"round"}
              linejoin={"round"}
            />
          </line>
        )}

        {graph.children &&
          graph.children.map((child, i) => (
            <ProjectTree
              key={child.name}
              graph={child}
              parentPosition={selfPosition}
              offsetX={offsetX}
              offsetY={offsetY + 5 - i * 2}
              offsetZ={offsetZ + 5 - i}
            />
          ))}
      </group>
    </>
  );
};

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.enablePan = true;
    controls.minDistance = 3;
    controls.maxDistance = 100;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const App = () => {
  return (
    <div className="flex bg-blue-100 justify-center w-full">
      <Canvas>
        <CameraController />
        <ambientLight />
        <spotLight intensity={0.3} position={[50, 50, 50]} />
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}

        <ProjectTree
          graph={projectGraph}
          // parentObject: undefined,
          offsetX={0}
          offsetY={0}
          offsetZ={0}
        />
      </Canvas>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("app"));
// document.getElementById("app");
export default App;
