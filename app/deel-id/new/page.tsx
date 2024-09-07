'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, ArrowLeft, CheckCircle, User, Briefcase } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import KintoConnect from '@/components/KintoConnect';
import { useAccount } from 'wagmi';
import axios from 'axios';

const DeelIDForm = () => {
  const [step, setStep] = useState(20); 
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [company, setCompany] = useState('');
  const [proofOfWork, setProofOfWork] = useState('');
  const [bio, setBio] = useState(''); 
  const { address } = useAccount();

  const nextStep = () => setStep(step + 20);
  const prevStep = () => setStep(step - 20);

  const progressValue = (step / 100) * 100;

  const createDeelID = async () => {
    try {
      const data = {
        role,
        name,
        email,
        currentRole,
        company,
        proofOfWork,
        bio,
        address,
      };

      const response = await axios.post('/api/uploadToArweave', data);

      console.log(response.data);
    } catch (error) {
      console.error('Failed to create Deel ID:', error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      {/* Progress bar */}
      <div className="mb-6">
        <Progress value={progressValue} className="w-full" />
        <p className="text-sm text-gray-500 text-right">Step {step / 20} of 5</p>
      </div>

      {/* Step 1: Role Selection */}
      {step === 20 && (
        <>
          <h2 className="text-3xl font-semibold mb-6">Create Your Deel ID</h2>
          <p className="text-gray-700 mb-4">Select your role to get started:</p>
          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => { setRole('Job Poster'); nextStep(); }}
              className="w-full"
            >
              <Briefcase className="mr-2" />
              Job Poster
            </Button>
            <Button
              onClick={() => { setRole('Worker'); nextStep(); }}
              className="w-full"
            >
              <User className="mr-2" />
              Worker
            </Button>
          </div>
        </>
      )}

      {/* Step 2: Enter Personal Details */}
      {step === 40 && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Enter Your Details</h2>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <div className="flex justify-between">
            <Button onClick={prevStep} variant="outline">
              <ArrowLeft className="mr-2" /> Back
            </Button>
            <Button onClick={nextStep} >
              Next <ArrowRight className="ml-2" />
            </Button>
          </div>
        </>
      )}

      {/* Step 3: Work Experience & Bio */}
      {step === 60 && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <Input
            placeholder="Current Role"
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
            className="mb-4"
          />
          <Input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mb-4"
          />
          <Input
            placeholder="Proof of Work Link"
            value={proofOfWork}
            onChange={(e) => setProofOfWork(e.target.value)}
            className="mb-4"
          />
          <Textarea
            placeholder="Brief Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mb-4"
          />
          <div className="flex justify-between">
            <Button onClick={prevStep} >
              <ArrowLeft className="mr-2" /> Back
            </Button>
            <Button onClick={nextStep} >
              Next <ArrowRight className="ml-2" />
            </Button>
          </div>
        </>
      )}

      {/* Step 4: Review Information */}
      {step === 80 && (
        <>
          <h2 className="text-2xl font-semibold mb-6">Review Your Information</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li><strong>Role:</strong> {role}</li>
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Email:</strong> {email}</li>
            <li><strong>Current Role:</strong> {currentRole}</li>
            <li><strong>Company:</strong> {company}</li>
            <li><strong>Proof of Work:</strong> {proofOfWork}</li>
            <li><strong>Bio:</strong> {bio}</li> 
          </ul>
          <div className="flex justify-between">
            <Button onClick={prevStep} >
              <ArrowLeft className="mr-2" /> Back
            </Button>
            <Button onClick={nextStep} className='bg-emerald-800'>
              Confirm <CheckCircle className="ml-2" />
            </Button>
          </div>
        </>
      )}

      {/* Step 5: KYC Verification */}
      {step === 100 && (
        <>
          <h2 className="text-2xl font-semibold mb-6">KYC Verification</h2>
          <KintoConnect />
          <div className="flex justify-between mt-4">
            <Button onClick={prevStep} variant="outline">
              <ArrowLeft className="mr-2" /> Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeelIDForm;
