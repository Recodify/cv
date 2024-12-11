import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import { Tile } from '../../types/tiles'
import TileLayout from '../../components/layout/TileLayout'

export default function Projects() {
    const navigate = useNavigate()

    const tiles: Tile[] = [{
        title: "Clarity",
        subtitle: "Better docs for better devX",
        description: "Better docs for better devX",
        action: "View",
        onClick: async () => await navigate('/projects/clarity'),
        bgColor: "from-blue-900 to-slate-900",
        bgImage: "/images/cv-bg.jpg"
    }]

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <Header title="Projects" tagline="Portfolio" showBackNav={true} />
            <div className="container mx-auto px-4 pt-24">
                <TileLayout tiles={tiles} />
            </div>
        </div>
    )
}