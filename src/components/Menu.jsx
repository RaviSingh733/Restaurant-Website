import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { menuItems } from '../data.js';

export default function Menu() {
  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Signature Menu"
          title="A complete Indian dining journey."
          text="Explore starters, curries, biryanis, breads, desserts, and cooling beverages prepared for both comfort and celebration."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-md bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-saffron/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
                    {item.category}
                  </span>
                  <span className="font-display text-2xl font-bold text-gold">{item.price}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-maroon">{item.name}</h3>
                <p className="mt-3 leading-7 text-spice/70">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
