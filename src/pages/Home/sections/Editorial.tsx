import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

export function Editorial() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  } as const;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: "var(--cor-primary)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: -50,
          right: -50,
          opacity: 0.05,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            fontFamily: "var(--font-destaque-1)",
            fontSize: "115rem",
            lineHeight: 1,
            color: "#000",
          }}
        >
          EDITORIAL
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 10,
          padding: "clamp(1rem, 5vw, 4rem)",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "clamp(2rem, 5vw, 4rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            backdropFilter: "blur(5px)",
          }}
        >
          <motion.div variants={itemVariants}>
            <Quote
              size={64}
              color="var(--cor-black)"
              fill="var(--cor-black)"
              style={{ marginBottom: "1rem", opacity: 0.8 }}
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-destaque-1)",
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
              lineHeight: 0.85,
              textTransform: "uppercase",
              color: "var(--cor-black)",
              marginBottom: "2rem",
            }}
          >
            A Voz de <br />
            <span
              style={{
                color: "var(--cor-white)",
                textShadow: "2px 2px 0 #000",
              }}
            >
              Quem Crê
            </span>
          </motion.h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              maxWidth: "800px",
            }}
          >
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                lineHeight: 1.6,
                fontWeight: 500,
                color: "var(--cor-black)",
                borderLeft: "4px solid var(--cor-black)",
                paddingLeft: "1.5rem",
              }}
            >
              Nesta edição, exploramos as diversas manifestações de fé no
              cenário urbano contemporâneo. O sagrado não está apenas nos
              templos, mas nas esquinas, na arte e no silêncio.
            </motion.p>

            <motion.button
              variants={itemVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.2rem 2.5rem",
                border: "var(--border-thick)",
                background: isHovered ? "var(--cor-black)" : "transparent",
                color: isHovered ? "var(--cor-primary)" : "var(--cor-black)",
                cursor: "pointer",
                width: "fit-content",
                transition: "all 0.3s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                }}
              >
                Ler Carta do Editor
              </span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
