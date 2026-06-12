import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsMusicNoteBeamed, BsVolumeMuteFill } from "react-icons/bs";
import { GiElephantHead } from "react-icons/gi";
import weddingMusic from "../assets/Wedding.mp3";

const musicUrl = weddingMusic;

const heroAnimations = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Hero() {
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.28;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play().catch(() => null);
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const hoverText = useMemo(() => (musicOn ? "Mute music" : "Play music"), [musicOn]);

  return (
    <section id="home" className="hero-section">
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          className="petal"
          style={{
            left: `${index * 8 + 2}%`,
            animationDuration: `${7 + index * 0.5}s`,
            animationDelay: `-${index * 0.6}s`,
          }}
        />
      ))}
      <div className="hero-content section-shell">
        <motion.div className="hero-banner" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <GiElephantHead className="ganesh-icon" />
          <div>
            <span>Om Gan Ganapataye Namah</span>
            <br />
            <strong>As they embark on a beautiful journey of love, companionship, and togetherness.</strong>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={heroAnimations} className="hero-intro">
          Lokesh ❤️ Sakshi
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={heroAnimations} className="hero-title">
          <span>Lokesh</span>
          <span className="gold">&amp;</span>
          <span>Sakshi</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.25, duration: 1 } }} className="hero-date">
          25 - 26 June 2026 | Two Brothers Resort, Nagpur
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 1 } }}>
          A modern royal wedding celebration in burgundy, gold, cream and rose tones. Experience luxury motion, floral glamour, and premium invitation vibes.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 1 } }} className="hero-action">
          <button className="music-button" type="button" onClick={() => setMusicOn((state) => !state)}>
            {musicOn ? <BsVolumeMuteFill /> : <BsMusicNoteBeamed />} {hoverText}
          </button>
          <a className="cta-button" href="#countdown">
            See Countdown
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 1 } }} className="scroll-indicator">
          <span>Scroll for the details</span>
          <div className="scroll-dot" />
        </motion.div>
      </div>
    </section>
  );
}
