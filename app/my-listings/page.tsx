"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Applications() {
  const [applicantview, setApplicantView] = useState<boolean>(false)
  const jobListings = [
    {
      title: "Web desinger",
      description: "A web designer to create our landing page",
      price: "$100",
    },
    // Add more job posts as needed
  ]

  const applicants = [
    {
      name: "John Doe",
      skills: "programming, design, figma",
    },
    // Add more job posts as needed
  ]
  return (
    <div className="container mx-auto px-4 py-8">
      <>
        {applicantview ? (
          <div>
            {applicants.map((applicant, index) => (
              <div
                className="mt-10 mb-4 bg-white rounded-lg p-4 shadow w-[500px]"
                key={index}
              >
                <h2 className="text-xl font-bold mb-2">{applicant.name}</h2>
                <p>{applicant.skills}</p>
                <Button className="mt-5 rounded-lg bg-emerald-900 hover:bg-emerald-700">
                  Hire
                </Button>
                <Button className="mt-5 rounded-lg bg-blue-900 hover:bg-blue-700">
                  Message
                </Button>
                <Button className="mt-5 rounded-lg bg-red-900 hover:bg-red-700">
                  Reject
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p>Your outstanding job listings</p>
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="mt-10 mb-4 bg-white rounded-lg p-4 shadow w-[500px]"
              >
                <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                <p className="mb-2">{job.description}</p>
                <p className="mb-2">Price: {job.price}</p>
                <Button
                  onClick={() => setApplicantView(true)}
                  className="rounded-lg bg-emerald-900 hover:bg-emerald-700"
                >
                  View all applicants
                </Button>
              </div>
            ))}
          </>
        )}
      </>
    </div>
  )
}
