import { motion } from "framer-motion";
import { FaRing, FaMusic, FaHorse, FaFire, FaRegHeart } from "react-icons/fa";

const storyItems = [
  {
    title: "Engagement",
    icon: <FaRing />,
    date: "25 June 2026",
    description: "The moment two hearts and two families officially become one. A beautiful beginning to forever.",
  },
  {
    title: "Sangeet Night",
    icon: <FaMusic />,
    date: "25 June 2026",
    description: "An unforgettable evening filled with music, dance, laughter, and memories that will last a lifetime.",
  },
  {
    title: "Haldi Ceremony",
    icon: <FaRegHeart />,
    date: "26 June 2026",
    description: "Traditional blessings, joyful rituals, and a splash of happiness before the big day.",
  },
  {
    title: "Baraat",
    icon: <FaHorse />,
    date: "26 June 2026",
    description: "The groom arrives with grandeur, music, and endless celebration as the wedding festivities begin.",
  },
  {
    title: "Wedding",
    icon: <FaFire />,
    date: "26 June 2026",
    description: "The groom arrives with grandeur, music, and endless celebration as the wedding festivities begin.",
  },
];

export default function LoveStory() {
  return (
    <section id="story" className="section-shell">
      <div className="section-title">
        <h2>Wedding Timeline</h2>
        <p>The elegant journey from engagement to the final wedding ceremony, each moment crafted with love.</p>
      </div>
      <div className="timeline-grid">
        {storyItems.map((item, index) => (
          <motion.article key={item.title} className="timeline-card glass-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.08 }}>
            <div className="timeline-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <small>{item.date}</small>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
