"use client"
import { Connect } from "./Connect"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUserContext } from "@/hooks/useUserContext"
import { useAccount } from "wagmi"

const Header = () => {
  const pathname = usePathname()
  const { user } = useUserContext()
  console.log("current user is:", user)
  const { address } = useAccount();


  return (
    <header
      className={`py-4 w-full px-24 mb-0 flex items-center justify-between z-10 ${pathname === "/" || pathname === "/home" ? "fixed top-0" : ""} bg-gradient-to-b from-white via-white to-transparent`}
    >
      <div className="flex justify-center items-center gap-6">
        <Link
          href="/"
          className="text-3xl md:text-2xl font-extrabold text-emerald-500"
        >
          deel.
        </Link>
        {(user === "poster" ||
          user === "applier" || address) && (
            <Link
              href="/jobs"
              className={` ${pathname === "/jobs" ? "text-emerald-500 font-bold" : "text-gray-700 font-semibold"}`}
            >
              Jobs
            </Link>
          )}
        {user === "poster" && (
          <Link
            href="/my-listings"
            className={` ${pathname === "/my-listings" ? "text-emerald-500 font-bold" : "text-gray-700 font-semibold"}`}
          >
            My Listings
          </Link>
        )}
        {user === "applier" && (
          <Link
            href="/my-applications"
            className={` ${pathname === "/my-applications" ? "text-emerald-500 font-bold" : "text-gray-700 font-semibold"}`}
          >
            My Applications
          </Link>
        )}
      </div>
      <div>
      <div className="flex justify-center items-center gap-4">
        {(address) && (
            <Link
              href="/deel-id"
              className={` ${pathname === "/deel-id" ? "text-emerald-500 font-bold" : "text-gray-700 font-semibold"}`}
            >
              My Profile
            </Link>
          )}
        <Connect />
      </div>
      </div>
    </header>
  )
}

export { Header }
