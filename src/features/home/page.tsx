import { useNavigate } from 'react-router-dom'
import { Tile } from '../../types/tiles'
import Header from '../../components/layout/Header'
import TileLayout from '../../components/layout/TileLayout'

export default function Home() {
    const navigate = useNavigate()

    const tiles: Tile[] = [
        {
            title: "Resume",
            subtitle: "Professional Experience",
            description: "View my detailed professional background, skills, and achievements.",
            action: "View CV",
            onClick: async () => await navigate('/cv'),
            bgColor: "from-blue-900 to-slate-900",
            bgImage: "/images/cv.png",
            hoverBgImage: "/images/cv-zoom.png"
        },
        {
            title: "Blog",
            subtitle: "Tech Insights",
            description: "Read my thoughts",
            action: "Read More",
            onClick: async () => await navigate('/blog'),
            bgColor: "from-pink-900 to-slate-900",
            bgImage: "/images/blog.png",
            hoverBgImage: "/images/blog-zoom.png"
        },
        {
            title: "Projects",
            subtitle: "Portfolio",
            description: "Explore my work",
            action: "View Projects",
            onClick: async () => await navigate('/projects'),
            bgColor: "from-purple-900 to-slate-900",
            bgImage: "/images/projects.png",
            hoverBgImage: "/images/projects-zoom.png"
        },

        {
            title: "With my Hands",
            subtitle: "More than a geek",
            description: "Because there's a big wide world out there",
            action: "Dig Deeper",
            onClick: async () => await navigate('/hobby'),
            bgColor: "from-green-900 to-slate-900",
            bgImage: "/images/hobby.png",
            hoverBgImage: "/images/hobby-zoom.png"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-900">
            <Header title="Recodify" tagline="Imagine|Build|Deliver" showBackNav={false} />
            <div className="container mx-auto px-4 pt-2 md:pt-24">
                <TileLayout tiles={tiles} />
            </div>
        </div>
    )
}
