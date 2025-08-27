import { CalendarDays, CheckCircle } from "lucide-react"

export default function Hero() {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`

  return (
    <section className="py-2 md:py-4 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-1 md:mb-3 text-emerald-800">
          IRELAND'S TOP ONLINE BETTING PLATFORMS
        </h1>

        <div className="flex items-center justify-center text-xs md:text-sm text-emerald-600 mb-1 md:mb-3">
          <CalendarDays className="h-3 w-3 md:h-4 md:w-4 mr-1" />
          <span>Last Updated: {formattedDate}</span>
        </div>

        <p className="max-w-3xl mx-auto text-xs md:text-sm text-gray-600 mb-2 md:mb-4 hidden md:block">
          Our team of betting experts thoroughly evaluates each platform based on strict criteria including bonuses,
          user experience, market variety, and customer support to bring you the most reliable recommendations.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-2 md:mb-4">
          <div className="flex items-center">
            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 mr-1" />
            <span className="font-medium text-xs md:text-sm text-emerald-700">Fully Licensed</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 mr-1" />
            <span className="font-medium text-xs md:text-sm text-emerald-700">Regulated in Ireland</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-emerald-600 mr-1" />
            <span className="font-medium text-xs md:text-sm text-emerald-700">Quick Withdrawals</span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 md:p-3 max-w-2xl mx-auto">
          <p className="text-amber-800 text-xs md:text-sm">
            Play responsibly. Terms and wagering conditions apply. 18+ Only.
          </p>
        </div>
      </div>
    </section>
  )
}
