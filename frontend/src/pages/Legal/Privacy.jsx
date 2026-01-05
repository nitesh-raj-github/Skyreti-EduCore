// src/pages/Legal/Privacy.jsx
import React from 'react';
import { Lock, Eye, Database } from 'lucide-react';
import Footer from '../../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">Privacy Policy</h1>
              <p className="text-gray-300 mt-2">How we protect and use your data</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gray-800/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <Eye className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Data We Collect</h3>
                <p className="text-gray-400">
                  We collect information you provide directly, usage data, and device information to improve our services.
                </p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl">
                <Database className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">How We Use Data</h3>
                <p className="text-gray-400">
                  To provide and maintain our service, notify you about changes, and improve user experience.
                </p>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.
              </p>

              <h2 className="text-2xl font-bold mb-6">Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal data.
              </p>

              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-300">
                For privacy-related questions: {' '}
                <a href="mailto:privacy@skyretieducore.com" className="text-green-400 hover:text-green-300">
                  privacy@skyretieducore.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;


