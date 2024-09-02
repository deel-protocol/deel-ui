"use client"
import { ConnectButton } from "@rainbow-me/rainbowkit"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 w-full px-24 mb-0 flex items-center justify-between z-10 bg-gradient-to-b from-white via-white to-transparent">
      <div className="flex justify-center items-center gap-6">
        <Link href="/" className="text-3xl md:text-xl font-bold text-emerald-500">
          Deel
        </Link>
        <Link href="/kyc" className={` ${pathname === "/kyc" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}>KYC</Link>
        <Link href="/jobs" className={` ${pathname === "/jobs" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}>Jobs</Link>
      </div>
      <div>
        <ConnectButton
          showBalance={false}
          accountStatus="address"
          label="Connect"
        />
      </div>
    </header>
  )
}

export { Header }