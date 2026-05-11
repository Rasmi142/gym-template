import Link from "next/link";
import { businessConfig } from "@/config/business";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xl">A</span>
            </div>
            <span className="text-xl font-black uppercase tracking-tighter">
              {businessConfig.name}
            </span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {businessConfig.description}
          </p>
          <div className="flex gap-4">
            <a href={businessConfig.socials.instagram} className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={businessConfig.socials.facebook} className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href={businessConfig.socials.youtube} className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="/#pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Services</h4>
          <ul className="space-y-4 text-muted-foreground">
            {businessConfig.services.slice(0, 4).map((service) => (
              <li key={service.id}>
                <Link href="/services" className="hover:text-accent transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm">{businessConfig.contact.address}</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm">{businessConfig.contact.phone}</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm">{businessConfig.contact.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
        <p>Built for Local Businesses in Tamil Nadu</p>
      </div>
    </footer>
  );
}
