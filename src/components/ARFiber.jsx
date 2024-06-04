import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'

export const ARFiber = () => {
  return (
    <div className="container3D" style={{width: '100%',height: '100vh' }}>
        <ARButton />
        <Canvas vr="true">
            {/* <mesh position={[0,0,-0.5]}>
                <boxBufferGeometry args={[ 0.09,0.09,0.09 ]}/>
                <meshBasicMaterial color={"#ff0000"}/>
            </mesh> */}

            <XR referenceSpace='local'>
                {/* <Controllers /> */}
                {/* <Hands /> */}
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="blue" />
                </mesh>
            </XR>
        </Canvas>
    </div>
  )
}
