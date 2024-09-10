import { useBox } from "@react-three/cannon";
import { useGLTF, Sparkles } from "@react-three/drei";
import { useMemo } from "react";

const LivingRoomModel = ({ ...props }) => {
  const { nodes, scene, materials } = useGLTF(
    "/assets/stylish_apartment/scene.gltf"
  );
  console.log(
    nodes,
    Object.keys(nodes),
    materials,
    Object.keys(materials),
    "abc"
  );
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));
  const rotation = useMemo(() => [0, Math.PI / 2, 0], []);

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0.5, 0]}
      rotation={rotation}
    />
  );
};

export default LivingRoomModel;
