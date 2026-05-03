import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { reviews } from '../data.js';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Guest Reviews"
          title="Loved for flavor, warmth, and service."
          text="Guests visit Royal Spice for comforting Indian food and return for the thoughtful hospitality."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-md border border-maroon/10 bg-cream p-7 shadow-sm"
            >
              <div className="flex gap-1 text-gold" aria-label={`${review.rating} star rating`}>
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 leading-8 text-spice/75">"{review.text}"</p>
              <h3 className="mt-6 font-display text-xl font-bold text-maroon">{review.name}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
