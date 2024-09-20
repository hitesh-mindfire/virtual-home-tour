import { useBox } from "@react-three/cannon";
import { useGLTF, Sparkles } from "@react-three/drei";

const ThreeModel = ({ ...props }) => {
  const { nodes, materials } = useGLTF("/assets/models/model.gltf");
  console.log(nodes, materials, "bcd");
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        scale={props.scale}
        castShadow
        receiveShadow
        geometry={nodes["tree-beech"].geometry}
        material={materials.color_main}
      />
    </group>
  );
};

export default ThreeModel;
