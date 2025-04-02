import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    mobile: "",
    isDefault: false,
  });
  const [shippingMethod, setShippingMethod] = useState("home");
  const [nearbyStores, setNearbyStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const fetchAddresses = async () => {
      const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
      setAddresses(storedAddresses);
      setSelectedAddress(storedAddresses.find((addr) => addr.isDefault) || storedAddresses[0]);
    };

    fetchAddresses();
  }, []);

  useEffect(() => {
    const fetchNearbyStores = async () => {
      try {
        const response = await fetch('/api/nearby-stores');
        if (!response.ok) {
          throw new Error('Failed to fetch nearby stores');
        }
        const data = await response.json();
        setNearbyStores(data);
      } catch (error) {
        console.error('Error fetching nearby stores:', error);
        setNearbyStores([
          { id: 1, name: "Default Store A", address: "Default Store A Address" },
          { id: 2, name: "Default Store B", address: "Default Store B Address" },
          { id: 3, name: "Default Store C", address: "Default Store C Address" },
        ]);
      }
    };
    if (shippingMethod === "store") {
      fetchNearbyStores();
    }
  }, [shippingMethod]);

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };

  const calculateTotal = () => {
    const totalMRP = (cartItems || []).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = totalMRP * 0.2;
    const shippingFee = totalMRP > 500 ? 0 : 50;
    const platformFee = 5;
    const total = totalMRP - discount + shippingFee + platformFee;
    return { totalMRP, discount, shippingFee, platformFee, total };
  };

  const { totalMRP, discount, shippingFee, platformFee, total } = calculateTotal();

 // Inside the handleCheckout function in your Checkout component:
