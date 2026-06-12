import { useState } from "react";
import { motion } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";

export default function BlessingsWall() {
  const [wishes, setWishes] = useLocalStorage("weddingBlessings", []);
  const [message, setMessage] = useState("");

  const handleWish = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setWishes([{ text: message.trim(), time: new Date().toLocaleDateString() }, ...wishes]);
    setMessage("");
  };

  return (
    <section id="blessings" className="section-shell">
      <div className="section-title">
        <h2>Blessings Wall</h2>
        <p>Leave your wishes for Lokesh and Sakshi, and see each message shine in premium glass cards.</p>
      </div>
      <motion.form className="glass-card" onSubmit={handleWish} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
        <textarea className="wish-input" rows="4" placeholder="Write your blessing..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <br/>
          <br/>
        <button className="wish-submit" type="submit">
          Leave Blessing
        </button>
      </motion.form>
      <div className="gallery-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        {wishes.map((wish, index) => (
          <motion.article key={`${wish.text}-${index}`} className="wish-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.55 }}>
            <div className="wish-meta">
              <strong>Blessing</strong>
              <span>{wish.time}</span>
            </div>
            <p>{wish.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
