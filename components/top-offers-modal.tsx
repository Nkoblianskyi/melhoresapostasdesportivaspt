"use client"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firstListSites } from "@/data/betting-sites"
import { useEffect } from "react"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === "function") {
      window.updateLinkParams!()
    }
  }, [isOpen])

  if (!isOpen) return null

  const topSite = firstListSites[0]

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="absolute top-36 right-[520px] text-white hover:bg-white/20 z-10 w-8 h-8 p-0 rounded-full"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-xl">
        <div className="bg-gradient-to-r from-green-600 to-red-600 p-8 text-center">
          <img
            src={topSite.logo || "/placeholder.svg"}
            alt={topSite.name}
            className="h-24 w-auto object-contain mx-auto bg-black/70 p-4 rounded-lg"
          />
        </div>

        <div className="p-6 text-center">
          <div className="mb-4">
            <p className="font-bold mb-1 text-xl text-orange-500">OFERTA DE BOAS-VINDAS</p>
            <div className="text-xl font-bold mb-1 text-gray-900">{topSite.bonus}</div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{topSite.name}</h3>
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  const starRating = topSite.rating / 2 // Convert 10-point to 5-star scale
                  const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

                  return (
                    <div key={i} className="relative">
                      <Star className="w-4 h-4 text-gray-300" />
                      <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  )
                })}
              </div>
              <span className="text-sm font-semibold text-gray-700">{topSite.rating}</span>
            </div>
            <p className="text-sm text-gray-500">{topSite.reviews.toLocaleString()} avaliações</p>
          </div>

          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <Button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg w-full mb-3"
            onClick={() => window.open(topSite.url, "_blank")}
          >
            OBTER BÓNUS
          </Button>

          <div className="text-xs text-gray-400">18+ T&Cs aplicam-se. JogoResponsavel.pt</div>
        </div>
      </div>
    </div>
  )
}

export default TopOffersModal
