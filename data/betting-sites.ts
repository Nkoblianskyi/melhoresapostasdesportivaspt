export interface BettingSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string // Optional property for duplicate bonus
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  disclaimer?: string
}

export interface FirstListSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  disclaimer?: string
}

export interface SecondListSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
  disclaimer?: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Lamabet",
    logo: "/lamabet.svg",
    category: "WELCOME BONUS",
    bonus: "100% up to 1500€",
    dopbonus: "+ FreeBet 10% up to 100€",
    rating: 4.9,
    reviewCount: 9472,
    url: "https://qualityboost.top/K2MyVL1G",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 2,
    name: "SpinStar",
    logo: "/spinstar.svg",
    category: "WELCOME PACK",
    bonus: "100% up to 500€",
    rating: 4.8,
    reviewCount: 8892,
    url: "https://qualityboost.top/4PzcK69L",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 3,
    name: "Boomerang Bet",
    logo: "/boomerang-bet.svg",
    category: "WELCOME BONUS",
    bonus: "100% up to 100€",
    dopbonus: "+ Weekly Reload Bonus 50% up to 500€",
    rating: 4.8,
    reviewCount: 3638,
    url: "https://qualityboost.top/kq6yxGWN",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 4,
    name: "Tonybet",
    logo: "/tonybet.svg",
    category: "WELCOME BONUS",
    bonus: "100% up to 100€",
    dopbonus: "+ Up To €20 Risk-Free Bet",
    rating: 4.8,
    reviewCount: 8435,
    url: "https://qualityboost.top/sGL9XBNB",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 5,
    name: "20bet",
    logo: "/20bet.webp",
    category: "WELCOME BONUS",
    bonus: "100% up to €100",
    dopbonus: "+ Free Bets",
    rating: 4.7,
    reviewCount: 9327,
    url: "https://qualityboost.top/6rB7V56m",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 6,
    name: "Mr.Play",
    logo: "/mr.play.png",
    category: "WELCOME BONUS",
    bonus: "BET €5 GET €20",
    rating: 4.7,
    reviewCount: 6658,
    url: "https://qualityboost.top/GnP7DXD8",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 7,
    name: "Betiton",
    logo: "/betiton.png",
    category: "WELCOME BONUS",
    bonus: "BET €10 GET €50",
    rating: 4.5,
    reviewCount: 7581,
    url: "https://qualityboost.top/VNFckJr2",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 8,
    name: "BetVictor",
    logo: "/betvictor.png",
    category: "WELCOME BONUS",
    bonus: "Bet €10 → Get €30 in Free Bets",
    rating: 4.4,
    reviewCount: 4357,
    url: "https://qualityboost.top/cxcP6Qd2",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 9,
    name: "Midnite",
    logo: "/mid.svg",
    category: "WELCOME BONUS",
    bonus: "Bet €10 Get €20 + 50 Free Spins",
    rating: 4.3,
    reviewCount: 5657,
    url: "https://qualityboost.top/xvX8GhxY",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
]

export const firstListSites: FirstListSite[] = [
  {
    id: 3,
    name: "Winrolla",
    logo: "/win-rolla.webp",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Bónus de Primeiro Depósito 100%",
    dopbonus: "Até 500€",
    rating: 9.9,
    reviewCount: 8743,
    url: "https://qualityboost.top/rJDZBWnD",
    featured: true,
    disclaimer: "Experiência de apostas premium. Interface Moderna, Suporte VIP, Levantamentos Rápidos. 18+ apenas.",
  },
  {
    id: 5,
    name: "BetiBet",
    logo: "/betibet.png",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Bónus de Primeiro Depósito 100%",
    dopbonus: "Até 100€",
    rating: 9.8,
    reviewCount: 7234,
    url: "https://qualityboost.top/2sLKjNqT",
    featured: true,
    disclaimer: "Plataforma de apostas confiável. Levantamentos Rápidos, Melhores Odds, Interface Simples. 18+ apenas.",
  },
  {
    id: 4,
    name: "BillyBets",
    logo: "/billybets.webp",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Bónus de Primeiro Depósito 100%",
    dopbonus: "Até 100€",
    rating: 9.7,
    reviewCount: 6891,
    url: "https://qualityboost.top/PYCdLSJK",
    featured: true,
    disclaimer: "Apostas desportivas modernas. App Móvel, Apostas ao Vivo, Suporte Local. 18+ apenas.",
  },
  {
    id: 2,
    name: "Lamabet",
    logo: "/lamabet.svg",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Aposta Grátis 10%",
    dopbonus: "Até 100€",
    rating: 9.6,
    reviewCount: 5467,
    url: "https://qualityboost.top/2sLKjNqT",
    featured: true,
    disclaimer: "Site de apostas premium. Odds Competitivas, Cash Out, Bet Builder. 18+ apenas.",
  },
  {
    id: 1,
    name: "Boomerang Bet",
    logo: "/boomerang-2.png",
    category: "BÓNUS DE BOAS-VINDAS",
    bonus: "Bónus de Primeiro Depósito 100%",
    dopbonus: "Até 100€",
    rating: 9.5,
    reviewCount: 4823,
    url: "https://qualityboost.top/PYCdLSJK",
    featured: true,
    disclaimer: "Plataforma de apostas inovadora. Streaming ao Vivo, Estatísticas, Cash Out. 18+ apenas.",
  },
]

export const secondListSites: SecondListSite[] = [
  {
    id: 9,
    name: "Midnite",
    logo: "/mid.svg",
    category: "WELCOME BONUS",
    bonus: "Bet €10 Get €20 + 50 Free Spins",
    rating: 4.3,
    reviewCount: 5657,
    url: "https://qualityboost.top/xvX8GhxY",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 10,
    name: "Mr.Play",
    logo: "/mr.play.png",
    category: "WELCOME BONUS",
    bonus: "BET €5 GET €20",
    rating: 4.2,
    reviewCount: 6658,
    url: "https://qualityboost.top/GnP7DXD8",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 11,
    name: "ZetBet",
    logo: "/zetbet.png",
    category: "WELCOME BONUS",
    bonus: "100% Bonus up to €100",
    rating: 4.2,
    reviewCount: 3245,
    url: "https://www.zetbet.com/ie/",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 12,
    name: "BetVictor",
    logo: "/betvictor.png",
    category: "WELCOME BONUS",
    bonus: "Bet €10 → Get €30 in Free Bets",
    rating: 4.1,
    reviewCount: 4357,
    url: "https://qualityboost.top/cxcP6Qd2",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
  {
    id: 13,
    name: "Betiton",
    logo: "/betiton.png",
    category: "WELCOME BONUS",
    bonus: "BET €10 GET €50",
    rating: 4.1,
    reviewCount: 7581,
    url: "https://qualityboost.top/VNFckJr2",
    featured: true,
    disclaimer: "Play responsibly. Terms and wagering conditions apply. 18+ only.",
  },
]
