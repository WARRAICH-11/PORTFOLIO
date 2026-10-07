import { Canvas, useFrame } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MutableRefObject, PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import * as THREE from 'three'

// The project does not currently expose a tsconfig JSX reference for R3F.
// These aliases preserve R3F's runtime element names while keeping this file
// compatible with the editor's default DOM JSX namespace.
const R3FGroup: any = 'group'
const R3FAmbientLight: any = 'ambientLight'
const R3FDirectionalLight: any = 'directionalLight'
const R3FPointLight: any = 'pointLight'

export type DNAProject = {
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  liveUrl: string
  codeUrl: string
}

type CarouselProps = { projects: DNAProject[]; reducedMotion?: boolean }
type MotionState = {
  targetOffset: number
  currentOffset: number
  targetSpin: number
  currentSpin: number
  velocityOffset: number
  velocitySpin: number
  dragging: boolean
}

const RADIUS = 3.6
const VERTICAL_STEP = 1.9
const ANGLE_STEP = Math.PI / 3

function disposeScene(scene: THREE.Scene) {
  // R3F disposes ordinary descendants too, but explicitly releasing resources
  // here protects against retained textures/materials after context loss.
  scene.traverse((object) => {
    const mesh = object as THREE.Mesh
    mesh.geometry?.dispose()
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    materials.filter(Boolean).forEach((material) => {
      const typedMaterial = material as THREE.Material & Record<string, unknown>
      Object.values(typedMaterial).forEach((value) => {
        if (value && typeof value === 'object' && 'isTexture' in value) {
          ;(value as THREE.Texture).dispose()
        }
      })
      typedMaterial.dispose()
    })
  })
}

function HelixCard({ project, index, total, motionState, focused, onHover, rendererRef }: {
  project: DNAProject
  index: number
  total: number
  motionState: MutableRefObject<MotionState>
  focused: boolean
  onHover: (index: number | null) => void
  rendererRef: MutableRefObject<THREE.WebGLRenderer | null>
}) {
  const group = useRef<THREE.Group>(null)
  const html = useRef<HTMLDivElement>(null)

  useFrame(() => {
    // R3F owns the single requestAnimationFrame loop. We never start a second
    // loop here, so unmounting the Canvas cannot leave orphaned RAF callbacks.
    if (rendererRef.current?.getContext().isContextLost() || !group.current) return

    const state = motionState.current
    const slot = index - state.currentOffset - (total - 1) / 2
    const angle = slot * ANGLE_STEP + state.currentSpin + (index % 2 ? Math.PI : 0)
    const distance = Math.abs(slot)
    const scale = focused ? 1.16 : THREE.MathUtils.clamp(1.04 - distance * 0.045, 0.72, 1.04)
    const opacity = focused ? 1 : THREE.MathUtils.clamp(1 - distance * 0.08, 0.48, 1)
    const blur = focused ? 0 : THREE.MathUtils.clamp(distance * 0.22, 0, 1.4)

    group.current.position.set(Math.cos(angle) * RADIUS, -slot * VERTICAL_STEP, Math.sin(angle) * RADIUS)
    group.current.rotation.set(0, -angle + Math.PI / 2, 0)
    group.current.scale.setScalar(scale)

    if (html.current) {
      html.current.style.opacity = String(opacity)
      html.current.style.filter = `blur(${blur}px)`
    }
  })

  return (
    <R3FGroup ref={group}>
      <Html ref={html} transform center distanceFactor={7} zIndexRange={[1000, 0]}>
        <article
          className={`dna-project-card${focused ? ' is-focused' : ''}`}
          onPointerEnter={() => onHover(index)}
          onPointerLeave={() => onHover(null)}
        >
          <div className="dna-project-image-wrap">
            <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="dna-project-image" />
          </div>
          <div className="dna-project-content">
            <span className="dna-project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="dna-project-tags">
              {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="dna-project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" /> Live
              </a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" /> Code
              </a>
            </div>
          </div>
        </article>
      </Html>
    </R3FGroup>
  )
}

function HelixScene({ projects, motionState, hovered, onHover, rendererRef, reducedMotion }: CarouselProps & {
  motionState: MutableRefObject<MotionState>
  hovered: number | null
  onHover: (index: number | null) => void
  rendererRef: MutableRefObject<THREE.WebGLRenderer | null>
  reducedMotion: boolean
}) {
  const group = useRef<THREE.Group>(null)
  const limit = Math.max(0, (projects.length - 1) / 2)

  useFrame((_, delta) => {
    if (rendererRef.current?.getContext().isContextLost()) return

    const state = motionState.current
    const lerpAmount = reducedMotion ? 1 : 1 - Math.exp(-10 * delta)

    // Smooth-scroll target -> current value. DOM wheel events only update the
    // target; all visual movement happens in this single render loop.
    state.currentOffset += (state.targetOffset - state.currentOffset) * lerpAmount
    state.currentSpin += (state.targetSpin - state.currentSpin) * lerpAmount

    if (!state.dragging && !reducedMotion) {
      state.targetOffset = THREE.MathUtils.clamp(state.targetOffset + state.velocityOffset, -limit, limit)
      state.targetSpin += state.velocitySpin
      state.velocityOffset *= Math.exp(-8 * delta)
      state.velocitySpin *= Math.exp(-8 * delta)
    }

    if (group.current) group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, 0.04, 3, delta)
  })

  return (
    <R3FGroup ref={group} rotation={[0, 0, 0.04]}>
      {projects.map((project, index) => (
        <HelixCard
          key={`${project.title}-${index}`}
          project={project}
          index={index}
          total={projects.length}
          motionState={motionState}
          focused={hovered === index}
          onHover={onHover}
          rendererRef={rendererRef}
        />
      ))}
    </R3FGroup>
  )
}

