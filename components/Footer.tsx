import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0b0f17] pt-16 pb-8 md:pb-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-[#242c3e]">
          {/* Column 1 - Solutions */}
          <div className="w-full md:text-left text-center">
            <h3 className="text-white text-[22px] font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Blueprints
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Image Generator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Art Generator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Video Generator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Transparent PNG Generator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Marketing Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Graphic Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Print on Demand
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Interior Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  AI Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - About */}
          <div className="w-full md:text-left text-center">
            <h3 className="text-white text-[22px] font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Index 101 Creator Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#9094a6] text-[15px] hover:text-white transition">
                  Index 101 Imagination Fund
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Get the App */}
          <div className="w-full md:text-left text-center">
            <h3 className="text-white text-[22px] font-semibold mb-6">Get the App</h3>
            <div className="space-y-4">
              <Link href="#" className="block">
                <Image
                  src="/images/btn-appstore.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="hover:opacity-85 transition mx-auto md:mx-0"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src="/images/btn-g-play.svg"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="hover:opacity-85 transition mx-auto md:mx-0"
                />
              </Link>
            </div>
          </div>

          {/* Column 4 - Stay Tuned */}
          <div className="w-full md:text-left text-center">
            <h3 className="text-white text-[22px] font-semibold mb-6">Stay Tuned</h3>
            <div className="flex gap-6 justify-center md:justify-start">
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/discord-icon.svg" alt="Discord" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/x-icon.svg" alt="X" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/youtube-icon.svg" alt="YouTube" width={24} height={24} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition">
                <Image src="/images/ln-icon.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Left Side - Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-3">
              <Image
                src="/images/leonardo-logo-white-fix.svg"
                alt="Index 101"
                width={140}
                height={35}
                className="h-auto"
              />
            </Link>
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-base mb-1">Index 101 Interactive Pty Ltd</p>
              <p className="text-white font-semibold text-base">ABN: 56 662 209 485</p>
            </div>
          </div>

          {/* Center - Certifications */}
          <div className="flex items-center gap-4">
            <Image src="/images/gdpr_white_v.png.webp" alt="GDPR" width={75} height={75} className="h-auto" />
            <Image src="/images/gdpr_white_v.png.webp" alt="SOC2" width={75} height={75} className="h-auto" />
            <Image src="/images/gdpr_white_v.png.webp" alt="Certified" width={75} height={75} className="h-auto" />
          </div>

          {/* Right Side - Compliance Text */}
          <div className="max-w-[445px] text-center md:text-left">
            <p className="text-[#9094a6] text-xs leading-4">
              Index 101 is fully SOC 2 Type I and Type II accredited, demonstrating our commitment to the highest standards of security, availability, and data integrity. This ensures our customers can trust that their data is handled with enterprise-grade protection and compliance.
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-5 mt-8 border-t border-[#242c3e] flex flex-col md:flex-row items-center justify-between gap-4 text-[#9094a6] text-sm">
          <p>© 2026 All Rights Reserved. Index 101 Interactive Pty Ltd®</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0">
            <Link href="#" className="px-4.5 hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="px-4.5 border-l border-[#242c3e] hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="px-4.5 border-l border-[#242c3e] hover:text-white transition">Cookie Policy</Link>
            <Link href="#" className="px-4.5 border-l border-[#242c3e] hover:text-white transition">DPA</Link>
            <Link href="#" className="px-4.5 border-l border-[#242c3e] hover:text-white transition">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
