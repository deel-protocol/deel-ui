import React, { useState, useEffect, useCallback } from 'react';
import { useClient, useConversations, useSendMessage, useMessages, useStartConversation } from "@xmtp/react-sdk";
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Send } from "lucide-react";

const ChatUI = () => {
  const [signer, setSigner] = useState(null);
  const [peerAddress, setPeerAddress] = useState("");
  const [message, setMessage] = useState("");
  const { client, initialize } = useClient();
  const { conversations } = useConversations();
  const { sendMessage } = useSendMessage();
  const { startConversation } = useStartConversation();
  const { messages } = useMessages(conversations[0]);

  useEffect(() => {
    const initializeSigner = async () => {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletClient = createWalletClient({
        account,
        chain: mainnet,
        transport: custom(window.ethereum)
      });
      setSigner(walletClient);
    };
    initializeSigner();
  }, []);

  const handleConnect = useCallback(async () => {
    if (signer) {
      const options = {
        persistConversations: false,
        env: "dev",
      };
      await initialize({ options, signer });
    }
  }, [initialize, signer]);

  const handleSendMessage = useCallback(async () => {
    if (client && peerAddress && message) {
      let conversation = conversations.find(c => c.peerAddress === peerAddress);
      if (!conversation) {
        conversation = await startConversation(peerAddress, message);
      }
      await sendMessage(conversation, message);
      setMessage("");
    }
  }, [client, peerAddress, message, conversations, startConversation, sendMessage]);

  if (!client) {
    return (
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardContent className="flex items-center justify-center h-40">
          <Button onClick={handleConnect}>Connect to XMTP</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Chat</h2>
        <MessageSquare className="h-6 w-6" />
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Enter peer address"
          value={peerAddress}
          onChange={(e) => setPeerAddress(e.target.value)}
          className="mb-4"
        />
        <ScrollArea className="h-[300px] border rounded-md p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.senderAddress === client.address ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${msg.senderAddress === client.address ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                {msg.content}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full space-x-2">
          <Input
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatUI;