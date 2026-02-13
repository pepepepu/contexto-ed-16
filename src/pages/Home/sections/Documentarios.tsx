import { motion, AnimatePresence } from "framer-motion";
import { Play, MonitorPlay } from "lucide-react";
import { useState } from "react";

const docs = [
  {
    id: 1,
    titulo: "Fé na Estrada",
    descricao:
      "Uma jornada pelos caminhos de peregrinação no interior do Brasil.",
    youtubeId: "LXb3EKWsInQ",
    thumb:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    duracao: "24:00",
  },
  {
    id: 2,
    titulo: "O Canto da Sereia",
    descricao: "Documentário sobre as celebrações de Iemanjá em Salvador.",
    youtubeId: "ysz5S6PUM-U",
    thumb:
      "https://images.unsplash.com/photo-1621258529368-80e9e436c0a7?q=80&w=800&auto=format&fit=crop",
    duracao: "18:30",
  },
  {
    id: 3,
    titulo: "Arquitetura do Sagrado",
    descricao: "Como as catedrais e terreiros moldam a paisagem urbana.",
    youtubeId: "P89_tU8kXoE",
    thumb:
      "https://images.unsplash.com/photo-1548625361-12e61262d149?q=80&w=800&auto=format&fit=crop",
    duracao: "45:15",
  },
  {
    id: 4,
    titulo: "Vozes do Gospel",
    descricao:
      "A ascensão da música gospel nas periferias das grandes metrópoles.",
    youtubeId: "9bZkp7q19f0",
    thumb:
      "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800&auto=format&fit=crop",
    duracao: "32:10",
  },
];

export function Documentarios() {
  const [activeDoc, setActiveDoc] = useState(docs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredListId, setHoveredListId] = useState<number | null>(null);

  const handleChannelChange = (doc: (typeof docs)[0]) => {
    setActiveDoc(doc);
    setIsPlaying(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--cor-black)",
        justifyContent: "center",
        color: "white",
        position: "relative",
        padding: "clamp(1.5rem, 5vw, 4rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          alignItems: "baseline",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-destaque-1)",
            fontSize: "clamp(3rem, 6vw, 6rem)",
            color: "var(--cor-white)",
            margin: 0,
            lineHeight: 0.8,
          }}
        >
          DOCS.
        </h2>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            width: "12px",
            height: "12px",
            background: "red",
            borderRadius: "50%",
            boxShadow: "0 0 10px red",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: "2 1 600px",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              border: "1px solid #333",
              backgroundColor: "#111",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
            }}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.iframe
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeDoc.youtubeId}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ display: "block" }}
                />
              ) : (
                <motion.div
                  key="thumb"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    backgroundImage: `url(${activeDoc.thumb})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.3)",
                    }}
                  />
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      borderRadius: "50%",
                      width: "clamp(60px, 10vw, 80px)",
                      height: "clamp(60px, 10vw, 80px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Play size={32} fill="white" stroke="none" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  padding: "clamp(1rem, 2vw, 2rem)",
                  background: "linear-gradient(to top, black, transparent)",
                  pointerEvents: "none",
                }}
              >
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={activeDoc.titulo}
                  style={{
                    fontFamily: "var(--font-destaque-2)",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    lineHeight: 1,
                  }}
                >
                  {activeDoc.titulo}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  key={activeDoc.descricao}
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                    maxWidth: "600px",
                    opacity: 0.8,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {activeDoc.descricao}
                </motion.p>
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            flex: "1 1 300px",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxHeight: "600px",
            overflowY: "auto",
            paddingRight: "0.5rem",
          }}
          className="custom-scrollbar"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #333",
              paddingBottom: "1rem",
              marginBottom: "0.5rem",
              position: "sticky",
              top: 0,
              background: "var(--cor-black)",
              zIndex: 10,
            }}
          >
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                color: "#666",
              }}
            >
              Playlist ({docs.length})
            </span>
            <MonitorPlay size={16} color="#666" />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {docs.map((doc) => {
              const isActive = activeDoc.id === doc.id;
              const isHovered = hoveredListId === doc.id;

              return (
                <motion.div
                  key={doc.id}
                  onClick={() => handleChannelChange(doc)}
                  onHoverStart={() => setHoveredListId(doc.id)}
                  onHoverEnd={() => setHoveredListId(null)}
                  whileHover={{ x: 5 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    cursor: "pointer",
                    backgroundColor: isActive
                      ? "var(--cor-white)"
                      : "rgba(255,255,255,0.05)",
                    border: isActive ? "none" : "1px solid #333",
                    color: isActive ? "var(--cor-black)" : "var(--cor-white)",
                    opacity: !isActive && !isHovered ? 0.7 : 1,
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "50px",
                      backgroundImage: `url(${doc.thumb})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      flexShrink: 0,
                      opacity: isActive ? 1 : 0.7,
                      border: isActive ? "none" : "1px solid #444",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-destaque-2)",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {doc.titulo}
                    </h4>
                    <span
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.75rem",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      {doc.duracao}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "red",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
