"use client"

import { Wrapper } from "@/components/Wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

const main = () => {
  const router = useRouter()

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-10 gap-5 mt-36">
          <Button className="rounded-lg bg-emerald-900 hover:bg-emerald-700">
            Already have a DEEL ID
          </Button>
          <Button
            onClick={() => router.push("/kyc")}
            className="rounded-lg bg-emerald-900 hover:bg-emerald-700"
          >
            Create new DEEL ID
          </Button>
        </div>
      </div>
    </main>
  )
}

export default main
