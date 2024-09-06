'use client'
import { useEffect, useState } from 'react';
import { createKintoSDK, KintoAccountInfo } from 'kinto-web-sdk';
import { Button } from '@/components/ui/button';
import { Wrapper } from '@/components/Wrapper';
import {
  encodeFunctionData, Address, getContract,
  defineChain, createPublicClient, http
} from 'viem';

import contractsJSON from '@/abi/7887.json';

interface KYCViewerInfo {
  isIndividual: boolean;
  isCorporate: boolean;
  isKYC: boolean;
  isSanctionsSafe: boolean;
  getCountry: string;
  getWalletOwners: Address[];
}

const kinto = defineChain({
  id: 7887,
  name: 'Kinto',
  network: 'kinto',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.kinto-rpc.com/'],
      webSocket: ['wss://rpc.kinto.xyz/ws'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://kintoscan.io' },
  },
});

const KintoConnect = () => {

  const [accountInfo, setAccountInfo] = useState<KintoAccountInfo | undefined>(undefined);
  const [kycViewerInfo, setKYCViewerInfo] = useState<any | undefined>(undefined);

    const appAddress = '0x14A1EC9b43c270a61cDD89B6CbdD985935D897fE'; // Kinto smart contract address
    const kintoSDK = createKintoSDK(appAddress);

    async function kintoLogin() {
    try {
      await kintoSDK.createNewWallet();
    } catch (error) {
      console.error('Failed to login/signup:', error);
    }
  }

  async function fetchAccountInfo() {
    try {
      setAccountInfo(await kintoSDK.connect());
    } catch (error) {
      console.error('Failed to fetch account info:', error);
    }
  };

  async function fetchKYCViewerInfo() {
    if (!accountInfo?.walletAddress) return;

    const client = createPublicClient({
      chain: kinto,
      transport: http(),
    });
    const kycViewer = getContract({
      address: contractsJSON.contracts.KYCViewer.address as Address,
      abi: contractsJSON.contracts.KYCViewer.abi,
      client: { public: client }
    });

    try {
      const [isIndividual, isCorporate, isKYC, isSanctionsSafe, getCountry, getWalletOwners] = await Promise.all([
        kycViewer.read.isIndividual([accountInfo.walletAddress]),
        kycViewer.read.isCompany([accountInfo.walletAddress]),
        kycViewer.read.isKYC([accountInfo.walletAddress]),
        kycViewer.read.isSanctionsSafe([accountInfo.walletAddress]),
        kycViewer.read.getCountry([accountInfo.walletAddress]),
        kycViewer.read.getWalletOwners([accountInfo.walletAddress])
      ]);

      setKYCViewerInfo({
        isIndividual,
        isCorporate,
        isKYC,
        isSanctionsSafe,
        getCountry,
        getWalletOwners
      } as KYCViewerInfo);
    } catch (error) {
      console.error('Failed to fetch KYC viewer info:', error);
    }

    console.log('KYCViewerInfo:', kycViewerInfo);
  }


  useEffect(() => {
    fetchAccountInfo();
  });

  useEffect(() => {
    if (accountInfo?.walletAddress) {
      fetchKYCViewerInfo();
    }
  }, [accountInfo]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div className='flex justify-center items-center'>
        <Button onClick={kintoLogin}>
          Login/Signup
        </Button>
      </div>
    );
}

export default KintoConnect;