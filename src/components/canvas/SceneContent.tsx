import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '@/store/useStore'
import { HeroGeometry } from './HeroGeometry'
import { ParticleField } from './ParticleField'
import { SkillConstellation } from './SkillConstellation'

export function SceneContent() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    const group = groupRef.current
    if (!group) return

    const { cursor, scrollY } = useStore.getState()
    const targetRotX = cursor.normalizedY * 0.08
    const targetRotY = cursor.normalizedX * 0.08
    const targetY = -scrollY * 0.00165

    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRotX, 0.04)
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetRotY, 0.04)
    group.position.y = THREE.MathUtils.lerp(group.position.y, targetY, 0.03)
  })

  return (
    <group ref={groupRef}>
      <HeroGeometry />
      <ParticleField />
      <SkillConstellation />
    </group>
  )
}

