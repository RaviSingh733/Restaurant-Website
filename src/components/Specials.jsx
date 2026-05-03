import { motion } from 'framer-motion';
import { BadgeCheck, Flame } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { specials } from '../data.js';

export default function Specials() {
  return (
    <section id="specials" className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Chef's Specials"
            title="Favorites that guests come back for."
            text="A balanced selection of royal classics, smoky tandoor plates, regional comfort food, and indulgent Indian sweets."
          />
          <div className="rounded-md border border-gold/30 bg-cream p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-maroon text-gold">
                <Flame size={22} />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-maroon">Chef's Special Thali</h3>
                <p className="mt-2 leading-7 text-spice/75">
                  A generous Indian platter with sabzi, dal, rice, naan, pickle, salad, papad, and dessert.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex items-center gap-4 rounded-md border border-maroon/10 bg-white p-5 shadow-sm transition hover:border-gold/50 hover:shadow-soft"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-saffron/15 text-maroon">
                <BadgeCheck size={20} />
              </span>
              <span className="font-display text-xl font-bold text-spice">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
