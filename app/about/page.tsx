import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Sobre Nós | Melhores Apostas Desportivas PT",
  description:
    "Conheça a nossa equipa de especialistas em apostas e a nossa missão de fornecer as melhores análises de casas de apostas em Portugal.",
}

export default function AboutPage() {
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
          <h1 className="text-3xl font-bold mb-6 text-white">Sobre Melhores Apostas Desportivas PT</h1>

          <div className="space-y-6">
            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">A Nossa Missão</h2>
              <p className="text-gray-200">
                Na Melhores Apostas Desportivas PT, a nossa missão é fornecer aos apostadores portugueses informações
                precisas e atualizadas sobre as melhores plataformas de apostas online disponíveis em Portugal.
                Acreditamos na transparência, honestidade e apostas responsáveis.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">A Nossa Equipa</h2>
              <p className="text-gray-200">
                A nossa equipa é composta por analistas experientes em apostas, especialistas da indústria e
                investigadores dedicados que testam e avaliam minuciosamente cada casa de apostas que analisamos. Com
                décadas de experiência combinada na indústria de apostas online, temos o conhecimento e a experiência
                para lhe fornecer recomendações fiáveis.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">O Nosso Processo de Análise</h2>
              <p className="text-gray-200">
                Levamos o nosso processo de análise a sério. Cada casa de apostas passa por uma avaliação abrangente
                baseada em critérios rigorosos, incluindo licenciamento, ofertas de bónus, experiência do utilizador,
                variedade de mercados, qualidade das odds, métodos de pagamento, apoio ao cliente e compatibilidade
                móvel. Atualizamos regularmente as nossas análises para garantir que a informação se mantém atual.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">Apostas Responsáveis</h2>
              <p className="text-gray-200">
                Estamos comprometidos em promover apostas responsáveis. Todas as casas de apostas que recomendamos são
                licenciadas e regulamentadas, garantindo que aderem a diretrizes rigorosas de apostas responsáveis.
                Encorajamos os nossos visitantes a apostar de forma responsável e a procurar ajuda se necessário.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">Contacte-nos</h2>
              <p className="text-gray-200">
                Se tiver alguma pergunta, sugestão ou preocupação, não hesite em contactar-nos através de
                info@melhoresapostasdesportivaspt.com. Valorizamos o seu feedback e estamos sempre a procurar melhorar o
                nosso serviço.
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
