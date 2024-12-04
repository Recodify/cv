import Header from '../../components/layout/Header'

interface BlogProps {
  onBack: () => void
}

export default function Blog({ onBack }: BlogProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header title="Blog" tagline="Thoughts and Insights" showTagline={true} showBackNav={true} onBack={onBack}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-7xl font-bold mb-16">Blog</h1>
            <div className="bg-slate-800/50 rounded-lg p-8">
              <p className="text-slate-300 text-xl">Coming Soon</p>
              <p className="text-slate-400 mt-4">
                Technical insights and industry perspectives coming soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </Header>
    </div>
  )
}