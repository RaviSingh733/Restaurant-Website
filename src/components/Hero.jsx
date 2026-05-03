import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { images } from '../data.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,247,234,0.94) 0%, rgba(255,247,234,0.78) 42%, rgba(122,31,43,0.26) 100%), url(${images.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="section-shell relative z-10 grid items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Premium Indian Dining</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-tight text-maroon sm:text-6xl lg:text-7xl">
            Experience the Royal Taste of India.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-spice/80 sm:text-xl">
            Fresh spices, authentic recipes, and a warm dining experience crafted for families and food lovers.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-7 py-4 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-spice"
            >
              View Menu <ArrowRight size={19} />
            </a>
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/20 bg-white/90 px-7 py-4 font-bold text-maroon shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:text-spice"
            >
              <CalendarCheck size={19} /> Book a Table
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="hidden justify-end lg:flex"
        >
          <div className="max-w-sm rounded-md border border-white/70 bg-white/82 p-6 shadow-soft backdrop-blur">
            <p className="font-display text-3xl font-bold text-maroon">Today's Royal Platter</p>
            <p className="mt-3 leading-7 text-spice/75">
              A curated feast of fragrant biryani, creamy curry, smoky kebabs, fresh naan, and saffron dessert.
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-maroon/10 pt-5">
              <span className="font-bold text-spice">From ₹699</span>
              <span className="rounded-full bg-saffron/15 px-4 py-2 text-sm font-bold text-maroon">Chef Pick</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
