export interface Product {
  id: string
  name: string
  origin: string
  description: string
  price: number
  emoji: string
  badge?: string
  bgColor?: string
}

export interface Review {
  id: string
  author: string
  location: string
  text: string
  avatar: string
}
