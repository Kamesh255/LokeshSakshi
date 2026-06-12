import { motion } from "framer-motion";
import { FaMusic, FaHorse, FaRing, FaPalette } from "react-icons/fa";

const events = [
  {
    title: "Engagement Ceremony",
    date: "25 June 2026",
    time: "12:00 PM onwards",
    location: "Two Brothers Resort",
    theme: "A Celebration of New Beginnings",
    icon: <FaRing />,
    color: "#831c2f",
    map: "https://www.google.com/maps/search/?api=1&query=Two+Brothers+Resort+Nagpur",
  },
  {
    title: "Sangeet Night",
    date: "25 June 2026",
    time: "7:00 PM onwards",
    location: "Two Brothers Resort",
    theme: "An Evening of Music & Dance",
    icon: <FaMusic />,
    color: "#5c1a70",
    map: "https://www.google.com/maps/search/?api=1&query=Two+Brothers+Resort+Nagpur",
  },
  {
    title: "Haldi Ceremony",
    date: "26 June 2026",
    time: "11:00 AM onwards",
    location: "Two Brothers Resort",
    theme: "Blessings, Laughter & Traditions",
    icon: <FaPalette />,
    color: "#d27f12",
    map: "https://www.google.com/maps/search/?api=1&query=Two+Brothers+Resort+Nagpur",
  },
  {
    title: "Baraat & Wedding",
    date: "26 June 2026",
    time: "6:00 PM onwards",
    location: "Two Brothers Resort",
    theme: "The Beginning of Forever",
    icon: <FaHorse />,
    color: "#9b1123",
    map: "https://www.google.com/maps/search/?api=1&query=Two+Brothers+Resort+Nagpur",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="section-shell">
      <div className="section-title">
        <h2>Wedding Events</h2>
        <p>Mark your calendar for Lokesh and Sakshi's premium celebration schedule with royal details and modern motion.</p>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <motion.article key={event.title} className="event-card glass-card" style={{ borderColor: event.color }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: index * 0.07 }}>
            <div className="event-pill" style={{ backgroundColor: `${event.color}22`, color: event.color, borderColor: event.color }}>
              {event.icon}
              <span>{event.title}</span>
            </div>
            <h3>{event.theme}</h3>
            <div className="event-meta">
              <div className="meta-row">
                <strong>Date</strong>
                <span>{event.date}</span>
              </div>
              <div className="meta-row">
                <strong>Time</strong>
                <span>{event.time}</span>
              </div>
              <div className="meta-row">
                <strong>Location</strong>
                <span>{event.location}</span>
              </div>
            </div>
            <a className="event-link" href={event.map} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
