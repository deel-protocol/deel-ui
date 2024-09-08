"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useDeelProtocol } from "@/hooks/useDeelProtocol"

export default function Post() {
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [feeAddress, setFeeAddress] = useState("")
  const [paymentAddress, setPaymentAddress] = useState("")
  const [pricing, setPricing] = useState("")
  const { addNewJob } = useDeelProtocol()

  const router = useRouter()

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (category && description && feeAddress && paymentAddress && pricing) {
      // Call addNewJob with the form values
      addNewJob(feeAddress, category, pricing)
      // Optionally, redirect or show a success message
      router.push("/jobs") // Redirect after submission
    } else {
      // Handle form validation
      alert("Please fill out all fields.")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Post your<span className="text-emerald-600">{" deel."}</span>
      </h1>
      <Card className="w-[350px] mt-16">
        <CardHeader>
          <CardTitle>Create deel Listing</CardTitle>
          <CardDescription>
            Post your job listing with one simple click
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Webdesign</SelectItem>
                    <SelectItem value="sveltekit">Code auditing</SelectItem>
                    <SelectItem value="astro">
                      Smart contract development
                    </SelectItem>
                    <SelectItem value="nuxt">Landing page creation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter the Job Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fee">Gas Fee Address</Label>
                <Input
                  id="fee"
                  placeholder="Enter the Address to pay Gas fees "
                  onChange={(e) => setFeeAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="payment">Payment Adress</Label>
                <Input
                  id="payment"
                  placeholder="Enter the Address to send the payment from "
                  onChange={(e) => setPaymentAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pricing">Pricing</Label>
                <Input
                  id="pricing"
                  placeholder="Enter the pricing for this job"
                  onChange={(e) => setPricing(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => router.push("/")} variant="outline">
            Cancel
          </Button>
          <Button type="submit">Post</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
