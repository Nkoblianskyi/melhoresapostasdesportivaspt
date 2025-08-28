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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 w-8 h-8 p-0 rounded-full"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-xl">
        <div className="bg-gradient-to-r from-green-600 to-red-600 p-4 text-center">
          <img
            src={topSite.logo || "/placeholder.svg"}
            alt={topSite.name}
            className="h-12 w-auto object-contain mx-auto"
          />
        </div>

        <div className="p-6 text-center">
          <div className="mb-4">
            <div className="text-xl font-bold mb-1 text-gray-900">{topSite.bonus}</div>
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
