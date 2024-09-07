"use client"

import Personprofile from "@/lib/personprofile"
import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserContext } from "@/hooks/useUserContext"

export default function Profile() {
  const { user } = useUserContext()
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center mt-5">
        <h1 className="text-3xl font-semibold">My Profile</h1>
      </div>
      <div className="flex justify-center mt-12">
        <Personprofile />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Role</Label>
          <Input type="email" defaultValue="Role" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Name</Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">currentRole</Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Company</Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Proof of Work </Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Bio</Label>
          <Input type="email" id="email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Address</Label>
          <Input type="email" id="email" />
        </div>
      </div>
    </div>
  )
}
