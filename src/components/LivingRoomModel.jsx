import { useBox } from "@react-three/cannon";
import { useGLTF, Sparkles } from "@react-three/drei";

const LivingRoomModel = ({ ...props }) => {
  const { nodes, scene, materials } = useGLTF("/assets/living_room/scene.gltf");
  console.log(nodes);
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
};

export default LivingRoomModel;
