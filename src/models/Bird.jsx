import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef)
  
  useEffect(() => {
    actions['Fly 2'].play();
  }, [])

  useFrame(({ clock, camera }) => {
    if(birdRef.current.position.x > camera.position.x + 5 ) {
      birdRef.current.rotation.y = 5.5;
    } else if (birdRef.current.position.x < camera.position.x - 5) {
      birdRef.current.rotation.y = 2.3;
    }

    if(birdRef.current.rotation.y === 2.3) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }


  });

    return (
    <mesh 
      position={[-8, 2, -5]} 
      scale={[0.1, 0.1, 0.1]}
      rotation={[0, 2.3, 0]}
      ref={birdRef}> 
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird