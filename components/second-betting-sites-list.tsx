"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { secondListSites, type BettingSite } from "@/data/betting-sites"

export function SecondBettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])
  const [expandedDisclaimer, setExpandedDisclaimer] = useState<string | null>(null)

  useEffect(() => {
    setSites(secondListSites)
  }, [])

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        // Full star
        return <Star key={i} className={`${className} fill-yellow-400 text-yellow-400`} />
      } else if (fillPercentage > 0) {
        // Partial star
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-gray-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        // Empty star
        return <Star key={i} className={`${className} text-gray-300`} />
      }
    })
  }

  const truncateText = (text: string, maxLength = 50) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim()
  }

  const getResponsiveTruncateLength = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) return 120 // Desktop/tablet - longer text
      return 50 // Mobile - shorter text with dots
    }
    return 50
  }

  const getMaxLength = () => {
    const length = getResponsiveTruncateLength()
    return length
  }

  const toggleDisclaimer = (siteId: string) => {
    setExpandedDisclaimer(expandedDisclaimer === siteId ? null : siteId)
  }

  return (
    <section
      id="second-rankings"
      className="py-4 sm:py-4 md:py-4 w-full bg-gradient-to-br from-emerald-50/30 to-orange-50/30"
    >
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="px-2 sm:px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-600 mb-6">
            Mais Casas de Apostas Confiáveis em Portugal
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {sites.map((site, index) => (
              <Card
                key={`second-${site.id}`}
                className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fadeIn relative ${
                  index === 0
                    ? "shadow-lg shadow-green-700 bg-white from-green-50 to-red-50 border-4 border-green-500"
                    : "bg-white border border-gray-200 hover:border-green-300"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {index < 4 && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-br-lg">
                      {index === 0 && "Melhor Escolha"}
                      {index === 1 && "Oferta Exclusiva"}
                      {index === 2 && "Altamente Avaliado"}
                      {index === 3 && "Tendência"}
                    </div>
                  </div>
                )}

                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-0">
                    {/* Mobile Layout */}
                    <div className="flex flex-col md:hidden">
                      <div className="grid grid-cols-2">
                        {/* First column: Logo and Rating with light gray background */}
                        <div className="bg-gray-100 p-4 flex flex-col items-center justify-center space-y-3 py-4 px-4">
                          <div className="p-3 rounded-lg shadow-md bg-black border border-gray-200">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={120}
                              height={60}
                              className="h-12 max-w-full object-contain"
                            />
                          </div>

                          <div className="text-center">
                            <div className="text-xs text-gray-400 mb-1">{site.reviewCount} avaliações</div>
                            <div className="flex items-center justify-center gap-1">
                              {renderStars(site.rating, "w-3 h-3")}
                              <div className="ml-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-gray-800">{site.rating.toFixed(1)}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Second column: Bonus and Button with white background */}
                        <div className="bg-white p-4 flex flex-col justify-center space-y-3">
                          <div className="text-center">
                            <div className="text-xs text-red-500 font-semibold mb-1">Bónus de Boas-Vindas</div>
                            <div className="text-sm font-bold text-gray-800 mb-1">{site.bonus}</div>
                            {site.dopbonus && <div className="text-gray-800 text-sm font-bold">{site.dopbonus}</div>}
                          </div>

                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm w-full">
                            OBTER BÓNUS
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center">
                      {/* Logo section */}
                      <div className="p-6 ">
                        <div className="bg-black p-4 rounded-lg shadow-md">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={160}
                            height={80}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 p-6 bg-white text-center">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-red-500 mb-2 font-bold text-lg">Bónus de Boas-Vindas</div>
                            <div className="text-xl font-bold text-gray-800 mb-1">{site.bonus}</div>
                            {site.dopbonus && <div className="text-gray-800 font-bold text-lg">{site.dopbonus}</div>}
                          </div>

                          <div className="text-center mx-8">
                            <div className="text-lg font-bold text-black mb-1">{site.name}</div>
                            <div className="text-xs text-gray-400">{site.reviewCount} avaliações</div>

                            <div className="flex items-center gap-1">
                              {renderStars(site.rating, "w-4 h-4")}
                              <div className="w-12 h-12 flex items-center justify-center ml-2">
                                <span className="text-xl font-extrabold text-emerald-600">
                                  {site.rating.toFixed(1)}
                                </span>
                              </div>
                            </div>
                          </div>

                          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                            OBTER BÓNUS
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
