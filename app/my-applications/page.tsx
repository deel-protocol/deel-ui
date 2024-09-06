import React from 'react';
import { Card } from '@/components/ui/card';

interface Job {
  id: number;
  title: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  price: number;
  description: string;
}

const jobs: Job[] = [
  { id: 1, title: 'Job 1', status: 'pending', price: 100, description: 'Lorem ipsum dolor sit amet.' },
  { id: 2, title: 'Job 2', status: 'approved', price: 200, description: 'Consectetur adipiscing elit.' },
  { id: 3, title: 'Job 3', status: 'rejected', price: 150, description: 'Sed do eiusmod tempor incididunt.' },
  { id: 4, title: 'Job 4', status: 'completed', price: 300, description: 'Ut labore et dolore magna aliqua.' },
];

const JobList: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Applied Jobs</h1>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id}>
            <Card className="p-4 bg-white shadow-md rounded-md">
              <h2 className="text-lg font-bold mb-2">{job.title}</h2>
              <p className="mb-2">Status: {job.status}</p>
              <p className="mb-2">Price: ${job.price}</p>
              <p className="mb-2">Description: {job.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;