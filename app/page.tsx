"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { AuroraBackground } from "@/components/aurora-background"

const Main = () => {
  const router = useRouter()

  return (
    <AuroraBackground>
      <main>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-10 gap-5 mt-16">
            <Button
              onClick={() => router.push("/home")}
              className="rounded-lg bg-emerald-800 hover:bg-emerald-700"
            >
              {"I already have"}&nbsp;<span className="font-medium">deel ID</span>
            </Button>
            <Button
              onClick={() => router.push("/dee-id/new")}
              className="rounded-lg bg-emerald-800 hover:bg-emerald-700"
            >
              {"Create a new"}&nbsp;<span className="font-medium">deel ID</span>
            </Button>
          </div>
        </div>
      </main>
    </AuroraBackground>
  )
}

export default Main
