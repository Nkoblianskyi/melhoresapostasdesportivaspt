import Image from "next/image"
import Link from "next/link"

export default function ResponsibleGambling() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-emerald-800">Responsible Gambling</h2>
        <p className="text-center text-emerald-600 max-w-3xl mx-auto mb-8">
          Gambling should be an enjoyable form of entertainment. We encourage responsible gambling and provide resources
          for those who may need support.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
            <Link href="https://www.gambleaware.org/" className="transition-transform duration-300 hover:scale-105">
              <Image src="/gamble-aware.png" alt="gamble-aware" width={120} height={140} className="mb-2 mt-4" />
            </Link>
          </div>

          <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
            <Link href="https://gamblingcare.ie/" className="transition-transform duration-300 hover:scale-105">
              <Image src="/GamblingCare-w.png" alt="GamCare" width={120} height={140} className="mb-2 mt-4" />
            </Link>
          </div>

          <div className="bg-indigo-900/50 p-3 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center">
            <Link href="https://www.problemgambling.ie/" className="transition-transform duration-300 hover:scale-105">
              <Image
                src="/extern-problem.png"
                alt="extern-problem"
                width={120}
                height={40}
                className="mb-2 mt-4"
              />
            </Link>
          </div>

          <div className="bg-indigo-900/50 p-3 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105 flex-col">
            <Link href="https://www.gamcare.org.uk/" className="transition-transform duration-300 hover:scale-105 mt-4">
              <Image src="/gamcare.png" alt="GambleAware" width={120} height={40} className="mb-2 mt-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="font-bold text-lg mb-3 text-amber-800">Gambling Responsibly</h3>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span>
              Set time and money limits before you start gambling
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span>
              Only gamble with money you can afford to lose
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span>
              Never chase your losses
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span>
              Don't gamble when you're upset, angry, or depressed
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">✓</span>
              Take regular breaks from gambling
            </li>
          </ul>
          <p className="mt-4 text-sm text-amber-800">
            If you're concerned about your gambling or affected by someone else's gambling, please contact one of the
            support services listed above.
          </p>
        </div>
      </div>
    </section>
  )
}
