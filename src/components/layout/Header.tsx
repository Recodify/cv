import { useEffect, useState } from 'react'
import BackNavigation from './BackNavigation'
import BurgerMenu from './BurgerMenu'
import { BackNavigationProps } from '../../types/layout'
import { useDocumentTitle } from '../../hooks/navigation'
import { Link } from '@/types/layout'

interface HeaderProps extends BackNavigationProps {
  title: string
  tagline?: string
  showTagline?: boolean
  showBackNav?: boolean
  children?: React.ReactNode
}

const links: Link[] = [
  { href: 'https://github.com/recodify', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sam-shiles-8494577/', label: 'LinkedIn' },
  { href: 'mailto:shilessam@gmail.com', label: 'Contact' }
]

const HeaderContent = ({ title, tagline, isScrolled }: { title: string; tagline?: string; isScrolled: boolean }) => {
  return (
    <header className={`text-center relative md:transform-none transition-all duration-700
        ${isScrolled ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
      <h1 className="font-bold text-white mb-6 text-7xl">
        {title}
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto">
        {tagline}
      </p>
    </header>
  );
};

export default function Header({ title, tagline, showTagline = true, showBackNav = false, children }: Readonly<HeaderProps>) {
  const [isScrolled, setIsScrolled] = useState(false)
  useDocumentTitle(title)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300
        ${isScrolled ? 'pt-2 md:pt-4 h-12 md:h-32 bg-slate-900/95 md:bg-primary/90' : 'pt-4 h-16 md:h-32 md:bg-primary/90'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-full transition-all duration-300">
            <div className="flex items-center gap-6">
              {showBackNav && <BackNavigation invertColor={false} />}
              {!showBackNav && (
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <img
                      src="/images/rocket.png"
                      alt="Logo"
                      className={`transition-all duration-300 ${isScrolled ? 'w-8 h-8 md:w-20 md:h-20' : 'h-12 w-12 md:w-20 md:h-20'}`} />
                  </div>
                  <div className={`md:hidden transition-all duration-700 transform ${isScrolled
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}>
                    <h2 className="text-white text-lg font-bold">Recodify</h2>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className={`${isScrolled ? 'hidden md:flex gap-8 text-sm' : 'flex gap-8 text-sm'}`}>
              {links.map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Burger Menu */}
            <div className="flex items-center h-full">
              {isScrolled && <BurgerMenu links={links} />}
            </div>
          </div>
        </div>
      </nav>

      <div className={`pt-32 ${showTagline ? 'pb-20' : 'pb-8'}`}>
        {showTagline && <HeaderContent title={title} tagline={tagline} isScrolled={isScrolled} />}
        {children}
      </div>
    </>
  )
}