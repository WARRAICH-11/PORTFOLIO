'use client'
import React from 'react'

import { Github, Linkedin, Mail } from 'lucide-react'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/WARRAICH-11', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hassanwarraich11', icon: Linkedin },
  { label: 'Email', href: 'mailto:code.HASSAN@outlook.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative z-[2] h-20 bg-[#1A1816] text-cloudy">
      <div className="section-inner h-full">
        <div className="flex h-full items-center justify-between">
          <div className="text-sm">
            © {new Date().getFullYear()} Hassan Warraich
          </div>
          <div className="flex items-center gap-2">
            {LINKS.map((l) => {
              const Icon = l.icon
              const external = l.href.startsWith('http')
              return (
                <a
                  key={l.label}
                  href={l.href}
                  aria-label={l.label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cloudy/30 hover:border-crail hover:text-crail"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

