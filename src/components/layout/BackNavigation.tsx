import { IoArrowBack } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { BackNavigationProps } from '../../types/layout'

export default function BackNavigation({ parentUrl = '/', invertColor }: BackNavigationProps) {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(parentUrl)}
            className={`fixed top-4 left-4 flex items-center
            ${invertColor ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'}
            print:hidden w-16 flex-col gap-1`}>
            <IoArrowBack className="text-2xl" />
            <span className="text-sm">{parentUrl === '/' ? 'Back to Home' : 'Back'}</span>
        </button>
    )
}