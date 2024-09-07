"use client"
import { Connect } from "./Connect"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUserContext } from "@/hooks/useUserContext"

const Header = () => {
  const pathname = usePathname()
  const { user } = useUserContext()
  console.log("current user is:", user)

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
        <Link
          href="/kyc"
          className={` ${pathname === "/kyc" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
        ></Link>
        {user === "poster" ||
          (user === "applier" && (
            <Link
              href="/jobs"
              className={` ${pathname === "/jobs" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
            >
              Jobs
            </Link>
          ))}
        {user === "poster" && (
          <Link
            href="/my-listings"
            className={` ${pathname === "/my-listings" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
          >
            My Listings
          </Link>
        )}
        {user === "applier" && (
          <Link
            href="/my-applications"
            className={` ${pathname === "/my-applications" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
          >
            My Applications
          </Link>
        )}
        {(user === "applier" || user === "poster") && (
          <Link
            href="/profile"
            className={` ${pathname === "/profile" ? "text-blue-600 font-bold" : "text-gray-700 font-semibold"}`}
          >
            My Profile
          </Link>
        )}
      </div>
      <div>
        <Connect />
      </div>
    </header>
  )
}

export { Header }
