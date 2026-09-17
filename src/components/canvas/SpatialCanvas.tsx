import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { SceneContent } from './SceneContent'

export function SpatialCanvas() {
  const reducedMotion = usePrefersReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (min-width: 900px)')
    const update = () => setIsDesktop(media.matches)
    const idle = 'requestIdleCallback' in window
      ? window.requestIdleCallback(() => setIsReady(true), { timeout: 1200 })
      : window.setTimeout(() => setIsReady(true), 700)

    update()
    media.addEventListener('change', update)
    return () => {
      media.removeEventListener('change', update)
      if ('cancelIdleCallback' in window && typeof idle === 'number') {
        window.cancelIdleCallback(idle)
      } else {
        window.clearTimeout(idle)
      }
    }
  }, [])

  if (reducedMotion || !isDesktop || !isReady) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen">
      <Canvas
        dpr={[1, 1.2]}
        camera={{ position: [0, 0, 8], fov: 45, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#0A0A0A', 10, 26]} />
          <ambientLight intensity={0.32} />
          <directionalLight position={[5, 5, 5]} intensity={1.15} />
          <pointLight position={[-5, 3, -4]} intensity={1.1} color="#C15F3C" />
          <pointLight position={[4, -3, -5]} intensity={0.45} color="#B1ADA1" />
          <SceneContent />
          <ContactShadows position={[0, -2.15, 0]} opacity={0.24} scale={18} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  )
}

