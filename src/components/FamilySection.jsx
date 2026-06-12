import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

const brideFamily = [
  { name: "Mr. Devendra Kohad", role: "Father" },
  { name: "Mrs. Usha Kohad", role: "Mother" },
  { name: "Family & Relatives", role: "Bride’s family" },
];

const groomFamily = [
  { name: "Mr. Laldas Nimje", role: "Father" },
  { name: "Mrs. Vinita Nimje", role: "Mother" },
  { name: "Family & Relatives", role: "Groom’s family" },
];

export default function FamilySection() {
  return (
    <section id="family" className="section-shell">
      <div className="section-title">
        <h2>Family Section</h2>
        <p>Celebrating the loving families who make Lokesh and Sakshi's wedding a royal affair.</p>
      </div>
      <div className="family-grid">
        <motion.article className="family-card glass-card" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="family-avatar">
            <FiUsers />
          </div>
          <h3>Bride Side</h3>
          {brideFamily.map((member) => (
            <div key={member.name} className="family-meta">
              <h4>{member.name}</h4>
              <p className="family-role">{member.role}</p>
            </div>
          ))}
        </motion.article>
        <motion.article className="family-card glass-card" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}>
          <div className="family-avatar">
            <FiUsers />
          </div>
          <h3>Groom Side</h3>
          {groomFamily.map((member) => (
            <div key={member.name} className="family-meta">
              <h4>{member.name}</h4>
              <p className="family-role">{member.role}</p>
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  );
}
