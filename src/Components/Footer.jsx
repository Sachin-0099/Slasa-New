import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
   const { t, i18n } = useTranslation(); 
  return (
    <footer className="bg-gray-100 text-gray-700 px-2 ">
      {/* Subscription & App Download Section */}
      <div className="max-w-7xl mx-auto px-0 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-300">
        {/* Subscription Section */}
        <div>
          <h3 className="font-semibold text-xl mb-2">
           {t("Subscribe to our awesome emails.")}
          </h3>
          <p className="text-gray-500 mb-4">
          {t('Get our latest offers and news straight in your inbox.')}
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder={t("Please enter an email address")}
              className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="!bg-[#3087d1] text-white px-6 py-3 rounded-r-lg">
            {t("Subscribe")}
            </button>
          </div>
        </div>

       {/* Download Our Apps Section */}
<div className="px-4 md:px-200 lg:px-50 ">
  <h3 className="font-semibold text-xl mb-2 text-center md:text-left">
  {t("Download our apps")}
  </h3>
  <p className="text-gray-500 mb-4 text-center md:text-left">
  {t("Shop our products and offers on-the-go.")}
  </p>
  <div className="flex flex-wrap justify-center md:justify-start space-x-4 ">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Google Play"
      className="w-32 md:w-36"
    />
   
  </div>
</div>

      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-300">
        {/* Customer Service */}
        <div>
          <h4 className="font-semibold text-lg mb-5">{t("Customer Service")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contactus" className="hover:text-gray-900">
               {t("Contact Us")}
              </a>
            </li>
            <li>
              <a href="/track" className="hover:text-gray-900">
              {t("Track Order")}
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-gray-900">
               {t('Returns & Refunds')}
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-900">
            {t("FAQs")}
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-semibold text-lg mb-5">{t("About Us")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/OurStory" className="hover:text-gray-900">
              {t("Our Story")}
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900">
               {t("About")}
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-gray-900">
             {t("Careers")}
              </a>
            </li>
            <li>
              <a href="/store-locator" className="hover:text-gray-900">
               {t('Store Locator')}
              </a>
            </li>
            <li>
              <a href="press-media" className="hover:text-gray-900">
               {t("Press & Media")}
              </a>
            </li>
          </ul>
        </div>

        {/* More Information */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t("More Information")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy" className="hover:text-gray-900">
               {t('Privacy Policy')}
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-900">
                {t("Terms & Conditions")}
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-gray-900">
               {t("Shipping Policy")}
              </a>
            </li>
            <li>
              <a href="/sitemap" className="hover:text-gray-900">
             {t("Sitemap")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-5">{t("Services")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/printing" className="hover:text-gray-900">
               {t("Acrylic")}
              </a>
            </li>
            <li>
              <a href="/photography" className="hover:text-gray-900">
               {t("Photgraphy and Videogrpahy")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-5">{t("Consumer Policy")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/cancellation" className="hover:text-gray-900">
               {t("Cancellation & Returns")}
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-900">
              {t("Terms & Conditions")}
              </a>
            </li>
            <li>
              <a href="/security" className="hover:text-gray-900">
              {t("Security")}
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-900">
               {t("privacy")}
              </a>
            </li>
            <li>
              <a href="/sitemap" className="hover:text-gray-900">
              {t("Sitemap")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-5">{t("Help")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/payments" className="hover:text-gray-900">
               {t("Payments")}
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-gray-900">
             {t("Shipping")}
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-900">
               {t("FAQ")}
              </a>
            </li>
            <li>
              <a href="/cancellation" className="hover:text-gray-900">
                {t("Cancellation and Returns")}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Payment */}
        <div>
          <h4 className="font-semibold text-lg mb-3">{t("Follow Us")}</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-xl">
              <FaYoutube />
            </a>
          </div>
          <h4 className="font-semibold text-lg mt-6 mb-3">{t("We Accept")}</h4>
          <div className="flex space-x-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
              alt="MasterCard"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-8"
            />
          </div>
        </div>
      </div>

      {/* Contact & Copyright */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <img
            src="Images/Untitled design.svg"
            alt="Slasa"
            className="w-32 "
          />
          <p className="text-gray-500 text-sm">
            {t("Terms & Conditions - Privacy Policy")}
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t("Slasa. All Rights Reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
