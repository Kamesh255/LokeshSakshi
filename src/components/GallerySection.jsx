import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FiZoomIn } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import lokesh1 from "../assets/lokesh1.png";
import lokesh2 from "../assets/lokesh2.png";
import lokesh3 from "../assets/lokesh3.png";
import lokesh4 from "../assets/lokesh4.png";
import lokesh5 from "../assets/lokesh5.png";
import lokesh6 from "../assets/lokesh6.png";
import lokesh7 from "../assets/lokesh7.png";

const galleryImages = [
  { src: lokesh1, label: "Celebration" },
  { src: lokesh2, label: "Celebration" },
  { src: lokesh3, label: "Couple Moment" },
  { src: lokesh4, label: "Celebration" },
  { src: lokesh5, label: "Celebration" },
  { src: lokesh6, label: "Romantic" },
  { src: lokesh7, label: "Memories" },
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
          </div>
        </div>
      )}
    </section>
  );
}
