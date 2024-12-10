import { useState } from 'react'
import Header from '../../components/layout/Header'
import Clarity from './clarity'
import { Tile } from '../../types/tiles'
import TileLayout from '../../components/layout/TileLayout'
import { BackNavigationProps } from '../../types/layout'

type ProjectView = 'main' | 'clarity'

export default function Projects({ onBack }: BackNavigationProps) {
    const [currentView, setCurrentView] = useState<ProjectView>('main')

    const tiles: Tile[] = [
        {
            title: "Clarity",
            subtitle: "Better docs for better devX",
            description: "Better docs for better devX",
            action: "View",
            onClick: () => setCurrentView('clarity'),
            bgColor: "from-blue-900 to-slate-900",
            bgImage: "/images/cv-bg.jpg"
        },
    ]

    // Handle view rendering
    if (currentView === 'clarity') {
        return <Clarity onBack={() => setCurrentView('main')} />
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            <Header title="Projects" tagline="Portfolio" showTagline={true} showBackNav={true} onBack={onBack} />
            <div className="container mx-auto px-4 pt-24">
                <TileLayout tiles={tiles} />
            </div>
        </div>
    )
}