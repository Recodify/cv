import { TileLayoutProps } from '@/types/tiles'
import HomeTile from '../home/HomeTile'

export default function TileLayout({ tiles }: Readonly<TileLayoutProps>) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pb-20">
      {tiles.map((tile, index) => (
        <HomeTile key={tile.title} {...tile} />
      ))}
    </main>
  )
}