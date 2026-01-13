'use client'

import Link from 'next/link'
import { 
  Smartphone, 
  Globe, 
  Zap, 
  Shield, 
  ArrowRight,
  Download,
  CheckCircle,
  Wallet,
  CreditCard,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Transfers',
    description: 'Send money instantly to bank accounts or mobile wallets across Africa.',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Your transactions are protected with enterprise-level encryption.',
  },
  {
    icon: Globe,
    title: 'Cross-Border',
    description: 'Seamless international transfers with competitive exchange rates.',
  },
  {
    icon: Wallet,
    title: 'Multi-Wallet',
    description: 'Manage multiple currencies in one secure digital wallet.',
  },
]

const appFeatures = [
  'Send money locally & internationally',
  'Buy airtime & data bundles',
  'Pay bills instantly',
  'QR code payments',
  'Real-time transaction tracking',
  'Biometric security',
]

export default function SikaRemit() {
  return (
    <section id="sikaremit" className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-4">
            Our Flagship Product
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-accent-pink to-accent-cyan">
              SikaRemit
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            The innovative cross-border money transfer solution powering seamless 
            remittances across Africa and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-72 md:w-80">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gray-950 rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 pt-12">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-white/80 text-sm">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 border-2 border-white/80 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                        <Globe className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-white text-xl font-bold">SikaRemit</h3>
                      <p className="text-white/70 text-sm">Send Money Globally</p>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                      <p className="text-white/70 text-sm mb-1">Total Balance</p>
                      <p className="text-white text-3xl font-bold">GHS 5,420.00</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { icon: Wallet, label: 'Send' },
                        { icon: Download, label: 'Receive' },
                        { icon: CreditCard, label: 'Cards' },
                        { icon: Users, label: 'Bills' },
                      ].map((action, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-1">
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white/80 text-xs">{action.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="bg-white p-4">
                    <p className="text-gray-500 text-xs mb-2">Recent Transactions</p>
                    {[
                      { name: 'John Mensah', amount: '-GHS 500', type: 'send' },
                      { name: 'MTN Airtime', amount: '-GHS 50', type: 'bill' },
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-gray-500" />
                          </div>
                          <span className="text-gray-800 font-medium text-sm">{tx.name}</span>
                        </div>
                        <span className="text-red-500 font-semibold text-sm">{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-8 top-20 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">Transfer Complete</p>
                    <p className="text-gray-500 text-xs">GHS 1,000 sent</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-32 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold text-sm">Instant Delivery</p>
                    <p className="text-gray-500 text-xs">&lt; 30 seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Future of Money Transfer is Here
            </h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              SikaRemit bridges global remittance channels with local payment ecosystems, 
              supporting financial inclusion and strengthening digital payments infrastructure 
              across Africa.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Features List */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h4 className="text-white font-semibold mb-4">App Features</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://play.google.com/store"
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </Link>

              <Link
                href="https://apps.apple.com"
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </Link>

              <Link
                href="https://sikaremit.com"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-pink text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Visit sikaremit.com</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
