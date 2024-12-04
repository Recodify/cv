export interface Tile {
    title: string
    subtitle: string
    description: string
    action: string
    onClick: () => void
    bgColor?: string
    bgImage?: string
}

export interface TileLayoutProps {
    tiles: Tile[]
}
