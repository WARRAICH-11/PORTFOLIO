import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function getParticleCount() {
  if (typeof window === 'undefined') return 300
  return window.innerWidth < 768 ? 100 : 300
}

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = useMemo(getParticleCount, [])

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const vel = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
      vel[i * 3] = (Math.random() - 0.5) * 0.008
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.008
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.006
    }

    return [pos, vel]
  }, [particleCount])

  useFrame(() => {
    const points = pointsRef.current
    if (!points) return

    const posAttr = points.geometry.attributes.position
    const array = posAttr.array as Float32Array

    for (let i = 0; i < particleCount; i += 1) {
      array[i * 3] += velocities[i * 3]
      array[i * 3 + 1] += velocities[i * 3 + 1]
      array[i * 3 + 2] += velocities[i * 3 + 2]

      if (array[i * 3] > 10) array[i * 3] = -10
      if (array[i * 3] < -10) array[i * 3] = 10
      if (array[i * 3 + 1] > 10) array[i * 3 + 1] = -10
      if (array[i * 3 + 1] < -10) array[i * 3 + 1] = 10
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#F4F3EE"
        transparent
        opacity={0.56}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

