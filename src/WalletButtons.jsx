// src/WalletButtons.js

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import styled from 'styled-components';

// Styled Components for UI
const Button = styled.button`
  background-color: ${(props) => (props.connected ? '#e53e3e' : '#3182ce')};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.connected ? '#c53030' : '#2b6cb0')};
  }
`;

const WalletAddress = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #4a5568;
`;

const PaymentSection = styled.div`
  margin-top: 30px;
  display: ${(props) => (props.connected ? 'block' : 'none')};
`;

const InputField = styled.input`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
`;

const PaymentButton = styled(Button)`
  margin-top: 10px;
  background-color: #48bb78;
  &:hover {
    background-color: #38a169;
  }
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  margin-top: 10px;
`;

const WalletButtons = () => {
  const { connected, connect, disconnect, publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handlePayment = async () => {
    if (!recipient || !amount) {
      setError('Please enter both recipient address and amount.');
      return;
    }
    try {
      setError('');
      // Call the transaction function (you can create this based on the code you already have)
      await makeTransaction(recipient, parseFloat(amount) * 1e9); // converting SOL to lamports
    } catch (err) {
      setError('Transaction failed. Please try again.');
    }
  };

  const makeTransaction = async (recipientPublicKey, amount) => {
    // Here you can use the logic for transaction from the previous code
    console.log('Transaction to', recipientPublicKey, 'with amount', amount);
    alert('Transaction successful!');
  };

  return (
    <div>
      {!connected ? (
        <Button onClick={connect}>Connect Wallet</Button> // Connect button
      ) : (
        <div>
          <Button connected onClick={disconnect}>Disconnect Wallet</Button>  {/* Disconnect button */}
          <WalletAddress>Wallet Address: {publicKey.toBase58()}</WalletAddress>  {/* Show wallet address */}
        </div>
      )}

      <PaymentSection connected={connected}>
        <h2>Make a Payment</h2>
        <InputField
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <InputField
          type="number"
          placeholder="Amount (SOL)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <PaymentButton onClick={handlePayment}>Send Payment</PaymentButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </PaymentSection>
    </div>
  );
};

export default WalletButtons;
