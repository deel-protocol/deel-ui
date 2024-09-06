"use client"
import { Connect } from "./Connect"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUserContext } from "./Usercontext"

const Header = () => {
  const pathname = usePathname()
  const { user } = useUserContext()

  return (
    <header className={`py-4 w-full px-24 mb-0 flex items-center justify-between z-10 ${pathname=== "/" || pathname === "/home" ? "fixed top-0": ""} bg-gradient-to-b from-white via-white to-transparent`}>
      <div className="flex justify-center items-center gap-6">
        <Link
          href="/"
          className="text-3xl md:text-xl font-bold text-emerald-500"
        >
          Deel
        </Link>
        <Link
          href="/kyc"
          className={` ${pathname === "/kyc" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
        >
          {user}
        </Link>
        <Link
          href="/jobs"
          className={` ${pathname === "/jobs" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
        >
          Jobs
        </Link>
        <Link
          href="/applications"
          className={` ${pathname === "/applications" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
        >
          Applications
        </Link>
      </div>
      <div>
        <Connect />
      </div>
    </header>
  )
}

export { Header }
