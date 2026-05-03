import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const contactItems = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email', value: 'hello@royalspice.in' },
  { icon: MapPin, label: 'Address', value: 'Royal Spice Restaurant, Virar West, Mumbai, Maharashtra' },
  { icon: Clock, label: 'Opening Hours', value: 'Mon-Sun: 11:00 AM - 11:30 PM' }
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Contact"
          title="Visit us in Virar West, Mumbai."
          text="Find us for lunch, dinner, family celebrations, and relaxed weekend meals with authentic Indian flavours."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="grid gap-5"
          >
            <div className="grid gap-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 rounded-md bg-white p-5 shadow-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron/15 text-maroon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-saffron">{label}</p>
                    <p className="mt-1 font-semibold text-spice">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="grid min-h-80 place-items-center rounded-md border border-dashed border-maroon/25 bg-white p-8 text-center shadow-soft"
          >
            <div>
              <MapPin className="mx-auto text-maroon" size={38} />
              <p className="mt-3 font-display text-3xl font-bold text-maroon">Google Map</p>
              <p className="mt-2 text-spice/70">Map placeholder for Royal Spice Restaurant, Virar West, Mumbai.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
