'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-[#9a3eaa] py-3.5 px-5 flex items-center justify-center relative z-[1001]">
        <div className="flex items-center gap-5 flex-wrap">
          <span className="text-white text-base">
            GPT-Image-15 Available Now
          </span>
          <Link href="#" className="flex items-center gap-1.5">
            <span className="text-white text-base">→</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full relative z-[1001]">
        <div className="container-custom">
          <div className="flex items-center justify-between py-[15px] gap-8">
            {/* Logo */}
            <Link href="/" className="relative z-[1001] flex-shrink-0 w-[175px]">
              <Image
                src="/images/leonardo-logo-white-fix.svg"
                alt="Index 101"
                width={175}
                height={44.58}
                className="w-full h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 max-w-[750px]">
              <div className="flex items-center gap-6">
                {/* Features Dropdown */}
                <div className="relative group">
                  <button className="text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition">
                    Features
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button className="text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition">
                    Solutions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Learn Dropdown */}
                <div className="relative group">
                  <button className="text-white text-sm font-medium flex items-center gap-2 hover:opacity-80 transition">
                    Learn
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <Link href="#" className="text-white text-sm font-medium hover:opacity-80 transition">
                  For Teams
                </Link>

                <Link href="#" className="text-white text-sm font-medium hover:opacity-80 transition">
                  For Developers
                </Link>

                <Link href="#" className="text-white text-sm font-medium hover:opacity-80 transition">
                  Pricing
                </Link>

                <Link href="#" className="text-white text-sm font-medium hover:opacity-80 transition">
                  Contact
                </Link>
              </div>
            </nav>

            {/* Launch App Button */}
            <div className="hidden lg:flex items-center gap-4 z-[1001]">
              <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-xl hover:shadow-lg transition-all">
                Launch App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center p-2 border border-[#171b29] bg-[#090d14] rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#18181b] z-[1000] overflow-y-auto pt-20 px-6 pb-6">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                Features
              </Link>
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                Solutions
              </Link>
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                Learn
              </Link>
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                For Teams
              </Link>
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                For Developers
              </Link>
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                Pricing
              </Link>
              <Link href="#" className="text-white text-base py-4 border-b border-[#171b29] hover:opacity-80">
                Contact
              </Link>
              <button className="mt-4 px-5 py-3 bg-white text-black text-base font-semibold rounded-xl w-full">
                Launch App
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
