import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading">{title}</h2>
      {text && <p className={`body-copy ${center ? 'mx-auto' : ''}`}>{text}</p>}
    </motion.div>
  );
}
