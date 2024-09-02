import { Environment, Sky, useGLTF } from "@react-three/drei";
import BaseScene from "./ui/BaseScene";
import BaseCharacter from "./ui/BaseCharacter";
import BaseBox from "./ui/Basebox.jsx";
import ThreeModel from "./components/ThreeModel.jsx";
import LivingRoomModel from "./components/LivingRoomModel.jsx";

function App() {
  return (
    <BaseScene>
      {/* <BaseBox
        text={false}
        position={[5, 1, 0]}
        args={[1.5, 2, 1.3]}
        color="orange"
      /> */}
      {/* <BaseBox
        text={false}
        position={[0, 0.5, 5]}
        args={[0, 1, 1.3]}
        color="green"
      /> */}

      <BaseCharacter
        controls
        position={[0, 10, 0]}
        args={[1.2]}
        color="yellow"
      />
      {/* 
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, -5]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, 10]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, 5]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, -5]} />
      <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, -10]} /> */}
      {/* <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, 5]} /> */}
      <LivingRoomModel args={[0.5, 2, 0.5]} position={[10, 0, 5]} />
      <Sky />
    </BaseScene>
  );
}

export default App;
