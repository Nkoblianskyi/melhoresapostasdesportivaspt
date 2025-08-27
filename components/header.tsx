"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image src='/favicon.ico' width={32} height={32} alt={"logo"}  />
          <span className="text-xl font-bold text-emerald-500 transition-colors duration-300 group-hover:text-emerald-400">
            MelhoresApostasDesportivasPT
          </span>
        </Link>
      </div>
    </header>
  )
}
