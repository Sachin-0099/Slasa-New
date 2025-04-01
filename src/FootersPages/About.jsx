import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t, i18n } = useTranslation(); 
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hovered, setHovered] = useState(null);

  const handleSearch = () => {
    if (jobTitle.trim() !== "" || location.trim() !== "") {
      alert(`Searching for: ${jobTitle} in ${location}`);
    }
  };

  const cards = [
    {
      id: 1,
      title: "Teams",
      description: "Get to know Slasa's teams and their roles.",
      image: "Images/Exclusive29.jpeg",
      link: "#",
    },
    {
      id: 2,
      title: "Job Categories",
      description: "Find the right job for you at Slasa.",
      image: "Images/Exclusive27.jpeg",
      link: "#",
    },
    {
      id: 3,
      title: "Locations",
      description: "View Slasa's office locations worldwide.",
      image: "Images/Exclusive28.jpeg",
      link: "#",
    },
  ];

  return (
    <>
      {/* Fraud Warning Banner */}
      <div className="bg-[#3087d1] text-white text-center p-2 mt-10">
        {t("Slasa never asks for fees or deposits in any form during the recruitment process.")}
        <span className="underline cursor-pointer ml-1">{t("Click here")}</span> {t("to")}
        {t("learn more and safeguard yourself from potential frauds.")}
      </div>

      {/* Job Search Section */}
      <div className="bg-gray-900 text-white p-6 md:w-2/3 mx-auto rounded-lg mt-6">
  <h2 className="text-2xl font-bold mb-4">{t("Find Jobs")}</h2>
  <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-md gap-4">
    <input
      type="text"
      className="flex-1 p-3 outline-none text-black rounded-md mb-4 sm:mb-0"
      placeholder="Search jobs by title or keyword"
      value={jobTitle}
      onChange={(e) => setJobTitle(e.target.value)}
    />
   
    <button
      className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
      onClick={handleSearch}
    >
      <FaSearch />
    </button>
  </div>
</div>


      {/* Connection Section */}
      <div className="container mx-auto bg-gray-900 mt-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-lg shadow-lg">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            src="Images/Globe.avif"
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-[#3087d1] shadow-md"
          />
        </div>
        <div className="flex-1 text-white text-center md:text-left md:ml-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {t("Let’s Connect the world,")} <span className="text-[#3087d1]">{t("together")}</span>
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            {t("Join our team and help build the future of global connectivity.")}
          </p>
          <button className="mt-6 !bg-[#3087d1] text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
            {t("Read More")}
          </button>
        </div>
      </div>

      {/* Job Categories Section */}
      <div className="bg-gray-100 p-6 sm:p-10 mt-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white p-6 shadow-md rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 sm:h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <a
                href={card.link}
                className={`mt-4 inline-block text-blue-600 transition ${hovered === card.id ? "underline font-bold" : ""}`}
              >
                {t("Learn more →")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Careers;
