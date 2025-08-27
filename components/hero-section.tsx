"use client"

interface HeroSectionProps {
  onTopOffersClick: () => void
  onAdvertiserInfoClick: () => void
  onAgeRestrictionClick: () => void
}

export function HeroSection({ onTopOffersClick, onAdvertiserInfoClick, onAgeRestrictionClick }: HeroSectionProps) {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString("pt-PT", { month: "long" })} ${currentDate.getFullYear()}`

  return (
    <section className="relative py-6 sm:py-8 md:py-10 section-transparent text-white text-center">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 animate-fade-in-up">
          <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
            AS MELHORES CASAS DE APOSTAS EM PORTUGAL
          </span>
        </h1>
        <p
          className="text-xs sm:text-sm md:text-lg text-gray-300 mb-2 sm:mb-6 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          ÚLTIMA ATUALIZAÇÃO: {formattedDate}
        </p>
        <p
          className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base mb-3 sm:mb-6 animate-fade-in-up line-clamp-2 sm:line-clamp-none"
          style={{ animationDelay: "200ms" }}
        >
          À procura de plataformas de apostas confiáveis em Portugal? Chegou ao lugar certo! A nossa equipa de
          especialistas analisou o que os apostadores portugueses realmente valorizam e estamos aqui para o orientar
          para as opções mais confiáveis disponíveis.
        </p>

        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-3 sm:mb-8 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex items-center group">
            <span className="bg-green-600 p-0.5 sm:p-1 rounded-full mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-xs sm:text-sm group-hover:text-green-400 transition-colors duration-300">
              Totalmente Licenciadas
            </span>
          </div>
          <div className="flex items-center group">
            <span className="bg-green-600 p-0.5 sm:p-1 rounded-full mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-xs sm:text-sm group-hover:text-green-400 transition-colors duration-300">
              Regulamentadas em Portugal
            </span>
          </div>
          <div className="flex items-center group">
            <span className="bg-green-600 p-0.5 sm:p-1 rounded-full mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-xs sm:text-sm group-hover:text-green-400 transition-colors duration-300">
              Levantamentos Rápidos
            </span>
          </div>
        </div>

        <p className="text-xs animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          Jogue com responsabilidade. Aplicam-se termos e condições de apostas.{" "}
          <button
            onClick={onAdvertiserInfoClick}
            className="text-green-500 hover:text-green-400 hover:underline font-medium transition-colors duration-300"
          >
            Informações do Anunciante
          </button>{" "}
          |{" "}
          <button
            onClick={onAgeRestrictionClick}
            className="text-green-500 hover:text-green-400 hover:underline font-medium transition-colors duration-300"
          >
            Apenas +18
          </button>
        </p>
      </div>
    </section>
  )
}
