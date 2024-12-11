import { useState } from 'react'
import { BurgerMenuProps } from '@/types/layout'

export default function BurgerMenu({ links }: Readonly<BurgerMenuProps>) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden relative">
            <button onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 bg-slate-800/50 p-1.5 rounded"
                aria-label="Toggle menu">
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 w-24 py-2 mt-1 bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-700">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800" onClick={() => setIsOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}