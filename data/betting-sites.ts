export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export interface FirstListSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export interface SecondListSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 4.8,
    stars: 5,
    reviews: 23847,
    badges: ["MELHOR AVALIAÇÃO", "LINHA SUPERIOR"],
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 4.7,
    stars: 5,
    reviews: 19123,
    badges: ["POPULAR", "TENDÊNCIA"],
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 4.6,
    stars: 5,
    reviews: 14256,
    badges: ["TENDÊNCIA"],
    isTrending: true,
  },
  {
    id: 4,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 4.5,
    stars: 4,
    reviews: 32141,
    badges: ["POPULAR"],
    isPopular: true,
  },
  {
    id: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 4.4,
    stars: 4,
    reviews: 9887,
    badges: [],
  },
]

export const firstListSites: FirstListSite[] = [
  {
    id: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 4.8,
    stars: 5,
    reviews: 23847,
    badges: ["MELHOR AVALIAÇÃO", "LINHA SUPERIOR"],
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 4.7,
    stars: 5,
    reviews: 19123,
    badges: ["POPULAR", "TENDÊNCIA"],
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 4.6,
    stars: 5,
    reviews: 14256,
    badges: ["TENDÊNCIA"],
    isTrending: true,
  },
  {
    id: 4,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 4.5,
    stars: 4,
    reviews: 32141,
    badges: ["POPULAR"],
    isPopular: true,
  },
  {
    id: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 4.4,
    stars: 4,
    reviews: 9887,
    badges: [],
  },
]

export const secondListSites: SecondListSite[] = [
  {
    id: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 4.8,
    stars: 5,
    reviews: 23847,
    badges: ["MELHOR AVALIAÇÃO", "LINHA SUPERIOR"],
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 4.7,
    stars: 5,
    reviews: 19123,
    badges: ["POPULAR", "TENDÊNCIA"],
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 4.6,
    stars: 5,
    reviews: 14256,
    badges: ["TENDÊNCIA"],
    isTrending: true,
  },
  {
    id: 4,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 4.5,
    stars: 4,
    reviews: 32141,
    badges: ["POPULAR"],
    isPopular: true,
  },
  {
    id: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 4.4,
    stars: 4,
    reviews: 9887,
    badges: [],
  },
]
