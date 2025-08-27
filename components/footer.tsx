import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-emerald-500 text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-1 inline-block"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-1 inline-block"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-emerald-500 text-lg font-bold mb-4">Responsible Betting</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="bg-white p-1 rounded mr-2 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-red-600 font-bold text-xs">18+</span>
                </div>
                <span className="text-sm group-hover:text-emerald-400 transition-colors duration-300">
                  Gambling Age Restriction
                </span>
              </div>

              <Link
                href="https://www.gamcare.org.uk/"
                className="transition-transform duration-300 hover:scale-105 mt-4"
              >
                <Image src="/gamcare.png" alt="GambleAware" width={120} height={40} className="mb-2 mt-4" />
              </Link>

              <Link href="https://www.gambleaware.org/" className="transition-transform duration-300 hover:scale-105">
                <Image src="/gamble-aware.png" alt="gamble-aware" width={120} height={40} className="mb-2 mt-4" />
              </Link>

              <Link href="https://gamblingcare.ie/" className="transition-transform duration-300 hover:scale-105">
                <Image src="/GamblingCare-w.png" alt="GamCare" width={120} height={40} className="mb-2 mt-4" />
              </Link>

              <Link
                href="https://www.problemgambling.ie/"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image src="/extern-problem.png" alt="extern-problem" width={120} height={40} className="mb-2 mt-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-emerald-500 text-lg font-bold mb-4">Isenção de Responsabilidade</h3>
            <p className="text-sm text-gray-300 mb-4 hover:text-gray-200 transition-colors duration-300">
              Qualquer reprodução ou distribuição deste website, seja em parte ou na totalidade, é estritamente
              proibida. Os serviços e ofertas promocionais aqui apresentados destinam-se exclusivamente a indivíduos com
              18 anos ou mais que se encontrem atualmente localizados em Portugal. Cada oferta pode estar sujeita a
              regras ou limitações adicionais definidas pelos nossos parceiros. Não assumimos responsabilidade por estes
              termos e aconselhamos todos os utilizadores a rever cuidadosamente as condições.
            </p>
            <p className="text-sm text-gray-300 hover:text-gray-200 transition-colors duration-300">
              © 2025 MelhoresApostasDesportivasPT.com. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
