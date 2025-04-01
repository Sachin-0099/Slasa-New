import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../Components/Footer";

const Returns = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const returnSteps = [
    { title: "Fill out return slip", content: "You will receive a return slip via email once your products are delivered. Ensure to print and include it with your return package." },
    { title: "Visit store", content: "Locate your nearest store and bring your items in their original packaging along with your return slip and invoice." },
    { title: "Hand over return", content: "An authorized store representative will verify your return items and issue an acknowledgment receipt." },
    { title: "Receive refund", content: "Refunds will be processed based on your original payment method. Cash payments may receive cash refunds or store credits, while card and PayPal payments will be refunded accordingly." }
  ];

  return (
    <>
      <div className="p-5 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-black">Returns</h1>

        <p className="text-gray-500 mb-6">Here's how the returns process works.</p>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row px-5 md:px-10 mt-6 md:mt-10 gap-6">
          <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
  Returns should be easy. We couldn’t agree more.
</h2>

            <p className="text-base md:text-lg text-gray-500 pt-4">
              Let's show you how to return your products in three easy ways.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Images/Exclusive.jpeg"
              alt="Returns"
              className="w-full md:w-2/3 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Floating Box for Returns Policy */}
        <div className="bg-[#3087d1] text-white p-4 rounded-lg shadow-lg w-full sm:w-[400px] mt-10 cursor-pointer mx-auto md:absolute md:bottom-20 md:left-10">
          <p>Some products are non-returnable. Check our Returns Policy for details.</p>
        </div>

        {/* Return Steps */}
        <div className="mt-10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
  Return Steps
</h2>



          {returnSteps.map((step, index) => (
            <div
              key={index}
              className="mb-4 bg-[#3087d1] p-4 rounded-md cursor-pointer shadow-sm"
              onClick={() => toggleSection(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-white">{step.title}</p>
                {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openSection === index && (
                <p className="mt-2 !text-white">{step.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Return Methods Sections */}
        <div className="container mx-auto p-5 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6">1. Return to a store</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Fill out your return slip", text: "This will be emailed to you after your products are delivered." },
              { title: "Visit your nearest store", text: "Wrap your household products in their original packaging and bring them with your return slip and invoice to any store." },
              { title: "Hand over your return", text: "An authorized staff member will take your package and hand you an acknowledgment receipt." },
              { title: "Receive your refund", text: "If you’ve paid by cash, you can ask for a cash refund or a Credit Note." }
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-black">{item.title}</h3>

                <p className="text-black">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-10 mb-6">2. Request a return online</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Request your return", text: "Go to Order History in My Account, select the products you want to return and place a return request." },
              { title: "Box up your products", text: "Wrap and seal your products in their original packaging or call us if you no longer have it." },
              { title: "Hand over your return", text: "Our courier partner may take 3-5 business days to pick it up." },
              { title: "Receive your refund", text: "We’ll check your returns, and credit your refund to your card, bank account, or PayPal account in 4-15 days." }
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Returns;
 