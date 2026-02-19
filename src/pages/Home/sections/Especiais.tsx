import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Headphones, Play } from "lucide-react";
import { useRef, useState } from "react";

const podcasts = [
  {
    id: 1,
    programa: "Episódio 01",
    episodio: "APRESENTAÇÃO",
    capa: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    programa: "Episódio 02",
    episodio: "DESCIDÃO DOS QUILOMBOLAS ",
    capa: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    programa: "Episódio 03",
    episodio: "PINTADOS ITAMARINÁ",
    capa: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    programa: "Episódio 04",
    episodio: "PRAVIVER WORSHIP",
    capa: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export function Especiais() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "var(--cor-alert)",
        padding: "4rem clamp(1rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem",
          borderBottom: "var(--border-thick)",
          paddingBottom: "1rem",
          borderColor: "var(--cor-black)",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <Headphones size={24} color="#000" />
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                textTransform: "uppercase",
              }}
            >
              Faces da Fé • Podcast
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-destaque-1)",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "var(--cor-black)",
              lineHeight: 1,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            PODCAST DEVOÇÃO EM TOM MAIOR
          </h2>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => scroll("left")}
            style={{
              background: "transparent",
              border: "var(--border-thick)",
              padding: "clamp(0.5rem, 2vw, 0.8rem)",
              cursor: "pointer",
              transition: "transform 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Anterior"
          >
            <ArrowLeft size={24} color="var(--cor-black)" />
          </button>
          <button
            onClick={() => scroll("right")}
            style={{
              background: "var(--cor-black)",
              border: "var(--border-thick)",
              padding: "clamp(0.5rem, 2vw, 0.8rem)",
              cursor: "pointer",
              transition: "transform 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Próximo"
          >
            <ArrowRight size={24} color="#fff" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        style={{
          display: "flex",
          gap: "clamp(1rem, 3vw, 2rem)",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          width: "100%",
          alignItems: "stretch",
        }}
        className="hide-scrollbar"
      >
        {podcasts.map((pod) => (
          <PodcastCard key={pod.id} data={pod} />
        ))}
      </div>
    </div>
  );
}

function PodcastCard({ data }: { data: (typeof podcasts)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={data.link}
      target="_blank"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        width: "clamp(260px, 80vw, 320px)",
        height: "auto",
        minHeight: "clamp(300px, 45vh, 380px)",
        flexShrink: 0,
        scrollSnapAlign: "start",
        position: "relative",
        border: "var(--border-thick)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        backgroundColor: "#fff",
        textDecoration: "none",
        marginTop: "10px",
      }}
      whileHover={{ y: -8, boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        style={{
          height: "clamp(160px, 25vh, 200px)",
          overflow: "hidden",
          borderBottom: "var(--border-thick)",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <motion.div
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <motion.img
          src={data.capa}
          alt={data.programa}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              width: "clamp(48px, 8vw, 64px)",
              height: "clamp(48px, 8vw, 64px)",
              borderRadius: "50%",
              backgroundColor: "var(--cor-brand-orange)",
              border: "var(--border-thick)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "2px 2px 0px #000",
            }}
          >
            <Play
              size={28}
              fill="#000"
              color="#000"
              style={{ marginLeft: "4px" }}
            />
          </motion.div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "clamp(1rem, 3vw, 1.5rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
              fontWeight: 700,
              color: "#666",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              letterSpacing: "0.05em",
            }}
          >
            {data.programa}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-destaque-2)",
              fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
              lineHeight: 1.1,
              textTransform: "uppercase",
              color: "var(--cor-black)",
              marginBottom: "0.5rem",
            }}
          >
            {data.episodio}
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            borderTop: "1px solid #eee",
            paddingTop: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
              color: isHovered ? "var(--cor-brand-orange)" : "var(--cor-black)",
              transition: "color 0.2s",
            }}
          >
            OUVIR EPISÓDIO
          </span>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
            }}
          >
            <Play
              size={18}
              fill={isHovered ? "var(--cor-brand-orange)" : "transparent"}
              color={isHovered ? "var(--cor-brand-orange)" : "black"}
            />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
