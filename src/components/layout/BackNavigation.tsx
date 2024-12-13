import { IoArrowBack } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { BackNavigationProps } from '../../types/layout'

export default function BackNavigation({ parentUrl = '/', invertColor = false, invertPosition = false }: Readonly<BackNavigationProps>) {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(parentUrl)} className={`

        ${invertColor ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'}
        print:hidden flex  items-center gap-1 text-xl md:text-4xl`}>
            <IoArrowBack className="text-3xl md:text-4xl" />
            <span className="hidden md:block text-xl">back</span>
        </button>
    )
}