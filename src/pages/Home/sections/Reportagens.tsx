import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import saoGoncalo from "../../../assets/saoGoncalo/img01.jpg";
import cheganca from "../../../assets/cheganca/imagem01.jpg";
import bomJesus from "../../../assets/bomJesus/hero.jpg";
import lavagem from "../../../assets/lavagemConceicao/hero.jpg";
import penitentes from "../../../assets/penitentes/hero.jpg";
import taieiras from "../../../assets/taieiras/imagemCarrosel03.jpg";

const noticias = [
  {
    id: 1,
    titulo: "Celebração do São Gonçalo na Mussuca",
    subtitulo:
      "Da liderança de Neilton Santana à preparação dos novos brincantes, a comunidade da Mussuca garante que a tradição do São Gonçalo atravesse séculos sem perder o fôlego",
    img: saoGoncalo,
    link: "/reportagens/sao-goncalo",
  },
  {
    id: 2,
    titulo: "Entre a cruz e a espada, a Chegança em Sergipe",
    subtitulo:
      "A história de uma das principais manifestações religiosas e culturais do estado, que atravessa gerações e resiste ao apagamento",
    img: cheganca,
    link: "/reportagens/cheganca",
  },
  {
    id: 3,
    titulo: "Tradição que resiste sobre as águas",
    subtitulo:
      "O cortejo de Bom Jesus dos Navegantes representa uma manifestação religiosa e cultural passada em família, de geração para geração",
    img: bomJesus,
    link: "/reportagens/bom-jesus",
  },
  {
    id: 4,
    titulo: "A força da fé contra a frieza do ferro",
    subtitulo:
      "A Lavagem da Conceição completou 43 anos em Aracaju e revelou, entre memórias, ritos e tensões, como o sincretismo religioso segue vivo mesmo diante de igrejas que fecham seus portões com cadeados",
    img: lavagem,
    link: "/reportagens/lavagem-conceicao",
  },
  {
    id: 5,
    titulo: "Uma tradição que se renova",
    subtitulo:
      "Na Capital Sergipana da Fé, existe um grupo — os penitentes — que contrariou previsões de que estariam prestes a ruir e que hoje se mostram mais fortes que nunca",
    img: penitentes,
    link: "/reportagens/penitentes",
  },
  {
    id: 6,
    titulo: "Entre fé e devoção, a tradição das Taieiras",
    subtitulo:
      "Apesar da força cultural e religiosa, o grupo enfrenta desafios",
    img: taieiras,
    link: "/reportagens/taieiras",
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
          borderBottom: "var(--border-thick)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-destaque-1)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            color: "var(--cor-brand-orange)",
            lineHeight: 1,
            textTransform: "uppercase",
            marginBottom: 15,
          }}
        >
          Reportagens
        </h2>

        <div style={{ display: "flex", gap: "1rem", marginBottom: 15 }}>
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
          alignItems: "stretch",
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
    width: "clamp(300px, 85vw, 380px)",
    height: "auto",
    display: "flex",
    scrollSnapAlign: "start",
    flexShrink: 0,
    textDecoration: "none",
    backgroundColor: "#fff",
    color: "inherit",
    cursor: "pointer",
    position: "relative",
  };

  const CardContent = (
    <motion.article
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, boxShadow: "8px 8px 0px rgba(0, 0, 0, 1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        border: "var(--border-thick)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
      }}
    >
      <div
        style={{
          height: "clamp(220px, 35vh, 280px)",
          flexShrink: 0,
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
      </div>

      <div
        style={{
          flex: 1,
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
              WebkitLineClamp: 4,
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
            marginTop: "1.5rem",
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
