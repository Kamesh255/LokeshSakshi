import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

const hostFamily = [{ name: "Groom's", Num:"+91 81286 21422"}, { name: "Groom's", Num:"+91 8109152546" }, { name: "Bride's", Num:"+91 9354193194" }];

export default function ContactBoys() {
  return (
    <section id="hosts" className="section-shell">
      <div className="section-title">
        <h2>Groom's & Bride's Contacts</h2>
        <p>Your presence means the world to us. For any assistance regarding the celebrations, please get in touch</p>
      </div>
      <div className="rules-grid">
        {hostFamily.map((item, index) => (
          <motion.article key={`${item.name}-${index}`} className="rule-card glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.55 }}>
            <div className="rule-icon">
              <FiUsers />
            </div>
            <h3>{item.name}</h3>
            <p>{item.Num}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
