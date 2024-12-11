import Header from '../../components/layout/Header'

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header title="Blog" tagline="Thoughts and Insights" showBackNav={true}>
        <div className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto">
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