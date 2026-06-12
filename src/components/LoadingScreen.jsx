import { motion } from "framer-motion";
import { GiElephantHead } from "react-icons/gi";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85 }} className="loading-card">
        <div className="loading-crest">
          <GiElephantHead />
        </div>
        <h2>Lokesh & Sakshi</h2>
        <p>As they embark on a beautiful journey of love, companionship, and togetherness.</p>
        <div className="loading-confetti">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
