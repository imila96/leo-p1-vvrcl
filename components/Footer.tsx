'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const footerLinkClass = 'text-[#b8bcc8] font-medium text-base leading-[150%] tracking-[-0.02em] hover:text-white transition block'
const footerHeadingClass = 'text-white font-semibold text-[20px] leading-[150%] tracking-[-0.02em] mb-4'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Handle subscribe
    }
  }

  return (
    <footer className="relative w-full bg-[#1a1f2e] pt-16 pb-12">
      <div className="mx-auto max-w-[1320px] px-14">
        {/* Main content - 5-column grid, first column wider, all headers same baseline, equal horizontal spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(300px,1.25fr)_1fr_1fr_1fr_1fr] gap-x-12 gap-y-10 lg:gap-x-16 items-start">
          {/* Left column - Brand: logo only (wordmark in asset), tagline, description, email+button, socials per SS1 */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/strug_logo_transparent.png"
              alt="Strug"
              width={240}
              height={66}
              className="h-[66px] w-auto object-contain object-left -mt-2"
            />
            <p className="text-[#c5c9d9] font-medium text-base leading-[150%] tracking-[-0.02em]">
              Your Work. Your Time. Your Money.
            </p>
            <p className="text-[#b8bcc8] font-medium text-base leading-[150%] tracking-[-0.02em] max-w-[310px]">
              We understand the struggle for individuals and businesses alike. That is why we are doing something about it.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-nowrap gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[37px] w-[205px] max-w-full rounded px-3 py-2 bg-white font-medium text-sm leading-[150%] tracking-[-0.02em] text-[#585858] placeholder:text-[#585858] focus:outline-none"
              />
              <button
                type="submit"
                className="h-[37px] flex-shrink-0 rounded px-3 py-2 bg-[#9ca3af] font-medium text-sm leading-[150%] tracking-[-0.02em] text-white hover:bg-[#a8adb8] transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                { href: '#', label: 'X', icon: '/images/x-icon.svg', w: 34, h: 34 },
                { href: '#', label: 'Instagram', icon: '/images/instagram-icon.svg', w: 34, h: 34 },
                { href: '#', label: 'LinkedIn', icon: '/images/ln-icon.svg', w: 34, h: 34 },
                { href: '#', label: 'YouTube', icon: '/images/youtube-icon.svg', w: 34, h: 34 },
              ].map(({ href, label, icon, w, h }) => (
                <Link key={label + href} href={href} className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:opacity-90 transition" aria-label={label}>
                  <Image src={icon} alt="" width={w} height={h} className="w-5 h-5 invert" />
                </Link>
              ))}
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:opacity-90 transition" aria-label="TikTok">
                <span className="text-[#374151] text-xl">♪</span>
              </Link>
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:opacity-90 transition" aria-label="Snapchat">
                <span className="text-[#374151] text-sm font-semibold">S</span>
              </Link>
            </div>
          </div>

          {/* Verticals */}
          <div className="flex flex-col">
            <h3 className={footerHeadingClass}>Verticals</h3>
            <ul className="space-y-2.5">
              {['E-Commerce', 'Rideshare', 'Media & Social', 'On-Demand', 'Videos and Streaming', 'Charity, fundraising', 'Food, Groceries', 'Freelancing Services'].map((label) => (
                <li key={label}>
                  <Link href="#" className={footerLinkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strug */}
          <div className="flex flex-col">
            <h3 className={footerHeadingClass}>Strug</h3>
            <ul className="space-y-2.5">
              {['About', 'Laissez-Faire', 'Contact Us', 'Help Center', 'Careers', 'Partnership Program', 'Corporate Partnerships', 'Vertical Requests', 'Pricing Structures'].map((label) => (
                <li key={label}>
                  <Link href="#" className={footerLinkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* View Help Center */}
          <div className="flex flex-col">
            <h3 className={footerHeadingClass}>View Help Center</h3>
            <ul className="space-y-2.5">
              {['Feedback', 'Complaints', 'Diversity, Inclusion', 'Sustainability', 'Legal Portal', 'Troubleshooting', 'Verification Badges', 'Withdrawals'].map((label) => (
                <li key={label}>
                  <Link href="#" className={footerLinkClass}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Press and Governance + Community - same baseline as other headers, balanced spacing */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h3 className={footerHeadingClass}>Press and Governance</h3>
              <ul className="space-y-2.5">
                {['Press Room', 'Media Kit', 'Announcements', 'Advertising On Strug'].map((label) => (
                  <li key={label}>
                    <Link href="#" className={footerLinkClass}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className={footerHeadingClass}>Community</h3>
              <ul className="space-y-2.5">
                {['Research & Analysis', 'Social Hub', 'Reviews & Ratings'].map((label) => (
                  <li key={label}>
                    <Link href="#" className={footerLinkClass}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator - SS1 thin light grey line */}
        <div className="mt-10 mb-6 h-0 w-full border-t border-white/[0.16]" style={{ borderColor: 'rgba(251,253,255,0.16)' }} />

        {/* Bottom: copyright + legal - light grey, vertical bar separators per SS1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <p className="text-[#9ca3af] font-medium text-base leading-6 tracking-[-0.02em]">
            ©2024 Strug Inc. All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-x-2 text-[#9ca3af] font-medium text-base leading-6 tracking-[-0.02em]">
            <Link href="#" className="hover:text-white transition">
              Privacy & Policy
            </Link>
            <span className="text-[#9ca3af]">|</span>
            <Link href="#" className="hover:text-white transition">
              Terms & Condition
            </Link>
            <span className="text-[#9ca3af]">|</span>
            <Link href="#" className="hover:text-white transition">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
