"use client"
import React from "react"
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
import { useUserContext } from "@/hooks/useUserContext"

const Page = () => {
  // Sample data for job posts

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
            </DialogTrigger>)}
          </div>
        ))}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-center">
              Apply For This Job
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
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
