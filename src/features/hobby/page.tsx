import Header from '../../components/layout/Header'

export default function Hobby() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header title="With my Hands" tagline="More than a geek" showBackNav={true}>
        <div className="container main-content">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <p className="text-slate-300 text-xl">Coming Soon</p>
              <p className="text-slate-400 mt-4">
                A showcase of my non-digital creations and hobbies. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </Header>
    </div>
  )
}