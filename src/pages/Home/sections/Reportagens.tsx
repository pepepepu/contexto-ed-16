import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import saoGoncalo from "../../../assets/sao_goncalo/img01.jpg";

const noticias = [
  {
    id: 1,
    titulo: "O Sincretismo na Bahia",
    subtitulo:
      "Como o sagrado se mistura nas ruas de Salvador e recria tradições ancestrais.",
    tag: "Cultura",
    img: saoGoncalo,
    link: "/reportagens/sao-goncalo",
  },
];

export function Reportagens() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === "left" ? -382 : 382;

      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "2rem clamp(1rem, 5vw, 4rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-destaque-1)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: "var(--cor-brand-orange)",
            lineHeight: 1,
            textTransform: "uppercase",
            margin: 0,
            textShadow: "2px 1px 0px #000",
          }}
        >
          Reportagens
        </h2>

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
          paddingTop: "2rem",
          paddingBottom: "2rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          width: "100%",
        }}
        className="hide-scrollbar"
      >
        {noticias.map((noticia) => (
          <Card key={noticia.id} data={noticia} />
        ))}
      </div>
    </div>
  );
}

function Card({ data }: { data: (typeof noticias)[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasLink = data.link && data.link !== "#";

  const containerStyle: React.CSSProperties = {
    minWidth: "clamp(300px, 100vw, 380px)",
    width: "clamp(300px, 85vw, 380px)",
    height: "55vh",
    minHeight: "450px",
    scrollSnapAlign: "start",
    flexShrink: 0,
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    position: "relative",
    display: "block",
  };

  const CardContent = (
    <motion.article
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        border: "var(--border-thick)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 3,
          overflow: "hidden",
          borderBottom: "var(--border-thick)",
          position: "relative",
        }}
      >
        <motion.div
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--cor-brand-orange)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <motion.img
          src={data.img}
          alt={data.titulo}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
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
            backgroundColor: "var(--cor-brand-orange)",
            color: "white",
            padding: "0.25rem 0.75rem",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            zIndex: 2,
            border: "1px solid black",
            boxShadow: "2px 2px 0px black",
          }}
        >
          {data.tag}
        </div>
      </div>

      <div
        style={{
          flex: 2,
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-destaque-2)",
              fontSize: "1.6rem",
              lineHeight: 1.1,
              marginBottom: "0.8rem",
              textTransform: "uppercase",
              color: isHovered ? "var(--cor-brand-orange)" : "var(--cor-black)",
              transition: "color 0.3s",
            }}
          >
            {data.titulo}
          </h3>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "1rem",
              lineHeight: 1.4,
              color: "#555",
              fontWeight: 500,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {data.subtitulo}
          </p>
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
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
            }}
          >
            LER MATÉRIA
          </span>
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              rotate: isHovered ? 45 : 0,
            }}
          >
            <ArrowUpRight
              size={24}
              color={isHovered ? "var(--cor-brand-orange)" : "black"}
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );

  if (hasLink) {
    return (
      <Link to={data.link} style={containerStyle}>
        {CardContent}
      </Link>
    );
  }

  return <div style={containerStyle}>{CardContent}</div>;
}
