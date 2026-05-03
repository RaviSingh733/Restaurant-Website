import { useEffect, useState } from 'react';
import { Menu, X, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Royal Spice home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-maroon text-gold shadow-gold">
            <Utensils size={21} />
          </span>
          <span className="font-display text-2xl font-bold text-maroon">Royal Spice</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-spice/75 transition hover:text-maroon"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#reservation"
          className="hidden rounded-full bg-maroon px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-spice lg:inline-flex"
        >
          Reserve Now
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-maroon/15 bg-white text-maroon shadow-sm lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-maroon/10 bg-white lg:hidden"
          >
            <div className="section-shell grid gap-2 py-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-semibold text-spice transition hover:bg-cream hover:text-maroon"
                >
                  {link}
                </a>
              ))}
              <a
                href="#reservation"
                onClick={() => setOpen(false)}
                className="rounded-md bg-maroon px-3 py-3 font-semibold text-white transition hover:bg-spice"
              >
                Reserve Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
