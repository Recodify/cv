interface HomeTileProps {
  title: string
  subtitle: string
  description: string
  action: string
  onClick: () => void
  bgImage?: string
  hoverBgImage?: string
  bgColor?: string
}

export default function HomeTile({
  title,
  subtitle,
  description,
  action,
  onClick,
  bgImage,
  hoverBgImage,
  bgColor = 'from-slate-800 to-slate-900'
}: Readonly<HomeTileProps>) {
  return (
    <button
      onClick={onClick}
      className={`relative aspect-[4/5] rounded-xl cursor-pointer overflow-hidden group bg-cyan-900`}>
      {/* Default background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${bgColor} transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0`}
        style={bgImage ? {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
      />

      {/* Hover background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${bgColor} transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100`}
        style={hoverBgImage ? {
          backgroundImage: `url(${hoverBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
        <div className="transform transition-all duration-300 group-hover:translate-y-[-8px]">
          <div className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">
            {subtitle}
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:mb-2">
            {title}
          </h3>

          <p className="text-slate-300 mb-4 opacity-0 max-h-0 transition-all duration-300 group-hover:opacity-100 group-hover:max-h-20">
            {description}
          </p>

          <div className="text-blue-400 font-semibold group-hover:text-blue-300 flex items-center gap-2">
            {action}
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </button>
  )
}