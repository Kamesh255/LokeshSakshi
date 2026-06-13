import { useState } from "react";
import { motion } from "framer-motion";

const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbyBGSn6ipz4DELc5DKvV8IzwikQhMEdnD7LQaTH9kKy4yi_y0xUDFsfrEybw3uDpKZr/exec";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guests, setGuests] = useState("2");
  const [attend, setAttend] = useState("yes");
  const [dance, setDance] = useState("readyForSomeMoves");
  const [songs, setSongs] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName("");
    setMobile("");
    setGuests("2");
    setAttend("yes");
    setDance("readyForSomeMoves");
    setSongs("");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      setStatus({
        type: "error",
        text: "Please share your name and mobile number.",
      });
      return;
    }

    const normalizedMobile = mobile.replace(/\D/g, "");

    if (normalizedMobile.length < 10) {
      setStatus({
        type: "error",
        text: "Please enter a valid mobile number.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const formData = new URLSearchParams();

      formData.append("name", name.trim());
      formData.append("mobile", normalizedMobile);
      formData.append("guests", guests);
      formData.append("attend", attend);
      formData.append("dance", dance);
      formData.append("songs", songs.trim());
      formData.append("message", message.trim());
      formData.append("submittedAt", new Date().toISOString());

      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      resetForm();

      setStatus({
        type: "success",
        text: "🎉 Thank You! We can't wait to celebrate with you at Lokesh & Sakshi's Wedding.",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        text: error.message || "Unable to submit RSVP right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section-shell rsvp-section">
      <div className="section-title">
        <span className="section-subtitle">RSVP</span>
        <h2>We Will See You At The Wedding? ❤️</h2>
        <p>Food, Dance, Memories &amp; Endless Celebrations Await You!</p>
      </div>

      <div className="rsvp-shell">
        <motion.form className="glass-card rsvp-card" onSubmit={handleSubmit} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="rsvp-grid">
            <label className="rsvp-field">
              <span>Name</span>
              <input className="rsvp-input" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required disabled={isSubmitting} />
            </label>

            <label className="rsvp-field">
              <span>Mobile Number</span>
              <input type="tel" className="rsvp-input" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} required disabled={isSubmitting} />
            </label>

            <label className="rsvp-field">
              <span>Number of Guests</span>
              <select className="rsvp-select" value={guests} onChange={(e) => setGuests(e.target.value)} disabled={isSubmitting}>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9">9 Guests</option>
                <option value="10">10 Guests</option>

              </select>
            </label>

            <label className="rsvp-field">
              <span>Attendance Status</span>
              <select className="rsvp-select" value={attend} onChange={(e) => setAttend(e.target.value)} disabled={isSubmitting}>
                <option value="yes">Yes, I will attend</option>
                <option value="no">Regretfully cannot attend</option>
              </select>
            </label>

            <label className="rsvp-field">
              <span>Dance Floor Status 😄</span>
              <select className="rsvp-select" value={dance} onChange={(e) => setDance(e.target.value)} disabled={isSubmitting}>
                <option value="setDanceFloorOnFire">🕺 I'll Set The Dance Floor On Fire</option>
                <option value="readyForSomeMoves">💃 Ready For Some Moves</option>
                <option value="onlyIfSomeonePullsMe">😅 Only If Someone Pulls Me</option>
                <option value="watchEveryoneElseDance">🪑 I'll Watch Everyone Else Dance</option>
                <option value="noDance">🥹 No Dance for Me</option>
              </select>
            </label>
            <label className="rsvp-field">
              <span>Which Song Will Make You Dance? 🎵</span>
              <input className="rsvp-input" placeholder="Gallan Goodiyan, Kala Chashma, Morni Banke..." value={songs} onChange={(e) => setSongs(e.target.value)} disabled={isSubmitting} />
            </label>
          </div>

          <label className="rsvp-field rsvp-fullwidth">
            <span>Message & Blessings For The Couple ❤️</span>
            <textarea className="rsvp-textarea" placeholder="Write your love note, blessing, or funny wish here..." value={message} onChange={(e) => setMessage(e.target.value)} disabled={isSubmitting} />
          </label>

          <div className="rsvp-actions">
            <button className="rsvp-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending RSVP..." : "Send RSVP"}
            </button>
          <a className="rsvp-submit" href={'https://docs.google.com/spreadsheets/d/1fG_pQqemx77D9LS2TZ3F4JSPuiz7E86LWh9YRY6__NI/edit?usp=sharing'} target="_blank" rel="noreferrer">
              View Members Sheet
            </a>
            {/* <p className="rsvp-helper">Premium wedding glass-card style with smooth motion and joyful vibes.</p> */}
          </div>
          <br/>

          {status.text && (
            <motion.div className={`rsvp-status-card ${status.type === "success" ? "status-success" : "status-error"}`} initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35 }}>
              <p>{status.text}</p>
            </motion.div>
          )}
        </motion.form>

        <motion.div className="glass-card rsvp-preview" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}>
          <h3>Let's Make It Memorable</h3>
          <div className="rsvp-bullet">Food, dance, and memories are the heart of this celebration.</div>
          <div className="rsvp-bullet">Your song choice helps make the wedding playlist extra joyful.</div>
          <div className="rsvp-bullet">If you choose to dance, the stage is yours.</div>
        </motion.div>
      </div>
    </section>
  );
}
