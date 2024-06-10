export type MenuItem = {
    _type: string
    slug?: string
    title?: string
}

export type Settings = {
    menuItems?: MenuItem[]
}