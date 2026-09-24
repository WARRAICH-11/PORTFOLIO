'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/WARRAICH-11', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hassanwarraich11', icon: Linkedin },
  { label: 'Outlook', href: 'mailto:code.HASSAN@outlook.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative z-10 h-20 border-t border-white/10 bg-[#0D0D0E] text-cloudy">
      <div className="section-inner h-full">
        <div className="flex h-full items-center justify-between gap-4">
          <div className="text-sm">(c) {new Date().getFullYear()} Hassan Warraich</div>
          <div className="flex items-center gap-2">
            {LINKS.map((link) => {
              const Icon = link.icon;
              const external = link.href.startsWith('http');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cloudy/30 transition hover:border-crail hover:text-crail"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
