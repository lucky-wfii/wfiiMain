import Link from "next/link"
import { Mail, Phone, ExternalLink } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-blue-950 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="wfii-logo.png"
                alt="WFII Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-blue-950 leading-relaxed max-w-md">
                WFII is more than a platform – it's a movement to redefine how startups and businesses grow, connect,
                and scale in a globally connected innovation economy.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-950">
                <Phone className="w-5 h-5 text-[#FF4500]" />
                <span>+91 84390 56300</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-950">
                <Mail className="w-5 h-5 text-[#FF6347]" />
                <span>outreach@wfii.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-blue-950 hover:text-[#FF4500] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-blue-950 hover:text-[#FF6347] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#hall-of-fame" className="text-blue-950 hover:text-[#FF6347] transition-colors">
                  Hall of Fame
                </Link>
              </li>
              <li>
                 <Link href="#event-activity" className="text-blue-950 hover:text-[#FF6347] transition-colors">
                  Events & Activities
                </Link>
              </li>
              <li>
                <Link href="#verticals" className="text-blue-950 hover:text-[#FF4500] transition-colors">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-950 hover:text-[#FF6347] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Sectors */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#FF6347] to-[#FF4500] bg-clip-text">
              Core Sectors
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-950">Deep Tech</li>
              <li className="text-blue-950">Agri-Tech</li>
              <li className="text-blue-950">EV & Robotics</li>
              <li className="text-blue-950">Medical & Healthcare</li>
              <li className="text-blue-950">Ed-Tech</li>
              <li className="text-blue-950">Defence</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-blue-950">© 2024 WFII. All rights reserved. | Connecting Innovation with Opportunities</p>
        </div>
      </div>
    </footer>
  )
}
