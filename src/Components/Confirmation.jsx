import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import PayPalButton from "./PayPalButton";
// import Product from "./ProductList"
const Confirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderDetails"));
    console.log("Order Data:", orderData); // Debugging

    if (orderData) {
      setOrderDetails(orderData);
    } else {
      setError(true);
      setTimeout(() => navigate("/"), 3000);
    }
  }, [navigate]);

  if (error) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Error</h2>
        <p>No order details found. Redirecting to homepage...</p>
      </div>
    );
  }

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const handleContinueShopping = () => {
    localStorage.removeItem("orderDetails");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>

      <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginTop: "20px" }}>
        <h3>Order Details:</h3>
        <p><strong>Order ID:</strong> {orderDetails.orderId || "N/A"}</p>
        <p><strong>Order Total:</strong> &#8377;{orderDetails.total.toFixed(2)}</p>

        {orderDetails.shippingMethod === "home" && orderDetails.selectedAddress && (
          <div>
            <h3>Shipping Address:</h3>
            <p>{orderDetails.selectedAddress.name}</p>
            <p>{orderDetails.selectedAddress.address}</p>
            <p><strong>Mobile:</strong> {orderDetails.selectedAddress.mobile}</p>
          </div>
        )}

        {orderDetails.shippingMethod === "store" && orderDetails.selectedStore && (
          <div>
            <h3>Pickup Store:</h3>
            <p>{orderDetails.selectedStore.name}</p>
            <p>{orderDetails.selectedStore.address}</p>
          </div>
        )}

        {orderDetails.deliveryDate && (
          <p><strong>Delivery Date:</strong> {new Date(orderDetails.deliveryDate).toLocaleDateString()}</p>
        )}

        <h3>Items:</h3>
        <div style={{ overflowY: "auto", maxHeight: "400px", borderTop: "1px solid #eee", paddingTop: "10px" }}>
          {orderDetails.cartItems.map((item) => (
            <div key={item.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0", display: "flex", alignItems: "center" }}>
              <img src={item.image} alt={item.name} style={{ width: "80px", marginRight: "15px", borderRadius: "5px" }} />
              <div style={{ textAlign: "left" }}>
                <p><strong>{item.name}</strong></p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: &#8377;{item.price.toFixed(2)}</p>
                {item.color && <p>Color: {item.color}</p>}
                {item.size && <p>Size: {item.size}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        style={{
          padding: "10px 20px", 
          backgroundColor: "#28a745", 
          color: "white", 
          border: "none", 
          cursor: "pointer", 
          marginTop: "20px",
          borderRadius: "5px",
          fontSize: "16px"
        }} 
        onClick={handleContinueShopping}
      >
        {/* <PayPalButton amount={product.price} /> */}
        Continue Shopping
      </button>
    </div>
  );
};

export default Confirmation;
