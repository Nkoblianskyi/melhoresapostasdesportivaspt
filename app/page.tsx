"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import TopOffersModal from "@/components/top-offers-modal"
import { FirstBettingSitesList } from "@/components/first-betting-sites-list"
import { SecondBettingSitesList } from "@/components/second-betting-sites-list"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 8000) // Changed from 3000ms to 8000ms (8 seconds)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      <HeroSection
        onTopOffersClick={() => setIsTopOffersModalOpen(true)}
        onAdvertiserInfoClick={() => setIsAdvertiserModalOpen(true)}
        onAgeRestrictionClick={() => setIsAgeModalOpen(true)}
      />

      <FirstBettingSitesList />

      <InfoSection />

      <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