export function DNAProjectCarousel({ projects, reducedMotion = false }: CarouselProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cleanupRendererRef = useRef<(() => void) | null>(null)
  const motionState = useRef<MotionState>({
    targetOffset: 0,
    currentOffset: 0,
    targetSpin: 0,
    currentSpin: 0,
    velocityOffset: 0,
    velocitySpin: 0,
    dragging: false,
  })
  const drag = useRef({ x: 0, y: 0 })
  const limit = Math.max(0, (projects.length - 1) / 2)

  useEffect(() => () => {
    cleanupRendererRef.current?.()
    if (sceneRef.current) disposeScene(sceneRef.current)
    rendererRef.current?.renderLists.dispose()
    rendererRef.current?.dispose()
    rendererRef.current = null
    sceneRef.current = null
  }, [])

  const handleCreated = useCallback(({ gl, scene }: { gl: THREE.WebGLRenderer; scene: THREE.Scene }) => {
    rendererRef.current = gl
    sceneRef.current = scene
    const canvas = gl.domElement
    const handleContextLost = (event: Event) => {
      // Prevent the browser from trying to restore a context while R3F is
      // still mounted. The Canvas can then unmount cleanly without a crash.
      event.preventDefault()
    }
    canvas.addEventListener('webglcontextlost', handleContextLost, false)
    cleanupRendererRef.current = () => canvas.removeEventListener('webglcontextlost', handleContextLost)
  }, [])

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    motionState.current.dragging = true
    motionState.current.velocityOffset = 0
    motionState.current.velocitySpin = 0
    drag.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!motionState.current.dragging || reducedMotion) return
    const dx = event.clientX - drag.current.x
    const dy = event.clientY - drag.current.y
    drag.current = { x: event.clientX, y: event.clientY }
    motionState.current.velocitySpin = THREE.MathUtils.clamp(dx * 0.008, -0.12, 0.12)
    motionState.current.velocityOffset = THREE.MathUtils.clamp(dy * 0.012, -0.16, 0.16)
    motionState.current.targetSpin += motionState.current.velocitySpin
    motionState.current.targetOffset = THREE.MathUtils.clamp(motionState.current.targetOffset + motionState.current.velocityOffset, -limit, limit)
  }, [limit, reducedMotion])

  const releaseDrag = useCallback(() => {
    motionState.current.dragging = false
  }, [])

  const handleWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    event.preventDefault()
    const delta = Number.isFinite(event.deltaY) ? THREE.MathUtils.clamp(event.deltaY, -120, 120) : 0
    motionState.current.velocityOffset = delta * 0.0005
    motionState.current.targetOffset = THREE.MathUtils.clamp(motionState.current.targetOffset + delta * 0.0025, -limit, limit)
  }, [limit, reducedMotion])

  return (
    <div
      className="dna-carousel"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={releaseDrag}
      onPointerCancel={releaseDrag}
      onWheel={handleWheel}
      role="region"
      aria-label="Interactive selected work project carousel"
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={handleCreated}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 13]} fov={38} />
        <R3FAmbientLight intensity={1.4} />
        <R3FDirectionalLight position={[4, 6, 8]} intensity={2.2} color="#6EA8FF" />
        <R3FPointLight position={[-5, -2, 5]} intensity={18} distance={16} color="#146EF5" />
        <HelixScene
          projects={projects}
          motionState={motionState}
          hovered={hovered}
          onHover={setHovered}
          rendererRef={rendererRef}
          reducedMotion={reducedMotion}
        />
      </Canvas>
      <div className="dna-carousel-hint" aria-hidden="true">Drag to spin · scroll to travel</div>
    </div>
  )
}
