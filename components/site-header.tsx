"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/80 backdrop-filter backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src='/favicon.ico' width={48} height={48} alt={"logo"} className="rounded-lg bg-white p-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-green-500 group-hover:to-red-500">
            MelhoresApostasDesportivasPT
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">18+</div>
          <div className="text-xs text-gray-300">Jogue com Responsabilidade</div>
        </div>
      </div>
    </header>
  )
}
