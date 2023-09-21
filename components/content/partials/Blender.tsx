import { Canvas, Vector3, Euler, BufferGeometryNode } from "react-three-fiber";
import { PartialProps } from "./Partial"
import React from "react";

type BlenderProps = PartialProps & {
    element: JSX.Element,
    position: Vector3,
    rotation: Euler,
    scale: Vector3,
}

const Blender: React.FC<BlenderProps> = ( props ) => {

    const canvas = React.useRef<HTMLCanvasElement>();

    const Component = props.element;

    return <Canvas
        camera={{position: [0,-0,-70], fov: 15}}
        style={{
            backgroundColor: "black",
            width: "100%",
            height: "100%"
        }}
        // resize={{}}
    >

        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.4} />

    </Canvas>

}

export default Blender;