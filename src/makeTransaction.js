// src/makeTransaction.js

import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

// Function to initiate a transaction
export const makeTransaction = async (recipientPublicKey, amount) => {
  const connection = new Connection(clusterApiUrl('mainnet-beta')); // Change to devnet/testnet for testing
  const wallet = useWallet();

  if (!wallet.connected) {
    alert('Please connect your wallet.');
    return;
  }

  // Create the transaction to transfer SOL
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: new PublicKey(recipientPublicKey),
      lamports: amount, // Amount in lamports (1 SOL = 1e9 lamports)
    })
  );

  // Send the transaction
  try {
    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature);
    alert('Payment Successful!');
  } catch (error) {
    alert('Transaction failed: ' + error.message);
  }
};

// Function to get the user's balance
export const getBalance = async (walletPublicKey) => {
  const connection = new Connection(clusterApiUrl('mainnet-beta'));
  const balance = await connection.getBalance(walletPublicKey);
  return balance / 1000000000; // Convert from lamports to SOL
};
