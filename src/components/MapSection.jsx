import { useState } from "react";
import { motion } from "framer-motion";
import resort from "../assets/images2.jpg";
import resort2 from "../assets/images.jpg";



const venueAddress = "Two Brothers Resort, Paanchgaon, Umred Road, Nagpur, Maharashtra";

export default function MapSection() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="venue" className="section-shell">
      <div className="section-title">
        <h2>Venue Details</h2>
        <p>Two Brothers Resort in Nagpur is the royal backdrop for Lokesh and Sakshi's luxury wedding.</p>
      </div>
      <div className="map-shell">
        <motion.div className="map-frame" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <iframe title="Wedding venue map" className="map-frame" src="https://www.google.com/maps?q=Two+Brothers+Resort+Nagpur&output=embed" allowFullScreen loading="lazy" />
        </motion.div>
        <motion.div className="map-card glass-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h3>Two Brothers Resort</h3>
          <p>{venueAddress}</p>
          <div className="meta-row">
            <strong>Event Dates</strong>
            <span> 25 - 26 June 2026</span>
          </div>
           
          <div className="venue-actions">
            <button className="mini-button" type="button" onClick={copyAddress}>
              {copied ? "Copied Address" : "Copy Address"}
            </button>
            <a className="mini-button" href="https://www.google.com/maps/dir/?api=1&destination=Two+Brothers+Resort+Nagpur" target="_blank" rel="noreferrer">
              Navigate
            </a>
          </div>
          <div className="venue-preview">
            <img src={resort} alt="Resort venue" />
            <img src={resort2} alt="Royal venue" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
