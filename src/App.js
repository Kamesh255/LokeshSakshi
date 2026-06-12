import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import LoveStory from "./components/LoveStory";
import EventsSection from "./components/EventsSection";
import HostFamily from "./components/WeddingRules";
import FamilySection from "./components/FamilySection";
import GallerySection from "./components/GallerySection";
import MapSection from "./components/MapSection";
import RSVPForm from "./components/RSVPForm";
import BlessingsWall from "./components/BlessingsWall";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

function RouteWatcher() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/rsvp") {
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function MainPage() {
  return (
    <div className="royal-wedding-app">
      <Hero />
      <Countdown />
      <LoveStory />
      <EventsSection />
      <HostFamily />
      <FamilySection />
      <GallerySection />
      <MapSection />
      <RSVPForm />
      <BlessingsWall />
      <Footer />
    </div>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <ScrollProgress />
      <RouteWatcher />
    </BrowserRouter>
  );
}

export default App;
