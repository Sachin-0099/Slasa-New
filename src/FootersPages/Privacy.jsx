import React from 'react';
import Footer from '../Components/Footer';

const Privacy = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-[#3087d1] text-center sm:text-left'>Privacy Policy</h1>

      <section className='mb-6'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>1. Introduction</h2>
        <p className='text-black mb-4'>
  Welcome to Slasa! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and
  safeguard your personal information when you visit our website or use our services.
</p>
<p className='text-black'>
  By accessing or using Slasa, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain
  from using our services.
</p>

      </section>

      <section className='mb-6'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>2. Information We Collect</h2>
        <h3 className='text-xl sm:text-2xl font-semibold mt-4 text-black'>2.1 Personal Information</h3>
        <ul className='list-disc pl-6 text-black'>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Shipping and billing address</li>
          <li>Payment details (processed securely via third-party payment gateways)</li>
        </ul>

        <h3 className='text-xl sm:text-2xl font-semibold mt-4 text-black'>2.2 Non-Personal Information</h3>
        <ul className='list-disc pl-6 text-black'>
          <li>Browser type</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Usage data (e.g., pages visited, time spent on the website)</li>
        </ul>

        <h3 className='text-xl sm:text-2xl font-semibold mt-4 text-black'>2.3 Cookies and Tracking Technologies</h3>
        <p className='text-black'>
          We use cookies, web beacons, and similar technologies to enhance user experience, analyze traffic, and personalize
          content. You can manage cookie settings in your browser.
        </p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>3. How We Use Your Information</h2>
        <ul className='list-disc pl-6 text-black'>
          <li>Processing and managing orders</li>
          <li>Providing customer support</li>
          <li>Improving website functionality and user experience</li>
          <li>Sending promotional emails (only if you opt-in)</li>
          <li>Ensuring security and preventing fraud</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className='mb-6 text-black'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>4. How We Share Your Information</h2>
        <ul className='list-disc pl-6 text-black'>
          <li>Service Providers – Third-party vendors (e.g., payment processors, delivery services) to fulfill orders.</li>
          <li>Legal Authorities – If required by law, or to protect our rights and security.</li>
          <li>Business Transfers – If Slasa undergoes a merger, acquisition, or asset sale.</li>
        </ul>
      </section>

      <section className='mb-6 text-black'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>5. Data Security</h2>
        <ul className='list-disc pl-6 text-black'>
          <li>🔒 Encryption of sensitive data</li>
          <li>🔒 Secure payment processing via trusted third-party providers</li>
          <li>🔒 Limited access to personal data within our team</li>
        </ul>
        <p>
          However, no system is 100% secure, and we cannot guarantee absolute protection.
        </p>
      </section>

      <section className='mb-6 text-black'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>6. Your Rights</h2>
        <ul className='list-disc pl-6 text-black'>
          <li>✔ Access & Review – Request a copy of your personal data.</li>
          <li>✔ Correction – Update inaccurate or incomplete information.</li>
          <li>✔ Deletion – Request deletion of your personal data (subject to legal obligations).</li>
          <li>✔ Opt-Out – Unsubscribe from promotional emails at any time.</li>
        </ul>
        <p>To exercise your rights, contact us at <strong><a href="/">support@slasa.com</a></strong>.</p>
      </section>

      <section className='mb-6 text-black'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>7. Third-Party Links</h2>
        <p>Slasa may contain links to third-party websites. We are not responsible for their content, privacy policies, or practices.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>8. Changes to This Privacy Policy</h2>
        <p className='text-black'>
          We may update this policy periodically. Changes will be posted on this page, and your continued use of Slasa means you
          accept the revised terms.
        </p>
        <p className='text-black'><strong>Last updated:</strong> [Date]</p>
      </section>

      <section className='mb-6 text-black'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-2 text-black'>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, reach out to us at:</p>
        <ul className='list-disc pl-6 text-black'>
          <li>📧 <strong>Email:</strong> support@slasa.com</li>
          <li>🌐 <strong>Website:</strong> <a href="https://slasa-e-commerce.vercel.app/">https://slasa-e-commerce.vercel.app/</a></li>
        </ul>
      </section>
      
      <Footer />
    </div>
  );
};

export default Privacy;
