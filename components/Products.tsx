'use client'

import { 
  Smartphone, 
  Building2, 
  CreditCard, 
  Globe, 
  Users, 
  QrCode,
  Wallet,
  ArrowRightLeft
} from 'lucide-react'

const products = [
  {
    icon: Smartphone,
    title: 'Mobile Money Aggregation',
    description: 'Unified gateway integrating MTN MoMo, Telecash, G-Money, and AT Cash for seamless electronic transactions.',
    color: 'from-yellow-400 to-orange-500',
    features: ['Single API Integration', 'Multi-Network Support', 'Real-time Processing'],
  },
  {
    icon: Wallet,
    title: 'Mobile Payment & Collections',
    description: 'Customized payment solutions for merchants and financial institutions with USSD, QR Codes, and mobile app support.',
    color: 'from-primary-400 to-primary-600',
    features: ['USSD Payments', 'QR Code Support', 'Custom Solutions'],
  },
  {
    icon: Building2,
    title: 'Mobile Banking',
    description: 'Digital banking platform enabling balance inquiries, transfers, airtime top-ups, and bill payments.',
    color: 'from-blue-400 to-blue-600',
    features: ['Balance Inquiries', 'Fund Transfers', 'Bill Payments'],
  },
  {
    icon: Users,
    title: 'Agency Banking',
    description: 'Branchless banking with real-time digital enablement, mobile e-KYC, and instant account activation.',
    color: 'from-green-400 to-emerald-600',
    features: ['Mobile e-KYC', 'Real-time Processing', 'Agent Network'],
  },
  {
    icon: Globe,
    title: 'SikaRemit - Remittance',
    description: 'Cross-border money transfer solution with instant delivery to bank accounts or mobile wallets.',
    color: 'from-accent-pink to-primary-500',
    features: ['Instant Transfers', 'Multi-Currency', 'Bank & Wallet Delivery'],
    featured: true,
  },
  {
    icon: ArrowRightLeft,
    title: 'USSD Hosting',
    description: 'Robust, scalable USSD gateway infrastructure with full NCA short code acquisition support.',
    color: 'from-cyan-400 to-blue-500',
    features: ['Short Code Acquisition', 'MNO Integration', 'Scalable Infrastructure'],
  },
  {
    icon: QrCode,
    title: 'SoftPOS Technology',
    description: 'Transform smartphones into POS terminals supporting Visa, Mastercard, and mobile money payments.',
    color: 'from-purple-400 to-indigo-600',
    features: ['NFC Payments', 'PIN Security', 'Digital Receipts'],
  },
  {
    icon: CreditCard,
    title: 'Merchant Payments',
    description: 'Comprehensive payment acceptance solutions for businesses of all sizes with real-time analytics.',
    color: 'from-rose-400 to-pink-600',
    features: ['Multi-Channel', 'Real-time Analytics', 'Low Fees'],
  },
]

export default function Products() {
  return (
    <section id="products" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive Financial
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-pink">
              Solutions for Africa
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            From mobile money aggregation to cross-border remittances, we provide end-to-end 
            digital financial infrastructure for businesses and individuals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                product.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-pink text-white text-xs font-semibold rounded-full">
                  Featured Product
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
