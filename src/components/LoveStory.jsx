import { motion } from "framer-motion";
import { FaRing, FaMusic, FaHorse, FaFire, FaRegHeart } from "react-icons/fa";

const storyItems = [
  {
    title: "Engagement",
    icon: <FaRing />,
    date: "25 June 2026",
    description: "The royal promise that lit the first spark of our wedding journey.",
  },
  {
    title: "Sangeet Night",
    icon: <FaMusic />,
    date: "25 June 2026",
    description: "A neon-lit night of music, dance, and celebration under the stars.",
  },
  {
    title: "Haldi Ceremony",
    icon: <FaRegHeart />,
    date: "26 June 2026",
    description: "A golden ritual of laughter, blessings and festive joy.",
  },
  {
    title: "Baraat",
    icon: <FaHorse />,
    date: "26 June 2026",
    description: "A grand procession of color, rhythm and royal celebration.",
  },
  {
    title: "Wedding",
    icon: <FaFire />,
    date: "26 June 2026",
    description: "Sacred vows in the glow of floral mandap and treasured tradition.",
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
