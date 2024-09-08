import React, { useState } from "react";
import {
  SignProtocolClient,
  SpMode,
  EvmChains,
  delegateSignAttestation,
} from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";


const privateKey = "0xabc";
const delegationPrivateKey = "0xaaaaa";
const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.polygonMumbai,
  account: privateKeyToAccount(privateKey),
});

const AttestationForm = () => {
  const [poster, setPoster] = useState("");
  const [worker, setWorker] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  const handleAttest = async () => {
    try {
      setStatus("Attesting...");

      const data = {
        poster,
        worker,
        jobTitle,
        price: BigInt(price), // Price should be a uint256
      };

      const info = await delegateSignAttestation(
        {
          schemaId: "0x28d", // Use the correct schemaId
          data,
          indexingValue: jobTitle, // Example indexing value
        },
        {
          chain: EvmChains.polygonMumbai,
          delegationAccount: privateKeyToAccount(delegationPrivateKey),
        }
      );

      const attestationRes = await client.createAttestation(info.attestation, {
        delegationSignature: info.delegationSignature,
      });

      setStatus("Attestation successful!");
      console.log("Attestation Response:", attestationRes);
    } catch (error) {
      console.error("Error during attestation:", error);
      setStatus("Attestation failed!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Job Attestation</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Poster Address</label>
        <input
          type="text"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          placeholder="Enter poster address"
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Worker Address</label>
        <input
          type="text"
          value={worker}
          onChange={(e) => setWorker(e.target.value)}
          placeholder="Enter worker address"
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Job Title</label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Enter job title"
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Price (in wei)</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price in wei"
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <button
        onClick={handleAttest}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Attest Job
      </button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default AttestationForm;
