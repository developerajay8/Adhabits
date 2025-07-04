import React from 'react';
import Image from 'next/image';
import { CheckCircle, Mail, Phone, Calendar, Shield, AlertCircle, CreditCard, RefreshCw, FileText } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-slate-800 rounded-sm transform rotate-45 -translate-x-1 -translate-y-1"></div>
              </div>
              <h1 className="text-2xl font-bold text-white">Adhabits</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Terms & Conditions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service Agreement
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              For Affiliate Ad Services & Landing Pages
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4 text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: July 2025</span>
            </div>
          </div>

          {/* Terms Content */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-8">
                <p className="text-slate-300 text-lg leading-relaxed">
                  By using our services, you agree to the following terms:
                </p>
              </div>

              {/* Term 1 */}
              <div className="mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">1. Service Scope</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      We provide affiliate ad campaign setup and landing page creation services (via Systeme.io).
                    </p>
                  </div>
                </div>
              </div>

              {/* Term 2 */}
              <div className="mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">2. Charges & Refunds</h3>
                    <div className="space-y-3">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        All landing page projects have a one-time setup charge.
                      </p>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        <strong className="text-white">If a client requests a refund:</strong>
                      </p>
                      <ul className="list-disc list-inside text-slate-300 text-lg leading-relaxed ml-4 space-y-2">
                        <li>Landing page charges will be deducted first.</li>
                        <li>For services already rendered, charges will be calculated based on the number of working days or completed milestones.</li>
                        <li>Remaining balance (if any) will be refunded at 50% of the leftover amount.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Term 3 */}
              <div className="mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Full payment must be completed before campaign launch or landing page handover.
                    </p>
                  </div>
                </div>
              </div>

              {/* Term 4 */}
              <div className="mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      We do not guarantee any specific financial results from ad campaigns. Leads and sales depend on various factors like niche, ad spend, and market conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Term 5 */}
              <div className="mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">5. Changes to Terms</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      We reserve the right to update these terms anytime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Contact for Disputes or Queries
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-slate-400 font-medium">Email</span>
                    </div>
                    <a 
                      href="mailto:adhabits5@gmail.com"
                      className="text-white text-lg hover:text-blue-400 transition-colors"
                    >
                      adhabits5@gmail.com
                    </a>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="text-slate-400 font-medium">Phone</span>
                    </div>
                    <a 
                      href="tel:9743140915"
                      className="text-white text-lg hover:text-green-400 transition-colors"
                    >
                      9743140915
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-slate-800 rounded-sm transform rotate-45 -translate-x-0.5 -translate-y-0.5"></div>
              </div>
              <span className="text-white font-semibold">Adhabits</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Adhabits. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;