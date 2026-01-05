// src/pages/Legal/Terms.jsx
import React from 'react';
import { Shield, FileText, CheckCircle } from 'lucide-react';
import Footer from '../../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Terms of Service</h1>
              <p className="text-gray-300 mt-2">Last updated: January 3, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gray-800/30 rounded-2xl p-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using SkyReti Educore, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold mb-6">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily use SkyReti Educore for personal or institutional purposes. This is the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-2xl font-bold mb-6">3. User Responsibilities</h2>
              <ul className="space-y-3 mb-6">
                {[
                  'Provide accurate registration information',
                  'Maintain security of your account',
                  'Notify us of any security breaches',
                  'Use the service in compliance with laws'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-6">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                The platform and its original content, features, and functionality are owned by SkyReti Educore and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold mb-6">5. Termination</h2>
              <p className="text-gray-300 mb-6">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl mt-8">
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-blue-400 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                    <p className="text-gray-300">
                      If you have any questions about these Terms, please contact us at{' '}
                      <a href="mailto:legal@skyretieducore.com" className="text-blue-400 hover:text-blue-300">
                        legal@skyretieducore.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;


