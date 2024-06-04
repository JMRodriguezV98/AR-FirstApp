// import { Canvas } from '@react-three/fiber'
// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'
// import { OrbitControls } from '@react-three/drei'
import './App.css'
import { ARFiber } from './components/ARFiber'

// const Model = () => {
//   const gltf = useLoader( GLTFLoader,'/src/assets/hot_dog/scene.gltf');
//   return (
//     <primitive object={ gltf.scene } scale={ 1.2 } />
//   )
// }


function App() {
  return(
    <ARFiber />
  )
}

{/* <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[ 0,0,5 ]}/>
        <Model /> */}
        {/* <OrbitControls /> */}
    //   </Canvas>
    // </div>

// <ambientLight intensity={0.1} />
//  <directionalLight color="red" position={[ 0,0,5 ]} />
//  <mesh>
//    <sphereGeometry args={[ 10,10,5 ]} />
//    <meshStandardMaterial />
//  </mesh>

export default App
