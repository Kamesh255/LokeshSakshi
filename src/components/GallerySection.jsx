import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiZoomIn } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", label: "Pre-Wedding Magic" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80", label: "Engagement Moments" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80", label: "Family Love" },
  { src: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?auto=format&fit=crop&w=900&q=80", label: "Luxury Memories" },
  { src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=900&q=80", label: "Royal Ceremony" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", label: "Couple Portrait" },
];

export default function GallerySection() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="gallery" className="section-shell gallery-section">
      <div className="section-title">
        <h2>Photo Gallery</h2>
        <p>Pre-wedding, engagement and family moments designed to feel luxurious and memorable.</p>
      </div>
      <motion.div className="gallery-slider" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 4200, disableOnInteraction: true }} loop spaceBetween={24} breakpoints={{ 640: { slidesPerView: 1 }, 900: { slidesPerView: 2 } }}>
          {galleryImages.map((item) => (
            <SwiperSlide key={item.src}>
              <div className="gallery-card glass-card" onClick={() => setPreview(item)}>
                <img src={item.src} alt={item.label} />
                <span className="gallery-label">
                  {item.label} <FiZoomIn />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      {preview && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setPreview(null)}>
          <div className="lightbox-content">
            <img src={preview.src} alt={preview.label} />
            <p>{preview.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
