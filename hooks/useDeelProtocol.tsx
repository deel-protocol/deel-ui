import { useEffect, useState } from 'react';
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { parseEther } from 'viem';

// Assuming you have the ABI in a separate file
import abi from '@/abi/deelProtocolABI.json';

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DEEL_PROTOCOL_ADDRESS as `0x${string}`;

export const useDeelProtocol = () => {
  const { address } = useAccount();
  const [jobCount, setJobCount] = useState<number>(0);

  // Read contract functions
  const { data: jobCountData, refetch: refetchJobCount } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'jobCount',
  });

  const { data: jobsData, refetch: refetchJobs } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi,
    functionName: 'listJobs',
    args: [0, 10], // Fetch first 10 jobs, adjust as needed
  });

  const useGetArweaveHash = async (address: string) => {
    const { data } = await useReadContract({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: 'arweaveHash',
      args: [address],
    });
    return data as string;
  };

  // Write contract functions
  const { writeContract: addJob, data: addJobData } = useWriteContract();
  const { writeContract: applyForJob, data: applyForJobData } = useWriteContract();
  const { writeContract: selectApplicant, data: selectApplicantData } = useWriteContract();
  const { writeContract: createDeelId, data: createDeelIdData } = useWriteContract();

  // Transaction receipts
  const { isSuccess: addJobSuccess } = useWaitForTransactionReceipt({ hash: addJobData });
  const { isSuccess: applyForJobSuccess } = useWaitForTransactionReceipt({ hash: applyForJobData });
  const { isSuccess: selectApplicantSuccess } = useWaitForTransactionReceipt({ hash: selectApplicantData });
  const { isSuccess: createDeelIdSuccess } = useWaitForTransactionReceipt({ hash: createDeelIdData });

  useEffect(() => {
    if (jobCountData) {
      setJobCount(Number(jobCountData));
    }
  }, [jobCountData]);

  useEffect(() => {
    if (addJobSuccess || applyForJobSuccess || selectApplicantSuccess || createDeelIdSuccess) {
      refetchJobCount();
      refetchJobs();
    }
  }, [addJobSuccess, applyForJobSuccess, selectApplicantSuccess, createDeelIdSuccess]);

  const addNewJob = (feeToken: string, currency: string, value: string) => {
    addJob({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: 'addJob',
      args: [feeToken, currency, parseEther(value)],
    });
  };

  const applyToJob = (jobId: number) => {
    applyForJob({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: 'applyForJob',
      args: [jobId],
    });
  };

  const selectJobApplicant = (jobId: number) => {
    selectApplicant({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: 'selectApplicant',
      args: [jobId],
    });
  };

  const createNewDeelId = (arwaveHash: string) => {
    createDeelId({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: 'createDeelId',
      args: [arwaveHash],
    });
  };


  return {
    address,
    jobCount,
    jobs: jobsData,
    addNewJob,
    applyToJob,
    selectJobApplicant,
    createNewDeelId,
    useGetArweaveHash,
  };
};