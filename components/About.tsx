'use client'

import { Target, Eye, Heart, Users, TrendingUp, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuously developing cutting-edge solutions to stay competitive in the evolving fintech landscape.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Operating with complete openness in all our dealings with customers, partners, and stakeholders.',
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description: 'Contributing to economic development and financial inclusion in the communities we serve.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Delivering exceptional value through user-friendly interfaces and seamless transaction processes.',
  },
]

const stats = [
  { value: '100%', label: 'Ghanaian Owned' },
  { value: '4+', label: 'Network Partners' },
  { value: '24/7', label: 'Support Available' },
  { value: '99.9%', label: 'Uptime Guarantee' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
              About Payglobe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Africa's
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-pink">
                Financial Future
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Payglobe Limited is a wholly Ghanaian-owned fintech company dedicated to delivering 
              secure, innovative, and inclusive digital financial solutions. Our experienced board 
              and management team comprise leading African digital finance experts with deep industry 
              insight and proven expertise.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We envision a future where financial services are accessible, affordable, and inclusive — 
              revolutionizing the way people send and receive money globally, making financial 
              transactions faster, cheaper, and more accessible for everyone.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-pink transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                A future where financial services are accessible, affordable, and inclusive — 
                revolutionizing the way people send and receive money globally, making financial 
                transactions faster, cheaper, and more accessible for everyone.
              </p>
            </div>
          </div>

          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                Empowering individuals and communities through secure, efficient, and accessible 
                financial transactions, leveraging innovative technology to break down borders 
                and barriers in Africa's financial ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
