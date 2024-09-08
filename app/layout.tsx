"use client"

import "./globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"
import type { Metadata } from "next"
import { Space_Grotesk as FontSans } from "next/font/google"
import { Providers } from "@/components/Providers"
import { Header } from "@/components/Header"
import { ToastContainer } from "react-toastify"
import { cn } from "@/lib/utils"
import { UserProvider } from "@/hooks/useUserContext"
import { XMTPProvider } from "@xmtp/react-sdk"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <UserProvider>
          <Providers>
            <XMTPProvider>
              <Header />
              {children}
            </XMTPProvider>
          </Providers>
          <ToastContainer />
        </UserProvider>
      </body>
    </html>
  )
}
