import BackNavigation from './BackNavigation'
import { BackNavigationProps } from '../../types/layout'
import { useDocumentTitle } from '../../hooks/navigation'
interface HeaderProps extends BackNavigationProps {
  title: string
  tagline?: string
  showTagline?: boolean
  showBackNav?: boolean
  children?: React.ReactNode
}

export default function Header({ title, tagline, showTagline = true, showBackNav = false, children }: HeaderProps) {
  useDocumentTitle(title)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-32">
            <div className="flex items-center gap-6">
              {showBackNav && <BackNavigation invertColor={false} />}
              {!showBackNav &&
                <div className="text-white">
                  <img
                    src="/images/rocket.png"
                    alt="Logo"
                    className="w-20 h-20"
                  />
                </div>
              }
            </div>

            <div className="flex gap-8 text-sm">
              <a href="https://github.com/recodify" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/sam-shiles-8494577/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">
                LinkedIn
              </a>
              <a href="mailto:shilessam@gmail.com" className="text-slate-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className={`pt-32 ${showTagline ? 'pb-20' : 'pb-8'}`}>
        {showTagline ? (
          <header className="text-center">
            <h1 className="text-7xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {tagline}
            </p>
          </header>
        ) : null}
        {children}
      </div>
    </>
  )
}