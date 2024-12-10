export interface Tile {
    title: string
    subtitle: string
    description: string
    action: string
    onClick: () => Promise<void>
    bgColor?: string
    bgImage?: string
    hoverBgImage?: string
}

export interface TileLayoutProps {
    tiles: Tile[]
}
