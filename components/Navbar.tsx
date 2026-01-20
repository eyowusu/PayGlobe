'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Products', href: '#products', hasDropdown: true },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'SikaRemit', href: '#sikaremit' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/payglobe-logo.jpeg" 
              alt="Payglobe Logo" 
              className="w-40 h-20 rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className={`font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Contact Sales
            </Link>
            <Link
              href="https://sikaremit.com"
              target="_blank"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
            >
              Try SikaRemit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 dark:text-gray-200 font-medium hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-3">
                <Link
                  href="#contact"
                  className="block text-gray-700 dark:text-gray-200 font-medium"
                >
                  Contact Sales
                </Link>
                <Link
                  href="https://sikaremit.com"
                  target="_blank"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full"
                >
                  Try SikaRemit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
