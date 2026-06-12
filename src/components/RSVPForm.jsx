import { useState } from "react";
import { motion } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guests, setGuests] = useState("1");
  const [attend, setAttend] = useState("yes");
  const [entries, setEntries] = useLocalStorage("weddingRSVP", []);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !mobile.trim()) return;
    const next = [...entries, { name: name.trim(), mobile: mobile.trim(), guests, attend, time: new Date().toLocaleString() }];
    setEntries(next);
    setName("");
    setMobile("");
    setGuests("1");
    setAttend("yes");
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2600);
  };

  return (
    <section id="rsvp" className="section-shell">
      <div className="section-title">
        <h2>RSVP</h2>
        <p>Please confirm your attendance for Lokesh & Sakshi’s royal wedding weekend.</p>
      </div>
      <div className="rsvp-shell">
        <motion.form className="glass-card" onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="rsvp-grid">
            <input className="rsvp-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="rsvp-input" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <select className="rsvp-select" value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
            <select className="rsvp-select" value={attend} onChange={(e) => setAttend(e.target.value)}>
              <option value="yes">Yes, Attending</option>
              <option value="no">Unable to Attend</option>
            </select>
          </div>
          <br/>
          <button className="rsvp-submit" type="submit">
            Send RSVP
          </button>
          {submitted && <p className="success-text">Thank you! Your RSVP is saved.</p>}
        </motion.form>
        {entries.length > 0 && (
          <motion.div className="glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3>Recent RSVPs</h3>
            <div className="rsvp-list">
              {entries
                .slice(-4)
                .reverse()
                .map((entry, index) => (
                  <div key={`${entry.name}-${index}`} className="rsvp-entry">
                    <strong>{entry.name}</strong>
                    <p>
                      {entry.guests} guest(s) • {entry.attend === "yes" ? "Attending" : "Regrets"}
                    </p>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
