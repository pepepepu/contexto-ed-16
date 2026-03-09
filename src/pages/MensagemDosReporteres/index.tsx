import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const mensagens = [
  {
    id: 1,
    titulo: "Taieiras",
    thumb:
      "https://images.unsplash.com/photo-1598155523122-3842334d6c1f?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/boeIhmcH0G8?feature=share",
    duracao: "0:50",
  },
  {
    id: 2,
    titulo: "Chegança",
    thumb:
      "https://images.unsplash.com/photo-1598155523122-3842334d6c1f?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/4v2_UvY62uk?feature=share",
    duracao: "0:36",
  },
  {
    id: 3,
    titulo: "Bom Jesus",
    thumb:
      "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/dI826v2f96Q?feature=share",
    duracao: "0:41",
  },
  {
    id: 4,
    titulo: "Lavagem da Conceiçao",
    thumb:
      "https://images.unsplash.com/photo-1598155523122-3842334d6c1f?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/wL0T2b10ubw?feature=share",
    duracao: "0:26",
  },
  {
    id: 5,
    titulo: "São Gonçalo",
    thumb:
      "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/D_pNdCXHf8M?feature=share",
    duracao: "0:28",
  },
  {
    id: 6,
    titulo: "Penitentes",
    thumb:
      "https://images.unsplash.com/photo-1598155523122-3842334d6c1f?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/VOuTfkHSUmA?feature=share",
    duracao: "0:35",
  },
];

function getYouTubeId(url: string) {
  if (url.includes("/shorts/")) {
    return url.split("/shorts/")[1].split("?")[0];
  } else if (url.includes("v=")) {
    return url.split("v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1].split("?")[0];
  }
  return "";
}

export function MensagemReporteres() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < mensagens.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentVideo = mensagens[currentIndex];
  const videoId = getYouTubeId(currentVideo.link);

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "var(--cor-gray, #f4f4f4)",
        padding: "clamp(20px, 5vw, 50px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "clamp(1.5rem, 3vw, 2.5rem)",
          left: "clamp(1rem, 3vw, 2rem)",
          zIndex: 100,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "var(--cor-black, #111)",
            background: "var(--cor-primary, #fcd000)",
            padding: "0.8rem 1.5rem",
            fontFamily: "var(--font-title, 'Oswald', sans-serif)",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "0.9rem",
            border: "3px solid var(--cor-black, #111)",
            boxShadow: "4px 4px 0px var(--cor-black, #111)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-2px, -2px)";
            e.currentTarget.style.boxShadow =
              "6px 6px 0px var(--cor-black, #111)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0px, 0px)";
            e.currentTarget.style.boxShadow =
              "4px 4px 0px var(--cor-black, #111)";
          }}
        >
          <ArrowLeft size={20} />
          Voltar
        </Link>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          marginTop: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "var(--font-destaque-1, 'Anton', sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--cor-black, #111)",
              lineHeight: 1,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Entenda as <br />
            <span style={{ color: "var(--cor-secondary, #fc8400)" }}>
              Reportagens
            </span>
          </motion.h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(0.5rem, 2vw, 1.5rem)",
            width: "100%",
            position: "relative",
          }}
        >
          <motion.button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            whileTap={{ scale: 0.9 }}
            className="nav-button"
            style={{
              width: "clamp(40px, 5vw, 60px)",
              height: "clamp(40px, 5vw, 60px)",
              backgroundColor:
                currentIndex === 0 ? "#ccc" : "var(--cor-primary, #fcd000)",
              border: "3px solid var(--cor-black, #111)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                currentIndex === 0
                  ? "none"
                  : "4px 4px 0px var(--cor-black, #111)",
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              outline: "none",
              zIndex: 10,
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={28} color="var(--cor-black, #111)" />
          </motion.button>

          <div
            className="video-container-responsive"
            style={{
              width: "100%",
              maxWidth: "360px",
              aspectRatio: "9/16",
              backgroundColor: "#000",
              border: "4px solid var(--cor-black, #111)",
              boxShadow: "8px 8px 0px var(--cor-black, #111)",
              position: "relative",
              overflow: "hidden",
              flexShrink: 1,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ width: "100%", height: "100%" }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1&rel=0&playsinline=1`}
                  title={currentVideo.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block", pointerEvents: "auto" }}
                ></iframe>
              </motion.div>
            </AnimatePresence>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "1.5rem 1rem",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
                pointerEvents: "none",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-title, 'Oswald', sans-serif)",
                  fontSize: "1.3rem",
                  color: "#fff",
                  margin: 0,
                  textTransform: "uppercase",
                  textShadow: "2px 2px 0px #000",
                }}
              >
                {currentVideo.titulo}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-ui, 'Lato', sans-serif)",
                  fontSize: "0.9rem",
                  color: "var(--cor-primary, #fcd000)",
                  margin: "0.3rem 0 0 0",
                  fontWeight: 700,
                  textShadow: "1px 1px 0px #000",
                }}
              >
                {currentVideo.duracao} • Vídeo {currentIndex + 1}/
                {mensagens.length}
              </p>
            </div>
          </div>

          <motion.button
            onClick={handleNext}
            disabled={currentIndex === mensagens.length - 1}
            whileTap={{ scale: 0.9 }}
            className="nav-button"
            style={{
              width: "clamp(40px, 5vw, 60px)",
              height: "clamp(40px, 5vw, 60px)",
              backgroundColor:
                currentIndex === mensagens.length - 1
                  ? "#ccc"
                  : "var(--cor-primary, #fcd000)",
              border: "3px solid var(--cor-black, #111)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                currentIndex === mensagens.length - 1
                  ? "none"
                  : "4px 4px 0px var(--cor-black, #111)",
              cursor:
                currentIndex === mensagens.length - 1
                  ? "not-allowed"
                  : "pointer",
              outline: "none",
              zIndex: 10,
              flexShrink: 0,
            }}
          >
            <ChevronRight size={28} color="var(--cor-black, #111)" />
          </motion.button>
        </div>
      </div>

      <style>{`
        .video-container-responsive {
          height: 65vh;
          max-height: 700px;
          min-height: 400px;
        }
        @media (max-width: 480px) {
           .video-container-responsive {
              height: 55vh;
           }
        }
      `}</style>
    </section>
  );
}
