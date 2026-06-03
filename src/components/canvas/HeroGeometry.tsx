import { useRef } from 'react'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function HeroGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.rotation.x += delta * 0.08
    mesh.rotation.y += delta * 0.13
  })

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.45} floatingRange={[-0.18, 0.18]}>
      <mesh ref={meshRef} position={[2.7, 0.35, -2.15]} scale={1.65}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.35}
          chromaticAberration={0.045}
          anisotropy={0.65}
          distortion={0.42}
          distortionScale={1.05}
          temporalDistortion={0.08}
          clearcoat={1}
          attenuationDistance={1}
          attenuationColor="#0A0A0A"
          color="#F4F3EE"
          transmission={0.9}
          roughness={0.25}
          ior={1.7}
        />
      </mesh>
    </Float>
  )
}

