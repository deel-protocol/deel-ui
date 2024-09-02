import React from 'react';

const page = () => {
  // Sample data for job posts
  const jobPosts = [
    {
      title: 'Job 1',
      description: 'This is the description for Job 1',
      price: '$100',
      poster: 'John Doe',
      timePeriod: '1 month',
    },
    {
      title: 'Job 2',
      description: 'This is the description for Job 2',
      price: '$200',
      poster: 'Jane Smith',
      timePeriod: '2 weeks',
    },
    // Add more job posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      {jobPosts.map((job, index) => (
        <div key={index} className="mb-4 bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">{job.title}</h2>
          <p className="mb-2">{job.description}</p>
          <p className="mb-2">Price: {job.price}</p>
          <p className="mb-2">Posted by: {job.poster}</p>
          <p className="mb-2">Time Period: {job.timePeriod}</p>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default page;