import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Política de Privacidade | Melhores Apostas Desportivas PT",
  description:
    "Leia a nossa política de privacidade para entender como recolhemos, usamos e protegemos as suas informações pessoais.",
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-6 text-white">Política de Privacidade</h1>

          <div className="space-y-6">
            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">1. Informações que Recolhemos</h2>
              <p className="text-gray-200">
                O MelhoresApostasDesportivasPT.com recolhe informações para fornecer o melhor serviço de comparação de
                apostas desportivas em Portugal. As informações que podemos recolher incluem:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Informações de contacto (nome, email) quando se inscreve na nossa newsletter</li>
                <li>Preferências desportivas e de apostas para personalização de conteúdo</li>
                <li>Dados de navegação para melhorar a experiência do utilizador</li>
                <li>Informações de localização para garantir conformidade com leis portuguesas</li>
                <li>Idade para verificação de elegibilidade (18+ obrigatório)</li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">2. Como Utilizamos as Suas Informações</h2>
              <p className="text-gray-200">Utilizamos as suas informações pessoais para:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Fornecer comparações precisas de casas de apostas licenciadas em Portugal</li>
                <li>Personalizar recomendações baseadas nos seus desportos favoritos</li>
                <li>Enviar alertas sobre as melhores odds e promoções disponíveis</li>
                <li>Garantir conformidade com regulamentos do SRIJ</li>
                <li>Promover apostas responsáveis e prevenir problemas de jogo</li>
                <li>Melhorar continuamente os nossos serviços de comparação</li>
                <li>Comunicar informações importantes sobre mudanças regulamentares</li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">3. Cookies</h2>
              <p className="text-gray-200">
                Utilizamos cookies e outras tecnologias de rastreio para rastrear a atividade no nosso website e manter
                certa informação. Os cookies são ficheiros com uma pequena quantidade de dados que podem incluir um
                identificador único anónimo. Pode instruir o seu navegador a recusar todos os cookies ou a indicar
                quando um cookie está a ser enviado.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">4. Partilha de Informações</h2>
              <p className="text-gray-200">
                As suas informações pessoais são tratadas com a máxima confidencialidade. Podemos partilhar informações
                limitadas com:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Casas de apostas licenciadas pelo SRIJ quando solicita informações específicas</li>
                <li>Fornecedores de serviços técnicos que nos ajudam a operar o site</li>
                <li>Autoridades regulamentares quando legalmente obrigatório</li>
                <li>Organizações de apostas responsáveis para prevenção de problemas de jogo</li>
              </ul>
              <p className="text-gray-200 mt-2">
                Nunca vendemos as suas informações pessoais a terceiros para fins comerciais.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">5. Segurança dos Dados</h2>
              <p className="text-gray-200">
                A segurança dos seus dados é fundamental para nós. Implementamos medidas de segurança rigorosas:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>Encriptação SSL para todas as transmissões de dados</li>
                <li>Servidores seguros localizados na União Europeia</li>
                <li>Acesso restrito às informações pessoais apenas por pessoal autorizado</li>
                <li>Auditorias regulares de segurança e conformidade RGPD</li>
                <li>Sistemas de deteção de fraude e atividade suspeita</li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">6. Os Seus Direitos</h2>
              <p className="text-gray-200">
                Sob o Regulamento Geral sobre a Proteção de Dados (RGPD), tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-200">
                <li>
                  <strong>Direito de acesso:</strong> Pode solicitar uma cópia dos seus dados pessoais
                </li>
                <li>
                  <strong>Direito de retificação:</strong> Pode corrigir informações incorretas
                </li>
                <li>
                  <strong>Direito ao apagamento:</strong> Pode solicitar a eliminação dos seus dados
                </li>
                <li>
                  <strong>Direito à portabilidade:</strong> Pode transferir os seus dados para outro serviço
                </li>
                <li>
                  <strong>Direito de oposição:</strong> Pode opor-se ao processamento dos seus dados
                </li>
              </ul>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">7. Retenção de Dados</h2>
              <p className="text-gray-200">
                Mantemos as suas informações pessoais apenas pelo tempo necessário para cumprir os fins descritos nesta
                política ou conforme exigido por lei. Dados de newsletter são mantidos até cancelar a subscrição, e
                dados de navegação são automaticamente eliminados após 24 meses.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">8. Alterações à Política</h2>
              <p className="text-gray-200">
                Esta Política de Privacidade pode ser atualizada para refletir mudanças na legislação portuguesa ou
                melhorias nos nossos serviços. Notificaremos sobre alterações significativas através do email ou aviso
                no site.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md rounded-lg p-6 border border-green-500/20">
              <h2 className="text-2xl font-semibold mb-3 text-green-400">9. Contacto e Reclamações</h2>
              <p className="text-gray-200">
                Para questões sobre privacidade, proteção de dados ou apostas responsáveis:
                <br />
                <br />
                <strong>Email:</strong> privacidade@melhoresapostasdesportivaspt.com
                <br />
              </p>
            </section>

            <p className="text-sm text-gray-400 mt-8 bg-black/40 backdrop-blur-md rounded-lg p-4 border border-green-500/20">
              Última atualização: Dezembro 2025 | Conforme RGPD e regulamentação SRIJ Portugal
            </p>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
