interface HomeTileProps {
  title: string
  subtitle: string
  description: string
  action: string
  onClick: () => void
  bgImage?: string
  bgColor?: string
}

export default function HomeTile({
  title,
  subtitle,
  action,
  onClick,
  bgImage,
  bgColor = 'from-slate-800 to-slate-900'
}: Readonly<HomeTileProps>) {
  return (
    <div
      onClick={onClick}
      className={`relative aspect-[4/5] rounded-xl cursor-pointer overflow-hidden group`}
    >
      {/* Background with gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${bgColor} transition-transform duration-300 group-hover:scale-105`}
        style={bgImage ? {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          <div className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">
            {subtitle}
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {title}
          </h3>
          <div className="text-blue-400 font-semibold group-hover:text-blue-300">
            {action} →
          </div>
        </div>
      </div>
    </div>
  )
}