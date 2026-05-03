import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { galleryImages } from '../data.js';

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Gallery"
          title="Food, color, and a welcoming table."
          text="A glimpse of Royal Spice plates and the warm, polished atmosphere built for relaxed dining."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              className={`group overflow-hidden rounded-md shadow-soft ${
                index === 0 || index === 5 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt="Royal Spice restaurant gallery"
                className="h-full min-h-52 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
