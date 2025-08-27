import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Termos e Condições | Melhores Apostas Desportivas PT",
  description: "Leia os nossos termos e condições para usar o Melhores Apostas Desportivas PT.",
}

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mb-6 text-white">Termos e Condições</h1>

          <div className="space-y-6">
            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">1. Aceitação dos Termos</h2>
              <p className="text-gray-200">
                Ao aceder e usar melhoresapostasdesportivaspt.com, aceita e concorda em ficar vinculado aos termos e
                disposições deste acordo. Se não concordar em cumprir estes termos, por favor não use este website.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">2. Restrição de Idade</h2>
              <p className="text-gray-200">
                O conteúdo deste website destina-se a indivíduos com pelo menos 18 anos de idade. Ao aceder a este site,
                confirma que tem pelo menos 18 anos de idade.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">3. Isenção de Responsabilidade</h2>
              <p className="text-gray-200">
                A informação fornecida em melhoresapostasdesportivaspt.com é apenas para fins informativos gerais.
                Embora nos esforcemos para fornecer informações precisas e atualizadas, não fazemos representações ou
                garantias de qualquer tipo, expressas ou implícitas, sobre a completude, precisão, confiabilidade,
                adequação ou disponibilidade da informação contida no website.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">4. Ligações Externas</h2>
              <p className="text-gray-200">
                O nosso website pode conter ligações para websites externos que não são fornecidos ou mantidos por nós.
                Não garantimos a precisão, relevância, actualidade ou completude de qualquer informação nestes websites
                externos.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">5. Disclosed Affiliate</h2>
              <p className="text-gray-200">
                Podemos receber compensação dos sites de apostas que avaliamos. Esta compensação pode afectar como e
                onde os sites aparecem na página, incluindo a ordem em que aparecem. No entanto, isto não influencia as
                nossas avaliações. Todas as avaliações de sites são baseadas na nossa análise objetiva.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">6. Apostas Responsáveis</h2>
              <p className="text-gray-200">
                Promovemos apostas responsáveis e encorajamos os utilizadores a estar cientes dos riscos associados às
                apostas. Se acredita que pode ter um problema de apostas, por favor procure ajuda em organizações
                profissionais.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">7. Alterações aos Termos</h2>
              <p className="text-gray-200">
                Reservamos o direito de modificar estes termos a qualquer momento. Encorajamos os utilizadores a
                verificar esta página regularmente por quaisquer alterações. O seu uso contínuo do website após a
                publicação de alterações constitui a sua aceitação dessas alterações.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">8. Informações de Contacto</h2>
              <p className="text-gray-200">
                Se tiver alguma pergunta sobre estes Termos e Condições, por favor contacte-nos através de
                info@melhoresapostasdesportivaspt.com.
              </p>
            </section>

            <p className="text-sm text-gray-400 mt-8 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-green-500/20">
              Última atualização: Maio 2025
            </p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
