"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface BettingSite {
  id: number
  name: string
  logo: string
  category: string
  bonus: string
  dopbonus?: string
  rating: number
  reviewCount: number
  url: string
  featured?: boolean
}

export default function BettingSitesList() {
  const [firstListSites, setFirstListSites] = useState<BettingSite[]>([])
  const [secondListSites, setSecondListSites] = useState<BettingSite[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/betting-sites.json")
        const data = await response.json()
        setFirstListSites(data.firstListSites || [])
        setSecondListSites(data.secondListSites || [])
      } catch (error) {
        console.error("Error fetching betting sites:", error)
      }
    }

    fetchData()
  }, [])

  const renderStars = (rating: number, className = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${className} ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="w-full">
      <section id="rankings" className="py-4 sm:py-4 md:py-4 w-full">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="px-2 sm:px-4">
            <div className="space-y-4 sm:space-y-6">
              {firstListSites.map((site, index) => (
                <Card
                  key={site.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent
                      className={`pt-8 px-3 pb-3 md:pt-10 md:px-4 md:pb-4 lg:pt-12 lg:px-6 lg:pb-6 transition-colors duration-300 relative ${
                        index === 0
                          ? "bg-green-50 hover:bg-green-100 border-2 border-green-500"
                          : "bg-white hover:bg-green-100"
                      }`}
                    >
                      {/* Badge in top-left corner */}
                      {index < 4 && (
                        <div className="absolute top-0 left-0 z-10">
                          <div className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-br-lg">
                            {index === 0 && "Top Rated Bookie"}
                            {index === 1 && "Exclusive Offer"}
                            {index === 2 && "Trending"}
                            {index === 3 && "Recommended"}
                          </div>
                        </div>
                      )}

                      {/* Mobile Layout - до 968px */}
                      <div className="flex flex-col gap-3 md:hidden">
                        {/* Верхній рядок: логотип + бонус */}
                        <div className="grid grid-cols-2 items-start gap-2 min-h-[100px]">
                          <div className="flex justify-center items-center h-full">
                            <div className="bg-gray-900 p-2 rounded shadow-sm w-36 h-20 flex items-center justify-center">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={160}
                                height={80}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          </div>
                          <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                            <p className="text-lg font-bold text-orange-500 mb-1">Welcome Bonus</p>
                            <div className="font-bold text-green-800 text-lg leading-tight">{site.bonus}</div>
                            {site.dopbonus && (
                              <div className="font-bold text-green-800 text-sm leading-tight mt-1">{site.dopbonus}</div>
                            )}
                          </div>
                        </div>

                        {/* Нижній рядок: SCORE + рейтинг + кнопка */}
                        <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-gray-200 min-h-[60px]">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-800">{site.rating.toFixed(1)}</div>
                            <div className="text-[10px] text-gray-500 font-semibold">Score</div>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center gap-0.5 mb-1">
                              {renderStars(site.rating, "w-3 h-3")}
                            </div>
                            <div className="text-[10px] text-gray-500 font-semibold">({site.reviewCount})</div>
                          </div>
                          <div className="flex justify-center">
                            <Button className="bg-green-700 hover:bg-green-800 text-white text-xs px-4 py-2 font-semibold shadow">
                              Get Bonus
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Tablet Layout - від 968px до 1220px */}
                      <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[120px]">
                        {/* Column 1: Logo + Rank - фіксована ширина */}
                        <div className="flex items-center gap-3 w-48 flex-shrink-0">
                          <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="w-32 h-16 flex items-center justify-center bg-gray-900 p-2 rounded flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={120}
                              height={60}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Column 2: Name + Rating - гнучка ширина */}
                        <div className="text-center flex-1 min-w-0 px-2">
                          <h3 className="text-lg font-bold text-green-800 mb-1 truncate">{site.name}</h3>
                          <div className="flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-sm font-bold ml-1">{site.rating.toFixed(1)}</span>
                            <span className="text-xs text-gray-600">({site.reviewCount})</span>
                          </div>
                        </div>

                        {/* Column 3: Bonus - фіксована ширина */}
                        <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                          <p className="text-lg font-bold text-orange-500 mb-1">Welcome Bonus</p>
                          <div className="text-center min-h-[48px] flex flex-col justify-center">
                            <div className="font-bold text-green-800 text-sm leading-tight">{site.bonus}</div>
                            {site.dopbonus && (
                              <div className="font-bold text-green-800 text-xs leading-tight mt-1">{site.dopbonus}</div>
                            )}
                          </div>
                        </div>

                        {/* Column 4: Button - фіксована ширина */}
                        <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                          <Button className="bg-green-700 hover:bg-green-800 text-white text-base px-4 py-2 rounded shadow w-full">
                            Get Bonus
                          </Button>
                          <p className="text-xs text-gray-500">Play responsibly.</p>
                        </div>
                      </div>

                      {/* Desktop Layout - від 1220px */}
                      <div className="hidden lg:flex flex-row items-center justify-between gap-4">
                        {/* Column 1: Logo + Rank - фіксована ширина */}
                        <div className="flex items-center gap-5 w-80 flex-shrink-0">
                          <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="w-56 h-20 xl:h-24 flex items-center justify-center bg-gray-900 p-2 rounded flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={140}
                              height={100}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Column 2: Name + Rating - гнучка ширина */}
                        <div className="text-center flex-1 min-w-0 px-4">
                          <h3 className="text-2xl font-bold text-green-800 mb-1">{site.name}</h3>
                          <div className="mt-1 flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-base font-bold">{site.rating.toFixed(1)}</span>
                            <span className="text-sm text-gray-600">({site.reviewCount})</span>
                          </div>
                        </div>

                        {/* Column 3: Bonus - фіксована ширина */}
                        <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                          <p className="font-bold mb-1 text-xl text-orange-500">Welcome Bonus</p>
                          <div className="text-center min-h-[60px] flex flex-col justify-center">
                            <div className="font-bold text-green-800 xl:text-lg text-2xl leading-tight">
                              {site.bonus}
                            </div>
                            {site.dopbonus && (
                              <div className="font-bold text-green-800 xl:text-base mt-1 text-xl leading-tight">
                                {site.dopbonus}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Column 4: Button - фіксована ширина */}
                        <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                          <Button className="bg-green-700 hover:bg-green-800 text-white text-xl px-6 py-3 rounded shadow w-full">
                            Get Bonus
                          </Button>
                          <p className="text-xs text-gray-500">Play responsibly.</p>
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

      <section className="py-4 sm:py-4 md:py-4 w-full">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="px-2 sm:px-4">
            <div className="space-y-4 sm:space-y-6">
              {secondListSites.map((site, index) => (
                <Card
                  key={`second-${site.id}`}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                    <CardContent
                      className={`pt-8 px-3 pb-3 md:pt-10 md:px-4 md:pb-4 lg:pt-12 lg:px-6 lg:pb-6 transition-colors duration-300 relative bg-white hover:bg-green-100`}
                    >
                      {/* Mobile Layout - до 968px */}
                      <div className="flex flex-col gap-3 md:hidden">
                        {/* Верхній рядок: логотип + бонус */}
                        <div className="grid grid-cols-2 items-start gap-2 min-h-[100px]">
                          <div className="flex justify-center items-center h-full">
                            <div className="bg-gray-900 p-2 rounded shadow-sm w-36 h-20 flex items-center justify-center">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={160}
                                height={80}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          </div>
                          <div className="text-center flex flex-col justify-center h-full min-h-[80px]">
                            <p className="text-lg font-bold text-orange-500 mb-1">Welcome Bonus</p>
                            <div className="font-bold text-green-800 text-lg leading-tight">{site.bonus}</div>
                            {site.dopbonus && (
                              <div className="font-bold text-green-800 text-sm leading-tight mt-1">{site.dopbonus}</div>
                            )}
                          </div>
                        </div>

                        {/* Нижній рядок: SCORE + рейтинг + кнопка */}
                        <div className="grid grid-cols-3 items-center gap-2 pt-2 border-t border-gray-200 min-h-[60px]">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-800">{site.rating.toFixed(1)}</div>
                            <div className="text-[10px] text-gray-500 font-semibold">Score</div>
                          </div>
                          <div className="text-center">
                            <div className="flex justify-center gap-0.5 mb-1">
                              {renderStars(site.rating, "w-3 h-3")}
                            </div>
                            <div className="text-[10px] text-gray-500 font-semibold">({site.reviewCount})</div>
                          </div>
                          <div className="flex justify-center">
                            <Button className="bg-green-700 hover:bg-green-800 text-white text-xs px-4 py-2 font-semibold shadow">
                              Get Bonus
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Tablet Layout - від 968px до 1220px */}
                      <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[120px]">
                        {/* Column 1: Logo + Rank - фіксована ширина */}
                        <div className="flex items-center gap-3 w-32 flex-shrink-0">
                          <div className="w-32 h-16 flex items-center justify-center bg-gray-900 p-2 rounded flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={120}
                              height={60}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Column 2: Name + Rating - гнучка ширина */}
                        <div className="text-center flex-1 min-w-0 px-2">
                          <h3 className="text-lg font-bold text-green-800 mb-1 truncate">{site.name}</h3>
                          <div className="flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-sm font-bold ml-1">{site.rating.toFixed(1)}</span>
                            <span className="text-xs text-gray-600">({site.reviewCount})</span>
                          </div>
                        </div>

                        {/* Column 3: Bonus - фіксована ширина */}
                        <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                          <p className="text-lg font-bold text-orange-500 mb-1">Welcome Bonus</p>
                          <div className="text-center min-h-[48px] flex flex-col justify-center">
                            <div className="font-bold text-green-800 text-sm leading-tight">{site.bonus}</div>
                            {site.dopbonus && (
                              <div className="font-bold text-green-800 text-xs leading-tight mt-1">{site.dopbonus}</div>
                            )}
                          </div>
                        </div>

                        {/* Column 4: Button - фіксована ширина */}
                        <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                          <Button className="bg-green-700 hover:bg-green-800 text-white text-base px-4 py-2 rounded shadow w-full">
                            Get Bonus
                          </Button>
                          <p className="text-xs text-gray-500">Play responsibly.</p>
                        </div>
                      </div>

                      {/* Desktop Layout - від 1220px */}
                      <div className="hidden lg:flex flex-row items-center justify-between gap-4">
                        {/* Column 1: Logo + Rank - фіксована ширина */}
                        <div className="flex items-center gap-5 w-56 flex-shrink-0">
                          <div className="w-56 h-20 xl:h-24 flex items-center justify-center bg-gray-900 p-2 rounded flex-shrink-0">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={140}
                              height={100}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Column 2: Name + Rating - гнучка ширина */}
                        <div className="text-center flex-1 min-w-0 px-4">
                          <h3 className="text-2xl font-bold text-green-800 mb-1">{site.name}</h3>
                          <div className="mt-1 flex justify-center items-center gap-1">
                            <div className="flex">{renderStars(site.rating)}</div>
                            <span className="text-base font-bold">{site.rating.toFixed(1)}</span>
                            <span className="text-sm text-gray-600">({site.reviewCount})</span>
                          </div>
                        </div>

                        {/* Column 3: Bonus - фіксована ширина */}
                        <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                          <p className="font-bold mb-1 text-xl text-orange-500">Welcome Bonus</p>
                          <div className="text-center min-h-[60px] flex flex-col justify-center">
                            <div className="font-bold text-green-800 xl:text-lg text-2xl leading-tight">
                              {site.bonus}
                            </div>
                            {site.dopbonus && (
                              <div className="font-bold text-green-800 xl:text-base mt-1 text-xl leading-tight">
                                {site.dopbonus}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Column 4: Button - фіксована ширина */}
                        <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                          <Button className="bg-green-700 hover:bg-green-800 text-white text-xl px-6 py-3 rounded shadow w-full">
                            Get Bonus
                          </Button>
                          <p className="text-xs text-gray-500">Play responsibly.</p>
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
    </div>
  )
}
