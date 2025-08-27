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
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srij-gYi86K0uTfE1ZlktlYORedYo2UmvVV.svg"
                alt="SRIJ - Serviço de Regulação e Inspeção de Jogos"
                width={80}
                height={44}
                className="filter brightness-0 invert"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icad-VMwHbtIChAZBqVc5ff0Bb68vLulGm1.png"
                alt="ICAD - Instituto para os Comportamentos Aditivos e as Dependências"
                width={80}
                height={44}
                className="bg-white rounded px-2 py-1"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamecare-28wSsIXM6JvYV8IEvoISZl2BObnc8M.svg"
                alt="GameCare"
                width={80}
                height={44}
                className="filter brightness-0 invert"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gamble-pGQr0ESnQWC03XY2PRoIqhnZlkWZQG.webp"
                alt="GambleAware"
                width={80}
                height={44}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jogo2-Ypbu2A3Dov5jhlk0HYnae0OYcxwGfn.png"
                alt="Jogo Responsável"
                width={80}
                height={44}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lebull-gK6toiaR5fKdyId1vOkhmIAUU4N1fS.svg"
                alt="LeBull"
                width={80}
                height={30}
              />
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
