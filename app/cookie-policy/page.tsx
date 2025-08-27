import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Política de Cookies | Melhores Apostas Desportivas PT",
  description: "Saiba como usamos cookies no Melhores Apostas Desportivas PT.",
}

export default function CookiePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <div
        className="flex-1 relative"
        style={{
          backgroundImage: "url('/images/portugal-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-white">Política de Cookies</h1>

          <div className="space-y-6">
            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">1. O que são Cookies</h2>
              <p className="text-gray-200">
                Os cookies são pequenos ficheiros de texto que são colocados no seu dispositivo quando visita o nosso
                site de apostas desportivas. Estes ficheiros permitem-nos reconhecê-lo e melhorar a sua experiência de
                apostas, fornecendo funcionalidades personalizadas e garantindo que o nosso site funciona de forma
                eficiente e segura para todas as suas atividades de apostas.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">2. Como Utilizamos os Cookies</h2>
              <p className="text-gray-200">No MelhoresApostasDesportivasPT.com, utilizamos cookies para:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Manter a sua sessão de apostas ativa e segura</li>
                <li>Recordar as suas preferências de apostas e equipas favoritas</li>
                <li>Analisar o desempenho do site e melhorar os nossos serviços</li>
                <li>Personalizar ofertas e promoções de apostas relevantes</li>
                <li>Garantir a conformidade com regulamentos de apostas portugueses</li>
                <li>Prevenir fraudes e garantir apostas responsáveis</li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">3. Tipos de Cookies Utilizados</h2>
              <p className="text-gray-200">
                Utilizamos diferentes tipos de cookies no nosso site de apostas desportivas:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>
                  <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, incluindo
                  funcionalidades de segurança e verificação de idade (18+) obrigatória para apostas.
                </li>
                <li>
                  <strong>Cookies de Desempenho:</strong> Ajudam-nos a compreender como utiliza o site, quais as
                  modalidades desportivas mais populares e como podemos melhorar a experiência de apostas.
                </li>
                <li>
                  <strong>Cookies de Funcionalidade:</strong> Recordam as suas preferências, como equipas favoritas,
                  tipos de apostas preferidos e configurações de idioma.
                </li>
                <li>
                  <strong>Cookies de Marketing:</strong> Utilizados para mostrar ofertas personalizadas de casas de
                  apostas licenciadas em Portugal e promoções relevantes para os seus interesses desportivos.
                </li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">4. Gestão de Cookies</h2>
              <p className="text-gray-200">
                Pode gerir ou desativar cookies através das configurações do seu navegador. No entanto, note que
                desativar certos cookies pode afetar a funcionalidade do site e a sua experiência de apostas. Para gerir
                cookies nos principais navegadores:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" className="text-red-400 hover:underline">
                    Google Chrome - Gerir Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/pt-PT/kb/ativar-e-desativar-cookies-websites-preferencias"
                    className="text-red-400 hover:underline"
                  >
                    Mozilla Firefox - Configurações de Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac"
                    className="text-red-400 hover:underline"
                  >
                    Apple Safari - Gestão de Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/pt-pt/help/17442/windows-internet-explorer-delete-manage-cookies"
                    className="text-red-400 hover:underline"
                  >
                    Microsoft Edge - Controlo de Cookies
                  </a>
                </li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">5. Cookies de Terceiros</h2>
              <p className="text-gray-200">
                O nosso site pode conter cookies de casas de apostas parceiras licenciadas pelo SRIJ (Serviço de
                Regulação e Inspeção de Jogos) em Portugal. Estes cookies permitem-nos rastrear referências e garantir
                que recebe as melhores ofertas disponíveis. Todas as casas de apostas recomendadas cumprem rigorosamente
                a legislação portuguesa sobre jogos online.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">6. Atualizações da Política</h2>
              <p className="text-gray-200">
                Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças na legislação
                portuguesa sobre apostas online ou melhorias no nosso site. Recomendamos que consulte esta página
                regularmente para se manter informado sobre como utilizamos cookies.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">7. Contacto</h2>
              <p className="text-gray-200">
                Para questões sobre a nossa Política de Cookies ou sobre apostas responsáveis, contacte-nos através de:
                <br />
                <strong>Email:</strong> info@melhoresapostasdesportivaspt.com
                <br />
                <strong>Apoio ao Cliente:</strong> Disponível 24/7 para questões sobre apostas responsáveis
              </p>
            </section>

            <p className="text-sm text-gray-400 mt-8 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-green-500/20">
              Última atualização: Dezembro 2025 | Conforme regulamentação SRIJ Portugal
            </p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
