import { FacebookIcon, InstagramIcon, Utensils } from "lucide-react";
import { navLinks } from '../data.js';

export default function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr_0.7fr]">
        <div>
          <a href="#home" className="flex items-center gap-3" aria-label="Royal Spice home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-maroon">
              <Utensils size={21} />
            </span>
            <span className="font-display text-2xl font-bold">Royal Spice</span>
          </a>
          <p className="mt-4 max-w-md leading-7 text-white/75">
            Authentic Indian recipes, graceful service, and a modern restaurant atmosphere made for memorable meals.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-gold">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-white/75 transition hover:text-gold">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-gold">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            {[Instagram, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#home"
                aria-label="Social media"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-maroon"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/65">
        &copy; 2026 Royal Spice Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
