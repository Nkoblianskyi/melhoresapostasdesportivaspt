import type React from "react"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Melhores Casas de Apostas Portugal | Sites de Apostas Licenciados",
  description:
    "Compare as melhores casas de apostas em Portugal com os melhores bónus, odds e funcionalidades. Análises especializadas de bookmakers legais disponíveis em Portugal.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieConsentBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
