import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "../../pages/Entrevistas/entrevistas.module.css";

function ImageCarousel({
  images,
  legenda,
}: {
  images: string[];
  legenda?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <figure style={{ margin: "5rem 0" }}>
      <div className={styles.carouselWrapper} style={{ margin: 0 }}>
        <button
          className={`${styles.carouselBtn} ${styles.prev}`}
          onClick={prevSlide}
        >
          <ChevronLeft size={24} color="#000" />
        </button>

        <div className={styles.carouselTrackContainer}>
          <motion.div
            className={styles.carouselTrack}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {images.map((img, index) => (
              <div key={index} className={styles.carouselSlide}>
                <img src={img} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          className={`${styles.carouselBtn} ${styles.next}`}
          onClick={nextSlide}
        >
          <ChevronRight size={24} color="#000" />
        </button>
        <div className={styles.carouselDots}>
          {images.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${
                currentIndex === i ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>
      {legenda && (
        <figcaption
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "1rem",
            color: "#666",
            marginTop: "3rem",
            borderLeft: "5px solid var(--cor-primary)",
            paddingLeft: "1rem",
            fontStyle: "italic",
          }}
        >
          {legenda}
        </figcaption>
      )}
    </figure>
  );
}

export default ImageCarousel;
