"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/Checkbox"

import { useUserContext } from "@/hooks/useUserContext"
import Personicon from "@/lib/personicon"
import { Textarea } from "@/components/ui/textarea"

const Page = () => {
  // Sample data for job posts
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const { user } = useUserContext()

  const jobPosts = [
    {
      title: "Job 1",
      description: "This is the description for Job 1",
      price: "$100",
      poster: "John Doe",
      timePeriod: "1 month",
    },
    {
      title: "Job 2",
      description: "This is the description for Job 2",
      price: "$200",
      poster: "Jane Smith",
      timePeriod: "2 weeks",
    },
    // Add more job posts as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Dialog>
        <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
        {jobPosts.map((job, index) => (
          <div key={index} className="mb-4 bg-white rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="mb-2">{job.description}</p>
            <p className="mb-2">Price: {job.price}</p>
            <p className="mb-2">Posted by: {job.poster}</p>
            <p className="mb-2">Time Period: {job.timePeriod}</p>
            {user === "applier" && (
              <DialogTrigger asChild>
                <Button className="rounded-lg bg-emerald-900 hover:bg-emerald-700">
                  Apply
                </Button>
              </DialogTrigger>
            )}
          </div>
        ))}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              Apply For This Job
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <Personicon />
          </div>
          <div className="items-top flex flex-col justify-center space-x-2">
            <div className="flex justify-center gap-3">
              <Checkbox
                onClick={() => {
                  setIsChecked(true)
                }}
                id="terms1"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  onClick={() => {
                    setIsChecked(true)
                  }}
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Share user Profile
                </label>
              </div>
            </div>
            {isChecked ? (
              <div className="flex justify-center mt-10 ">
                <Textarea placeholder="Type additional employment notes here" />
              </div>
            ) : (
              ""
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Apply</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Page
