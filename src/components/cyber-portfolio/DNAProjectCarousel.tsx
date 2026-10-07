import { Canvas, useFrame } from '@react-three/fiber'
import { Html, PerspectiveCamera } from '@react-three/drei'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, WheelEvent as ReactWheelEvent } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import * as THREE from 'three'

// These aliases keep the R3F primitives valid in projects that do not have a
// tsconfig JSX type reference configured. R3F still resolves the string names
// at runtime inside <Canvas>.
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

const RADIUS = 3.6
const VERTICAL_STEP = 1.45
const ANGLE_STEP = Math.PI / 3

function HelixCard({ project, index, total, offset, spin, hovered, onHover }: {
  project: DNAProject
  index: number
  total: number
  offset: number
  spin: number
  hovered: boolean
  onHover: (index: number | null) => void
}) {
  const slot = index - offset - (total - 1) / 2
  const angle = slot * ANGLE_STEP + spin + (index % 2 ? Math.PI : 0)
  const distance = Math.abs(slot)
  const scale = hovered ? 1.16 : THREE.MathUtils.clamp(1.04 - distance * 0.045, 0.72, 1.04)
  const opacity = hovered ? 1 : THREE.MathUtils.clamp(1 - distance * 0.1, 0.35, 1)
  const blur = hovered ? 0 : THREE.MathUtils.clamp(distance * 0.35, 0, 2.2)

  return (
    <R3FGroup
      position={[Math.cos(angle) * RADIUS, -slot * VERTICAL_STEP, Math.sin(angle) * RADIUS]}
      rotation={[0, -angle + Math.PI / 2, 0]}
      scale={scale}
    >
      <Html
        transform
        sprite
        center
        distanceFactor={7}
        zIndexRange={[20, 0]}
        style={{ opacity, filter: `blur(${blur}px)`, transition: 'filter 180ms ease, opacity 180ms ease' }}
      >
        <article
          className={`dna-project-card${hovered ? ' is-focused' : ''}`}
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

function HelixScene({ projects, offset, spin, hovered, onHover }: CarouselProps & {
  offset: number
  spin: number
  hovered: number | null
  onHover: (index: number | null) => void
}) {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
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
          offset={offset}
          spin={spin}
          hovered={hovered === index}
          onHover={onHover}
        />
      ))}
    </R3FGroup>
  )
}

export function DNAProjectCarousel({ projects, reducedMotion = false }: CarouselProps) {
  const [offset, setOffset] = useState(0)
  const [spin, setSpin] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const drag = useRef({ active: false, x: 0, y: 0, velocityX: 0, velocityY: 0 })
  const limit = Math.max(0, (projects.length - 1) / 2)

  useEffect(() => {
    if (reducedMotion) return
    const momentum = window.setInterval(() => {
      if (drag.current.active) return
      drag.current.velocityX *= 0.93
      drag.current.velocityY *= 0.93
      if (Math.abs(drag.current.velocityX) < 0.0005 && Math.abs(drag.current.velocityY) < 0.0005) return
      setSpin((value) => value + drag.current.velocityX)
      setOffset((value) => THREE.MathUtils.clamp(value + drag.current.velocityY, -limit, limit))
    }, 16)
    return () => window.clearInterval(momentum)
  }, [limit, reducedMotion])

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('a, button')) return
    drag.current = { active: true, x: event.clientX, y: event.clientY, velocityX: 0, velocityY: 0 }
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || reducedMotion) return
    const dx = event.clientX - drag.current.x
    const dy = event.clientY - drag.current.y
    drag.current.x = event.clientX
    drag.current.y = event.clientY
    drag.current.velocityX = dx * 0.008
    drag.current.velocityY = dy * 0.012
    setSpin((value) => value + drag.current.velocityX)
    setOffset((value) => THREE.MathUtils.clamp(value + drag.current.velocityY, -limit, limit))
  }, [limit, reducedMotion])

  const releaseDrag = useCallback(() => {
    drag.current.active = false
  }, [])

  const handleWheel = useCallback((event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (reducedMotion) return
    setOffset((value) => THREE.MathUtils.clamp(value + event.deltaY * 0.0025, -limit, limit))
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
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 13]} fov={38} />
        <R3FAmbientLight intensity={1.4} />
        <R3FDirectionalLight position={[4, 6, 8]} intensity={2.2} color="#6EA8FF" />
        <R3FPointLight position={[-5, -2, 5]} intensity={18} distance={16} color="#146EF5" />
        <HelixScene projects={projects} offset={offset} spin={spin} hovered={hovered} onHover={setHovered} />
      </Canvas>
      <div className="dna-carousel-hint" aria-hidden="true">Drag to spin · scroll to travel</div>
    </div>
  )
}
