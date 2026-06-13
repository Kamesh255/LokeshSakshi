import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-06-26T18:00:00");

const timerCards = [
  { label: "Days", key: "days" },
  { label: "Hours", key: "hours" },
  { label: "Minutes", key: "minutes" },
  { label: "Seconds", key: "seconds" },
];

function calculateTime() {
  const now = new Date();
  const diff = Math.max(0, targetDate - now);
  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [countdown, setCountdown] = useState(calculateTime());

  useEffect(() => {
    const interval = window.setInterval(() => setCountdown(calculateTime()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="section-shell">
      <div className="section-title">
        <h2>Countdown to the Wedding</h2>
        <p>A beautiful new chapter is about to begin. Count down the days until we celebrate love, togetherness, and a lifetime of happiness with our family and friends. ✨</p>
      </div>
      <div className="countdown-grid">
        {timerCards.map((item, index) => (
          <motion.article key={item.key} className="countdown-card glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.6 }}>
            <h3>{item.label}</h3>
            <p>{String(countdown[item.key]).padStart(2, "0")}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
