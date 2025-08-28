import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src='/favicon.ico' width={48} height={48} alt={"logo"} className="rounded-lg bg-white p-2" />
              <h3 className="text-sm font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
                MelhoresApostasDesportivasPT
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              O seu guia de confiança para as melhores casas de apostas online em Portugal. Fornecemos análises
              especializadas e comparações para o ajudar a apostar de forma segura e responsável.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Apenas +18</span>
              </li>
              <li>
                <span className="text-gray-400">Jogue com Responsabilidade</span>
              </li>
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div>
            <h4 className="font-semibold mb-4">Jogo Responsável</h4>
            <p className="text-gray-400 text-sm mb-4">
              O jogo pode causar dependência. Por favor, jogue com responsabilidade.
            </p>
            <div className="text-xs text-gray-500">
              <p>SRIJ.pt</p>
              <p>JogoResponsavel.pt</p>
              <p>SOS-Viciados.pt</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="mb-6">
            <h4 className="font-semibold mb-4 text-center">Regulamentação e Jogo Responsável</h4>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              <Link
                href="https://www.sicad.pt"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
              >
                <img src="/icad.png" alt="SICAD" className="h-8 md:h-12 w-auto object-contain" />
              </Link>
              <Link
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
              >
                <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-12 w-auto object-contain" />
              </Link>
              <Link
                href="https://www.srij.turismodeportugal.pt"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
              >
                <img
                  src="/srij.svg"
                  alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </Link>
              <Link
                href="https://www.gambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
              >
                <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-12 w-auto object-contain" />
              </Link>
              <Link
                href="https://www.jogoresponsavel.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-slate-700/50 rounded-lg p-2 md:p-4 flex items-center justify-center transition-colors"
              >
                <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 md:h-12 w-auto object-contain" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 melhoresapostasdesportivaspt.com. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Este website contém links de afiliados. Podemos receber compensação quando clica em links para produtos
              que analisamos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
