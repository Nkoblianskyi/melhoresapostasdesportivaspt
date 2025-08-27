import { Shield, Gift, Smartphone, Clock, HeadphonesIcon, Flag } from "lucide-react"

const rankingCriteria = [
  {
    id: 1,
    title: "Licensing & Regulation",
    description:
      "We only recommend betting sites that are fully licensed and regulated by reputable authorities such as the UK Gambling Commission or Malta Gaming Authority.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Bonus Value & Wagering Terms",
    description:
      "We evaluate welcome bonuses and promotions based on their value, wagering requirements, and overall fairness to players.",
    icon: Gift,
  },
  {
    id: 3,
    title: "User Experience",
    description:
      "We assess the overall user experience, including website design, ease of navigation, and mobile compatibility.",
    icon: Smartphone,
  },
  {
    id: 4,
    title: "Payout Speed",
    description:
      "Fast and reliable withdrawals are essential. We prioritize betting sites that process payouts quickly and efficiently.",
    icon: Clock,
  },
  {
    id: 5,
    title: "Player Support",
    description:
      "Quality customer service is crucial. We evaluate the availability, responsiveness, and helpfulness of support teams.",
    icon: HeadphonesIcon,
  },
  {
    id: 6,
    title: "Irish Market Suitability",
    description:
      "We prioritize betting sites that cater specifically to Irish players, offering local payment methods, Irish sporting events, and EUR currency.",
    icon: Flag,
  },
]

export default function HowWeRank() {
  return (
    <section className="py-12 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-emerald-800">
          How We Select the Best Betting Platforms
        </h2>
        <p className="text-center text-emerald-600 max-w-3xl mx-auto mb-12">
          Our comprehensive evaluation process ensures we only recommend the most reliable, secure, and user-friendly
          betting sites for Irish players.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankingCriteria.map((criteria) => (
            <div
              key={criteria.id}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <criteria.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg text-emerald-800">{criteria.title}</h3>
              </div>
              <p className="text-gray-600">{criteria.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
