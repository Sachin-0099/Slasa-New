// src/CheckoutButton.js

import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { makeTransaction, getBalance } from './makeTransaction';

const CheckoutButton = () => {
  const { publicKey, connected } = useWallet();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        const userBalance = await getBalance(publicKey);
        setBalance(userBalance);
      }
    };

    if (connected) {
      fetchBalance();
    }
  }, [connected, publicKey]);

  const handleCheckout = async () => {
    const recipientPublicKey = 'recipient-public-key-here'; // Replace with merchant's public key
    const amount = 100000000; // 0.1 SOL = 100,000,000 lamports

    await makeTransaction(recipientPublicKey, amount);
  };

  return (
    <div>
      {connected ? (
        <>
        <div className='container mx-auto'>

       
          <h2>Your balance: {balance} SOL</h2>
          <button onClick={handleCheckout}>Checkout with Solana</button>
          </div>
        </>
      ) : (
        <p>Please connect your wallet to proceed with the payment.</p>
      )}
    </div>
  );
};

export default CheckoutButton;
