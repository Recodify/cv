import { IoArrowBack } from "react-icons/io5"

interface HeaderProps {
  title: string
  tagline?: string
  showTagline?: boolean
  showBackNav?: boolean
  onBack?: () => void
  children?: React.ReactNode
}

export default function Header({ title, tagline, showTagline = true, showBackNav = false, onBack, children }: HeaderProps) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-32">
            <div className="flex items-center gap-6">
              <div className="text-white">
                <img
                  src="/images/rocket.png"
                  alt="Logo"
                  className={showBackNav ? "w-12 h-12" : "w-20 h-20"}
                />
              </div>
              {showBackNav && (
                <button onClick={onBack} className="flex items-center text-slate-300 hover:text-white">
                  <IoArrowBack className="mr-2" />
                  Back to Home
                </button>
              )}
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