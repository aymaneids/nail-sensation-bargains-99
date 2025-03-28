
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">
              Last updated: June 15, 2023
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to Nail Salons Coupons. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website and 
              tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">The Data We Collect About You</h2>
            <p className="mb-4">
              Personal data, or personal information, means any information about an individual from which that person can 
              be identified. We may collect, use, store and transfer different kinds of personal data about you which we 
              have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
              </li>
              <li className="mb-2">
                <strong>Contact Data</strong> includes email address and telephone numbers.
              </li>
              <li className="mb-2">
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and 
                version, time zone setting and location, browser plug-in types and versions, operating system and platform, 
                and other technology on the devices you use to access this website.
              </li>
              <li className="mb-2">
                <strong>Usage Data</strong> includes information about how you use our website, products and services.
              </li>
              <li className="mb-2">
                <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us 
                and our third parties and your communication preferences.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Personal Data</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data 
              in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Where we need to perform the contract we are about to enter into or have entered into with you.
              </li>
              <li className="mb-2">
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and 
                fundamental rights do not override those interests.
              </li>
              <li className="mb-2">
                Where we need to comply with a legal obligation.
              </li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Your Legal Rights</h2>
            <p className="mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, 
              including the right to request access, correction, erasure, restriction, transfer, to object to processing, 
              to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <p className="mb-4">
              Email: privacy@nailsalonscoupons.com<br />
              Phone: (123) 456-7890<br />
              Address: 123 Beauty Street, New York, NY 10001
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
