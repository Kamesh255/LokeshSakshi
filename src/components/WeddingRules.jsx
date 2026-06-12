import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

const hostFamily = [{ name: "Mr. Parasram Nimje & Mrs. Sheela Nimje" }, { name: "Mr. Laldas Nimje & Mrs. Vinita Nimje" }, { name: "Mr. Jagdish Nimje & Mrs. Kanta Nimje" }, { name: "and the entire Nimje Family" }];

export default function WeddingRules() {
  return (
    <section id="hosts" className="section-shell">
      <div className="section-title">
        <h2>Host Family</h2>
        <p>Awaiting your gracious presence for Lokesh and Sakshi's royal celebration.</p>
      </div>
      <div className="rules-grid">
        {hostFamily.map((item, index) => (
          <motion.article key={`${item.name}-${index}`} className="rule-card glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.55 }}>
            <div className="rule-icon">
              <FiUsers />
            </div>
            <h3>{item.name}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
