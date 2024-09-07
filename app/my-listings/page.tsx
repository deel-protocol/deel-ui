import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ChatUI from "@/components/ChatUI"; 
import { Address } from "viem";

export default function Applications() {
  const [applicantView, setApplicantView] = useState<boolean>(false);
  const [chatView, setChatView] = useState<boolean>(false);
  const [selectedApplicant, setSelectedApplicant] = useState<Address | null>(null);

  const jobListings = [
    {
      title: "Web designer",
      description: "A web designer to create our landing page",
      price: "$100",
    },
    // Add more job posts as needed
  ];

  const applicants = [
    {
      name: "John Doe",
      skills: "programming, design, figma",
      address: "0x7427143ce72069f8D6008FA52c87f4773B9A11fa"
    },
    // Add more applicants as needed
  ];

  const handleMessageClick = (address: string) => {
    setSelectedApplicant(address as Address);
    setChatView(true);
  };

  const handleBackToApplicants = () => {
    setChatView(false);
    setSelectedApplicant(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {chatView && selectedApplicant ? (
        <div>
          <Button onClick={handleBackToApplicants} className="mb-4">
            Back to Applicants
          </Button>
          <ChatUI peerAddress={selectedApplicant} />
        </div>
      ) : applicantView ? (
        <div>
          {applicants.map((applicant, index) => (
            <div
              className="mt-10 mb-4 bg-white rounded-lg p-4 shadow w-[500px]"
              key={index}
            >
              <h2 className="text-xl font-bold mb-2">{applicant.name}</h2>
              <p>{applicant.skills}</p>
              <Button className="mt-5 mr-2 rounded-lg bg-emerald-900 hover:bg-emerald-700">
                Hire
              </Button>
              <Button
                className="mt-5 mr-2 rounded-lg bg-blue-900 hover:bg-blue-700"
                onClick={() => handleMessageClick(applicant.address)}
              >
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
    </div>
  );
}