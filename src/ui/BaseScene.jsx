import { Canvas } from "@react-three/fiber";
import { Loader, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Floor from "../components/Floor";
import Lights from "../components/Lights";
import LoadingScreen from "../components/LoadingScreen";
import { Suspense } from "react";

const BasicScene = ({ children }) => {
  return (
    <div>
      <Canvas shadows camera={{ fov: 50 }}>
        <Suspense fallback={<LoadingScreen />}>
          <Lights />
          {/* <Environment preset="sunset" background /> */}
          <Physics gravity={[0, -9.8, 0]}>
            {children}

            <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
          </Physics>

          <PointerLockControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BasicScene;
