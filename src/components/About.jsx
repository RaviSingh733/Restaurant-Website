import { motion } from 'framer-motion';
import { Leaf, Soup, UsersRound } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { images } from '../data.js';

const highlights = [
  { icon: Leaf, title: 'Fresh Ingredients', text: 'Seasonal vegetables, hand-ground spices, and daily-prepared sauces.' },
  { icon: Soup, title: 'Traditional Recipes', text: 'Classic regional flavors cooked with patient, time-honored methods.' },
  { icon: UsersRound, title: 'Family Dining', text: 'Warm service, generous portions, and a comfortable modern setting.' }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-md shadow-soft"
        >
          <img src={images.about} alt="Indian snacks served with chutneys" className="h-[430px] w-full object-cover" />
        </motion.div>
        <div>
          <SectionHeader
            eyebrow="Our Story"
            title="Authentic Indian cooking with a warm family table."
            text="Royal Spice Restaurant celebrates Indian flavours through slow-cooked gravies, handpicked masalas, fresh tandoor breads, and generous family-style hospitality. From weekday lunches to special celebrations, every meal is prepared to feel rich, comforting, and memorable."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45 }}
                className="rounded-md border border-maroon/10 bg-cream p-5 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-saffron/15 text-maroon">
                  <Icon size={21} />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-maroon">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-spice/70">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
