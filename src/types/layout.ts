export interface BackNavigationProps {
    parentUrl?: string;
    invertColor?: boolean;
}

export interface Link {
    href: string
    label: string
}

export interface BurgerMenuProps {
    links: Link[]
}
