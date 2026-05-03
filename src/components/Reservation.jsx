import { motion } from 'framer-motion';
import { CalendarCheck, Clock, UsersRound } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const inputClass =
  'rounded-md border border-maroon/10 bg-cream px-4 py-3 outline-none transition placeholder:text-spice/40 focus:border-gold focus:bg-white';

export default function Reservation() {
  return (
    <section id="reservation" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Reservation"
          title="Book your table at Royal Spice."
          text="Reserve a comfortable table for family dinners, casual lunches, celebrations, and weekend dining."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-md bg-cream p-6 shadow-soft sm:p-8"
          >
            <h3 className="font-display text-3xl font-bold text-maroon">Dining made easy</h3>
            <p className="mt-4 leading-8 text-spice/75">
              Share your preferred date, time, and guest count. Our team will confirm the booking and prepare a warm,
              elegant table for your visit.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: CalendarCheck, label: 'Advance table booking' },
                { icon: Clock, label: 'Lunch and dinner reservations' },
                { icon: UsersRound, label: 'Family and group seating' }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 rounded-md bg-white p-4 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-saffron/15 text-maroon">
                    <Icon size={20} />
                  </span>
                  <span className="font-bold text-spice">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-md border border-gold/25 bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-spice">
                Name
                <input className={inputClass} placeholder="Your full name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-spice">
                Phone
                <input className={inputClass} placeholder="+91 98765 43210" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-spice">
                Date
                <input type="date" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-bold text-spice">
                Time
                <input type="time" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-bold text-spice sm:col-span-2">
                Number of Guests
                <input type="number" min="1" className={inputClass} placeholder="4" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-spice sm:col-span-2">
                Message
                <textarea
                  rows="4"
                  className={`${inputClass} resize-none`}
                  placeholder="Any occasion, seating preference, or special request?"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-maroon px-7 py-4 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-spice sm:w-auto"
            >
              Book Table
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
