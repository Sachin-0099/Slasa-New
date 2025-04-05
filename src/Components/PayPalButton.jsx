import { useEffect, useRef } from "react";
import axios from "axios";

const PayPalButton = ({ amount }) => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: async () => {
          const res = await axios.post("/api/payment/create-order", {
            amount: amount,
          });
          return res.data.id; // Order ID from backend
        },
        onApprove: async (data) => {
          const res = await axios.post(
            `/api/payment/capture-order/${data.orderID}`
          );
          console.log("Payment Successful:", res.data);
          alert("Payment successful!");
        },
        onError: (err) => {
          console.error("PayPal Checkout onError", err);
          alert("Something went wrong during payment.");
        },
      })
      .render(paypal.current);
  }, [amount]);

  return <div ref={paypal}></div>;
};

export default PayPalButton;
