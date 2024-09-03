"use client"

import { Wrapper } from "@/components/Wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()

  return (
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
              router.push("/jobs/post")
            }}
            className="rounded-lg bg-emerald-900 hover:bg-emerald-700"
          >
            <Link href={"/"}>I am looking to hire</Link>
          </Button>
          <Button className="rounded-lg bg-emerald-900  hover:bg-emerald-700">
            <Link href={"/"}>I want to offer Pro services</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Home
