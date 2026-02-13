import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  Play,
  AudioLines,
} from "lucide-react";
import { useRef, useState } from "react";

const podcasts = [
  {
    id: 1,
    programa: "O Som das Ruas",
    episodio: "A Fé no Funk e o Sagrado na Periferia",
    duracao: "45 min",
    capa: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    programa: "Diálogos Sagrados",
    episodio: "Sincretismo Hoje: Onde os Santos se Encontram",
    duracao: "32 min",
    capa: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    programa: "Vozes da Cidade",
    episodio: "O Silêncio Urbano e a Meditação no Caos",
    duracao: "58 min",
    capa: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    programa: "Faces Tech",
    episodio: "Algoritmos da Fé: Religião na Era da IA",
    duracao: "28 min",
    capa: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export function Especiais() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" ? -382 : 382;
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
        padding: "2rem clamp(1rem, 5vw, 4rem)",
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
                fontSize: "0.9rem",
                textTransform: "uppercase",
              }}
            >
              Faces da Fé • Podcast
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-destaque-1)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--cor-black)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Especiais
          </h2>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => scroll("left")}
            style={{
              background: "transparent",
              border: "var(--border-thick)",
              padding: "0.8rem",
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
              padding: "0.8rem",
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
          gap: "2rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: "2rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          width: "100%",
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
        minWidth: "clamp(280px, 100vw, 380px)",
        width: "clamp(280px, 85vw, 380px)",
        height: "55vh",
        minHeight: "450px",

        flexShrink: 0,
        scrollSnapAlign: "start",

        position: "relative",
        border: "var(--border-thick)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        backgroundColor: "#fff",
        textDecoration: "none",
      }}
      whileHover={{ y: -8, boxShadow: "8px 8px 0px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        style={{
          height: "250px",
          overflow: "hidden",
          borderBottom: "var(--border-thick)",
          position: "relative",
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
            top: "1rem",
            left: "1rem",
            backgroundColor: "var(--cor-black)",
            color: "var(--cor-acid-yellow)",
            padding: "0.25rem 0.75rem",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            zIndex: 2,
            border: "1px solid var(--cor-acid-yellow)",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <AudioLines size={14} /> {data.duracao}
        </div>

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
              width: "64px",
              height: "64px",
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
              size={32}
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
          padding: "1.5rem",
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
              fontSize: "0.8rem",
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
              fontSize: "1.4rem",
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
            marginTop: "1.5rem",
            borderTop: "1px solid #eee",
            paddingTop: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
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
              size={20}
              fill={isHovered ? "var(--cor-brand-orange)" : "transparent"}
              color={isHovered ? "var(--cor-brand-orange)" : "black"}
            />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
