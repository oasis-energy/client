import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl shadow-sm inline-flex">
                <Image 
                  src="/brand-icon.svg" 
                  alt="Oasis Energy Icon" 
                  width={40} 
                  height={40} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-3xl font-extrabold tracking-tight font-heading">
                  <span className="text-white">Oasis</span> <span className="text-emerald-400">Energy</span>
                </span>
                <span className="hidden sm:block text-[0.75rem] md:text-[0.85rem] font-medium text-white/70 -mt-0.5 tracking-wide">
                  Let's grab the free energy
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-xs mt-4">
              Premium, scalable, and reliable renewable energy solutions powering the future of industry and community in Rajasthan.
            </p>
            <div className="flex items-center space-x-4 pt-2 text-sm font-medium">
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Twitter
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-accent transition-colors">Energy Solutions</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-accent transition-colors">Partner With Us</Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link href="/products/avatar" className="hover:text-accent transition-colors">Avatar Wind Turbines</Link>
              </li>
              <li>
                <Link href="/solutions/industrial" className="hover:text-accent transition-colors">Industrial Energy</Link>
              </li>
              <li>
                <Link href="/solutions/residential" className="hover:text-accent transition-colors">Large Residential</Link>
              </li>
              <li>
                <Link href="/solutions/microgrids" className="hover:text-accent transition-colors">Microgrids</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span>123 Energy Park Road, Industrial Area,<br />Jaipur, Rajasthan 302001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@oasisenergy.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/50 text-center sm:text-left">
          <p>&copy; {currentYear} Oasis Energy. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
