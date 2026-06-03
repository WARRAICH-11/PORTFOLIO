import { create } from 'zustand'

type ScrollDirection = 'up' | 'down' | 'none'

interface AppState {
  scrollY: number
  scrollVelocity: number
  scrollDirection: ScrollDirection
  cursor: { x: number; y: number; normalizedX: number; normalizedY: number }
  isHoveringInteractive: boolean
  activeSection: string | null
  setScroll: (y: number, velocity: number, direction: ScrollDirection) => void
  setCursor: (x: number, y: number, nx: number, ny: number) => void
  setHovering: (hovering: boolean) => void
  setActiveSection: (section: string | null) => void
}

export const useStore = create<AppState>((set) => ({
  scrollY: 0,
  scrollVelocity: 0,
  scrollDirection: 'none',
  cursor: { x: 0, y: 0, normalizedX: 0, normalizedY: 0 },
  isHoveringInteractive: false,
  activeSection: null,
  setScroll: (y, velocity, direction) =>
    set({ scrollY: y, scrollVelocity: velocity, scrollDirection: direction }),
  setCursor: (x, y, normalizedX, normalizedY) =>
    set({ cursor: { x, y, normalizedX, normalizedY } }),
  setHovering: (isHoveringInteractive) => set({ isHoveringInteractive }),
  setActiveSection: (activeSection) => set({ activeSection }),
}))

