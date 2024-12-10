import { IoArrowBack } from "react-icons/io5"
import { BackNavigationProps } from "../../types/layout"

export default function BackNavigation({ onBack, invertColor }: BackNavigationProps & { invertColor?: boolean }) {
    return (
        <button onClick={onBack} className={`
            fixed top-4 left-4 flex items-center
            ${invertColor ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'}
            print:hidden w-16 flex-col gap-1
        `}>
            <IoArrowBack className="text-2xl" />
            <span className="text-sm">Back to Home</span>
        </button>
    )
}