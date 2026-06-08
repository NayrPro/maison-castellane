import type { Product, Review } from '@/types'

export const products: Product[] = [
  {
    id: 'huile-olive-aop',
    name: "Huile d'olive extra vierge",
    origin: 'AOP · Les Baux-de-Provence',
    description: "Récoltée en novembre, pressée à froid sous 24h. Fruité vert, notes d'artichaut.",
    price: 18.5,
    emoji: '🫒',
    badge: '★ Best-seller',
    bgColor: '#dde8cc',
  },
  {
    id: 'miel-lavande',
    name: 'Miel de lavande',
    origin: 'IGP · Alpes-de-Haute-Provence',
    description: 'Récolté en juillet en altitude. Cristallisation fine, parfum floral intense et délicat.',
    price: 12.0,
    emoji: '🍯',
    bgColor: '#d4c9b5',
  },
  {
    id: 'tapenade-noire',
    name: 'Tapenade noire aux herbes',
    origin: 'Recette · Maison Castellane',
    description: 'Olives Cailletier, câpres, thym et romarin du jardin. Recette inchangée depuis 1989.',
    price: 7.9,
    emoji: '🫙',
    bgColor: '#2a2318',
  },
  {
    id: 'fleur-de-sel',
    name: 'Fleur de sel de Camargue',
    origin: 'AOP · Camargue',
    description: 'Récoltée à la main chaque été. Cristaux fins, richesse en minéraux, goût iodé délicat.',
    price: 5.5,
    emoji: '🧂',
    bgColor: '#e8e4d8',
  },
  {
    id: 'savon-olive',
    name: "Savon à l'huile d'olive",
    origin: 'Artisanat · Salon-de-Provence',
    description: "72 % d'huile d'olive. Sans colorant ni conservateur. Peau douce dès le premier soin.",
    price: 9.0,
    emoji: '🧼',
    bgColor: '#e8d5c4',
  },
  {
    id: 'coffret-decouverte',
    name: 'Coffret Découverte Provence',
    origin: 'Sélection · 5 produits',
    description: "Huile, miel, tapenade, fleur de sel et savon. Le meilleur de notre maison dans un écrin.",
    price: 39.9,
    emoji: '🎁',
    badge: 'Idée cadeau',
    bgColor: 'linear-gradient(135deg, #9aaf7a 0%, #4a5c3a 100%)',
  },
]

export const reviews: Review[] = [
  {
    id: 'sophie',
    author: 'Sophie M.',
    location: 'Lyon · Cliente depuis 2021',
    avatar: '👩',
    text: "Cette huile d'olive est une révélation. On sent vraiment la différence avec ce qu'on trouve en grande surface. Je ne peux plus m'en passer pour mes salades.",
  },
  {
    id: 'thomas',
    author: 'Thomas B.',
    location: 'Bordeaux · Client depuis 2022',
    avatar: '👨',
    text: "Le coffret cadeau était parfait pour mon anniversaire de mariage. L'emballage est soigné, les produits délicieux. Ma femme a adoré le miel de lavande.",
  },
  {
    id: 'claire',
    author: 'Claire D.',
    location: 'Paris · Cliente depuis 2020',
    avatar: '👩',
    text: "Livraison rapide, produits bien protégés et vraiment savoureux. La tapenade rappelle les vacances en Provence. Je recommande sans hésiter.",
  },
]
