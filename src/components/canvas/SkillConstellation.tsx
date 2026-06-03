import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '@/store/useStore'

const NODES = 12

export function SkillConstellation() {
  const groupRef = useRef<THREE.Group>(null)

  const nodes = useMemo(
    () =>
      Array.from({ length: NODES }, (_, index) => ({
        position: [
          -3.8 + (index % 4) * 2.5 + (Math.random() - 0.5) * 0.5,
          -4.8 - Math.floor(index / 4) * 1.05,
          (Math.random() - 0.5) * 3.2,
        ] as [number, number, number],
        scale: 0.18 + Math.random() * 0.22,
        phase: Math.random() * Math.PI * 2,
        speed: 0.45 + Math.random() * 0.45,
      })),
    [],
  )

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return

    const { cursor } = useStore.getState()
    const time = state.clock.elapsedTime

    group.children.forEach((child, index) => {
      const node = nodes[index]
      if (!node) return

      child.position.x = node.position[0] + Math.sin(time * node.speed + node.phase) * 0.42
      child.position.y = node.position[1] + Math.cos(time * node.speed * 0.7 + node.phase) * 0.28
      child.position.z = node.position[2] + Math.sin(time * node.speed * 0.5 + node.phase) * 0.18

      const dx = child.position.x - cursor.normalizedX * 5
      const dy = child.position.y - cursor.normalizedY * 5
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 2) {
        child.position.x += dx * 0.018
        child.position.y += dy * 0.018
      }

      child.rotation.x += delta * 0.18
      child.rotation.y += delta * 0.26
    })
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position} scale={node.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color={index % 2 === 0 ? '#C15F3C' : '#B1ADA1'}
            emissive={index % 2 === 0 ? '#C15F3C' : '#B1ADA1'}
            emissiveIntensity={0.42}
            metalness={0.72}
            roughness={0.24}
            transparent
            opacity={0.78}
          />
        </mesh>
      ))}
    </group>
  )
}

