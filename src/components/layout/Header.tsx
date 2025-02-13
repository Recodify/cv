import { useEffect, useState } from 'react'
import BackNavigation from './BackNavigation'
import BurgerMenu from './BurgerMenu'
import { BackNavigationProps } from '../../types/layout'
import { useDocumentTitle } from '../../hooks/navigation'
import { Link } from '@/types/layout'

interface HeaderProps extends BackNavigationProps {
  title: string
  tagline?: string
  showBackNav?: boolean
  children?: React.ReactNode
}

const links: Link[] = [
  { href: 'https://github.com/recodify', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sam-shiles-8494577/', label: 'LinkedIn' },
  { href: 'mailto:shilessam@gmail.com', label: 'Contact' }
]

const MainContent = ({ title, tagline, isScrolled }: { title: string; tagline?: string; isScrolled: boolean }) => {
  return (
    <header className={`text-center relative header-transition
        ${isScrolled ? 'opacity-0 -translate-y-8 md:opacity-100 md:translate-y-0' : 'opacity-100 translate-y-0'}`}>
      <h1 className="font-bold text-white mb-3 md:mb-7 text-5xl md:text-7xl">
        {title}
      </h1>
      <p className="font-mono text-base md:text-2xl text-slate-300 max-w-2xl mx-auto">
        {tagline}
      </p>
    </header>
  );
};

const NavContent = ({ title, tagline, isScrolled, showBackNav, isScrolling }: { title: string; tagline?: string; isScrolled: boolean; showBackNav: boolean; isScrolling: boolean }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm header-transition
      ${isScrolled ? 'pt-2 md:pt-4 h-12 md:h-32 bg-slate-900/95 md:bg-slate-900/70' : 'pt-4 h-12 md:h-32 md:bg-slate-900/50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full header-transition">
          <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="text-white min-w-fit">
                  {!showBackNav && <img
                    src="/images/rocket.png"
                    alt="Logo"
                    className={`header-transition md:w-24 md:h-24 ${isScrolled ? 'w-8 h-8 ' : 'h-10 w-10'
                      }`} />}
                  {showBackNav && <BackNavigation invertColor={false} />}
                </div>
                <div className={`md:hidden header-transition ${isScrolled
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 hidden pointer-events-none'
                  }`}>
                  <span className="text-white text-baseline font-bold">{title}</span>
                  <span className="text-xs text-slate-300 pl-2">{tagline}</span>
                </div>
              </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`header-transition pl-28 md:pl-0 md:text-lg flex
          ${isScrolling
              ? 'fast'
              : ''}
           ${isScrolled
              ? 'md:gap-6 opacity-0 md:opacity-100 scale-0 md:scale-100 absolute md:relative translate-y-4 md:translate-y-0'
              : 'gap-4 md:gap-6 text-sm opacity-100 relative scale-100 translate-y-0'}`}>
            {links.map(link => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden flex items-center h-full">
            {isScrolled && <BurgerMenu links={links} />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function Header({ title, tagline, showBackNav = false, children }: Readonly<HeaderProps>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  useDocumentTitle(title)

  useEffect(() => {
    const scrollOffset = 100;
    const handleScroll = () => {
      setIsScrolling(window.scrollY > scrollOffset);
      setTimeout(() => setIsScrolled(window.scrollY > scrollOffset), 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <NavContent title={title} tagline={tagline} isScrolled={isScrolled} showBackNav={showBackNav} isScrolling={isScrolling} />

      <div className={`md:pt-60 md:pb-10 ${isScrolled ? 'pt-10 pb-10' : 'pt-28 pb-12'}`}>
        <MainContent title={title} tagline={tagline} isScrolled={isScrolled} />
        {children}
      </div>
    </>
  )
}