// Inside the handleCheckout function in your Checkout component:
const handleCheckout = () => {
  const orderDetailsToSend = {
    cartItems,
    selectedAddress: shippingMethod === "home" ? selectedAddress : null,
    selectedStore: shippingMethod === "store" ? selectedStore : null,
    deliveryDate,
    total,
    shippingMethod,
  };
  localStorage.setItem("orderDetails", JSON.stringify(orderDetailsToSend));
  localStorage.removeItem("cart");
  navigate("/confirmation");
};

  const handleOpenAddressForm = () => {
    setIsAddressFormOpen(true);
  };

  const handleCloseAddressForm = () => {
    setIsAddressFormOpen(false);
    setNewAddress({ name: "", address: "", mobile: "", isDefault: false });
  };

  const handleNewAddressChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = () => {
    const newAddressWithId = { ...newAddress, id: Date.now() };
    const updatedAddresses = [...addresses, newAddressWithId];
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setIsAddressFormOpen(false);
    setNewAddress({ name: "", address: "", mobile: "", isDefault: false });
  };

  const handleShippingMethodChange = (method) => {
    setShippingMethod(method);
    if (method === "store") {
      setSelectedAddress(null);
    }
  };

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
  };

  const handleRemoveAddress = (addressId) => {
    const updatedAddresses = addresses.filter((address) => address.id !== addressId);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    if (selectedAddress?.id === addressId) {
      setSelectedAddress(updatedAddresses[0] || null);
    }
  };

  const handleOpenOrderDetails = () => {
    setIsOrderDetailsOpen(true);
  };

  const handleCloseOrderDetails = () => {
    setIsOrderDetailsOpen(false);
  };

  return (
    <div>
      <div style={{ backgroundColor: "#3087d1", opacity: "4", padding: "30px", borderRadius: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <img src="Images/Untitled design.svg" alt="Home Centre Logo" style={{ height: "80px" }} className="rounded-2xl" />
          <div>
            <p>Call 1800-212-7500</p>
            <p>Monday-Sunday, 10 AM-8 PM</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px", display: "flex" }}>
        <div style={{ flex: 2, paddingRight: "20px" }}>
          {/* ... (rest of the left section) */}
           <h2>Shipping method</h2>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginRight: "10px",
                borderRadius: "5px",
                backgroundColor: shippingMethod === "home" ? "#e0f7fa" : "transparent",
              }}
              onClick={() => handleShippingMethodChange("home")}
            >
              <strong>Home Delivery</strong>
              <p>(Get your product delivered to your home)</p>
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: shippingMethod === "store" ? "#e0f7fa" : "transparent",
              }}
              onClick={() => handleShippingMethodChange("store")}
            >
              <strong>Pick from nearby store</strong>
              <p>(Collect your order from a store of your choice)</p>
            </div>
          </div>

          {shippingMethod === "home" && (
            <>
              <h3 style={{ marginTop: "20px" }}>Select your shipping address</h3>
              <button
                style={{ backgroundColor: "transparent", border: "none", color: "blue", cursor: "pointer" }}
                onClick={handleOpenAddressForm}
              >
                Add new address
              </button>

              {isAddressFormOpen && (
                <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px", borderRadius: "5px" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newAddress.name}
                    onChange={handleNewAddressChange}
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                  <textarea
                    name="address"
                    placeholder="Address"
                    value={newAddress.address}
                    onChange={handleNewAddressChange}
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={newAddress.mobile}
                    onChange={handleNewAddressChange}
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                  <label>
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={newAddress.isDefault}
                      onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                    />
                    Set as Default
                  </label>
                  <button onClick={handleSaveAddress} style={{ backgroundColor: "#007bff", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", marginTop: "5px", cursor: "pointer" }}>Save</button>
                  <button onClick={handleCloseAddressForm} style={{ backgroundColor: "lightgrey", color: "black", padding: "5px 10px", border: "none", borderRadius: "5px", marginTop: "5px", marginLeft: "5px", cursor: "pointer" }}>Cancel</button>
                </div>
              )}

              <div style={{ marginTop: "10px" }}>
                {addresses.map((address) => (
                  <div key={address.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <input
                        type="radio"
                        id={`address-${address.id}`}
                        name="address"
                        checked={selectedAddress?.id === address.id}
                        onChange={() => handleAddressChange(address)}
                      />
                      <label htmlFor={`address-${address.id}`}>
                        <p><strong>{address.name}</strong></p>
                        <p>{address.address}</p>
                        <p>Mobile Number: {address.mobile}</p>
                        {address.isDefault && <p>DEFAULT</p>}
                      </label>
                    </div>
                    <button style={{ backgroundColor: "red", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => handleRemoveAddress(address.id)}>Remove</button>
                  </div>
                ))}
              </div>
            </>
          )}

          {shippingMethod === "store" && (
            <>
              <h3 style={{ marginTop: "20px" }}>Select a nearby store</h3>
              <div style={{ marginTop: "10px" }}>
                {nearbyStores.map((store) => (
                  <div key={store.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
                    <input
                      type="radio"
                      id={`store-${store.id}`}
                      name="store"
                      checked={selectedStore?.id === store.id}
                      onChange={() => handleStoreSelect(store)}
                    />
                    <label htmlFor={`store-${store.id}`}>
                      <p><strong>{store.name}</strong></p>
                      <p>{store.address}</p>
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          <h3 style={{ marginTop: "20px" }}>Choose Your Delivery Date</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "5px", marginTop: "10px" }}>
            {Array.from({ length: 12 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              const day = date.getDate();
              const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
              return (
                <button key={i} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onClick={() => handleDateChange(date)}>
                  {day} {dayName}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h2>Total MRP</h2>
          <p>&#8377;{totalMRP.toFixed(2)}</p>

          <h2>Offer discount</h2>
          <p>- &#8377;{discount.toFixed(2)}</p>

          <h2>Shipping Fee</h2>
          <p>&#8377;{shippingFee.toFixed(2)}</p>

          <h2>Platform Fee</h2>
          <p>&#8377;{platformFee.toFixed(2)}</p>

          <hr style={{ borderTop: "1px solid #ccc", margin: "10px 0" }} />

          <h2>Total</h2>
          <p>&#8377;{total.toFixed(2)}</p>

          <div style={{ marginTop: "20px" }}>
            <h3>Order Summary</h3>
            <button
              style={{ backgroundColor: "transparent", border: "none", color: "blue", cursor: "pointer" }}
              onClick={handleOpenOrderDetails}
            >
              Details
            </button>
          </div>

          {isOrderDetailsOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", width: "80%", maxWidth: "600px" }}>
                <h3>Order Details</h3>
                <div style={{overflowY: "auto", maxHeight: "400px"}}>
                {cartItems.map((item) => (
                  <div key={item.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={item.image} alt={item.name} style={{ width: "80px", marginRight: "10px" }} />
                      <div>
                        <p><strong>{item.name}</strong></p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: &#8377;{item.price.toFixed(2)}</p>
                        <p>Color: {item.color}</p>
                        <p>Size: {item.size}</p>
                        {/* Add more product details here */}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                <button onClick={handleCloseOrderDetails} style = {{marginTop:"10px"}}>Close</button>
              </div>
            </div>
          )}

          <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <p>Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing.</p>
          </div>

          <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "20px", cursor: "pointer" }} onClick={handleCheckout}>
            Place Order
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "center", fontSize: "0.8em" }}>
        <p>&copy; 2025 Slasa</p>
        <p>Privacy Policy - Terms of Use - Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Checkout;