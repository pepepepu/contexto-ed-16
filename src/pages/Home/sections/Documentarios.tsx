import { motion, AnimatePresence } from "framer-motion";
import { Play, MonitorPlay } from "lucide-react";
import { useState } from "react";

const docs = [
  {
    id: 1,
    titulo: "A MARIPOSA DE SÃO GONÇALO",
    youtubeId: "MEjGusfZym0",
    duracao: "10:00",
  },
  {
    id: 2,
    titulo: "NA CORRENTEZA DO BOM JESUS",
    youtubeId: "0z1dR-5Hsgo",
    duracao: "9:17",
  },
  {
    id: 3,
    titulo: "FACES DA CHEGANÇA",
    youtubeId: "FTde8pOE_Ps",
    duracao: "10:01",
  },
  {
    id: 4,
    titulo: "ORA YEYEO, OLHAI POR NÓS",
    youtubeId: "325dyhvYlkw",
    duracao: "10:00",
  },
  {
    id: 5,
    titulo: "ANTES DO CORTEJO VEM O FUNDAMENTO",
    youtubeId: "-yJW_C_jgpk",
    duracao: "9:30",
  },
  {
    id: 6,
    titulo: "AS TAIEIRAS ESTARÃO",
    youtubeId: "U9zYhggDRi0",
    duracao: "12:31",
  },
  {
    id: 7,
    titulo: "O MISTÉRIO DA FÉ",
    youtubeId: "VydlENvnqp0",
    duracao: "12:18",
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
      className="docs-main-wrapper"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--cor-black)",
        justifyContent: "center",
        color: "white",
        position: "relative",
        padding: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        style={{
          height: "15%",
          display: "flex",
          alignItems: "center",
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
            marginBottom: "10px",
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
        className="docs-content-layout"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          alignItems: "stretch",
          height: "85%",
          width: "100%",
        }}
      >
        <div
          className="docs-video-section"
          style={{
            flex: "1 1 60%",
            height: "90%",
            width: "60%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
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
                  src={`https://www.youtube.com/embed/${activeDoc.youtubeId}?autoplay=1&rel=0&playsinline=1`}
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
                    backgroundImage: `url(https://i.ytimg.com/vi/${activeDoc.youtubeId}/maxresdefault.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.3)",
                      zIndex: 1,
                    }}
                  />
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      position: "relative",
                      zIndex: 2,
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(5px)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      borderRadius: "50%",
                      width: "15%",
                      aspectRatio: "1/1",
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
                  zIndex: 2,
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
              </div>
            )}
          </div>
        </div>
        <div
          className="docs-playlist-section"
          style={{
            flex: "1 1 35%",
            height: "90%",
            width: "35%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #333",
              paddingBottom: "1rem",
              marginBottom: "1rem",
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
            className="custom-scrollbar"
            style={{
              flexGrow: 1,
              height: "80%",
              maxHeight: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              paddingRight: "0.5rem",
            }}
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
                    gap: "5%",
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
                      width: "30%",
                      aspectRatio: "16/9",
                      backgroundImage: `url(https://i.ytimg.com/vi/${doc.youtubeId}/maxresdefault.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      flexShrink: 0,
                      opacity: isActive ? 1 : 0.7,
                      border: isActive ? "none" : "1px solid #444",
                    }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        fontFamily: "var(--font-destaque-2)",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                        margin: 0,
                        lineHeight: 1.1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
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
                        flexShrink: 0,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .docs-main-wrapper {
            height: auto !important;
            min-height: 100vh;
          }
          .docs-content-layout {
            flex-direction: column !important;
            height: auto !important;
            flex-wrap: nowrap !important;
            gap: 1.5rem !important;
          }
          .docs-video-section {
            width: 100% !important;
            height: 35vh !important;
            flex: none !important;
          }
          .docs-playlist-section {
            width: 100% !important;
            height: 50vh !important;
            flex: none !important;
          }
        }
      `}</style>
    </div>
  );
}
