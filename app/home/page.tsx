"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUserContext } from "@/hooks/useUserContext"
import { AuroraBackground } from "@/components/aurora-background"

const Home = () => {
  const router = useRouter()
  const { user, setUser } = useUserContext()
  console.log("current logged in user is:", user)

  return (
    <AuroraBackground>
      <main>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-10">
            <h1 className="text-4xl font-bold text-center text-gray-900">
              Welcome to Deel
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <Button
              onClick={() => {
                router.push("/jobs/post/new")
                setUser("poster")
              }}
              className="rounded-lg bg-emerald-900 hover:bg-emerald-700"
            >
              <Link href={"/"}>Create a job posting</Link>
            </Button>
            <Button
              onClick={() => {
                router.push("/jobs")
                setUser("applier")
              }}
              className="rounded-lg bg-emerald-900  hover:bg-emerald-700"
            >
              <Link href={"/"}>Browse all Jobs</Link>
            </Button>
          </div>
        </div>
      </main>
    </AuroraBackground>
  )
}

export default Home
