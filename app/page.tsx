"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {AuroraBackground}  from "@/components/aurora-background"

const Main = () => {
  const router = useRouter()

  return (
    <AuroraBackground>
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-10 gap-5 mt-36">
          <Button className="rounded-lg bg-emerald-800 hover:bg-emerald-700"
          onClick={()=> router.push("/home")}
          >
            Already have a DEEL ID
          </Button>
          <Button
            onClick={() => router.push("/kyc")}
            className="rounded-lg bg-emerald-800 hover:bg-emerald-700"
          >
            Create new DEEL ID
          </Button>
        </div>
      </div>
    </main>
    </AuroraBackground>
  )
}

export default Main
