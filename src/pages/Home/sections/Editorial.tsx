import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Editorial() {
  const navigate = useNavigate();
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
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{
            fontFamily: "var(--font-destaque-1)",
            fontSize: "clamp(40rem, 80vw, 115rem)",
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
          padding: "clamp(1.5rem, 4vw, 4rem)",
          maxWidth: "1700px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <motion.div variants={itemVariants}>
            <Quote
              size={64}
              color="var(--cor-black)"
              fill="var(--cor-black)"
              style={{
                marginBottom: "clamp(1rem, 3vh, 2rem)",
                width: "clamp(40px, 6vw, 64px)",
                height: "clamp(40px, 6vw, 64px)",
              }}
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-destaque-1)",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              color: "var(--cor-black)",
              marginBottom: "clamp(1.5rem, 4vh, 3rem)",
              maxWidth: "100%",
              wordWrap: "break-word",
            }}
          >
            Entre Fé e <br />
            <span
              style={{
                color: "var(--cor-white)",
              }}
            >
              Cultura
            </span>
          </motion.h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1.5rem, 4vh, 2.5rem)",
              maxWidth: "min(100%, 1000px)",
            }}
          >
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                lineHeight: 1.6,
                fontWeight: 500,
                color: "var(--cor-black)",
                borderLeft: "3px solid var(--cor-black)",
                paddingLeft: "clamp(1rem, 3vw, 2rem)",
              }}
            >
              Nesta edição, exploramos a fé como força viva que atravessa ruas,
              praças e comunidades. Mais do que crença individual, ela se
              manifesta em rituais, cantos, cortejos e celebrações que mantêm
              vivas tradições e saberes.
            </motion.p>

            <motion.button
              variants={itemVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              onClick={() => navigate("/mensagem-dos-reporteres")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(0.5rem, 2vw, 1rem)",
                padding:
                  "clamp(0.8rem, 2vh, 1.2rem) clamp(1.5rem, 4vw, 2.5rem)",
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
                  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                  letterSpacing: "0.1em",
                }}
              >
                Mensagem dos repórteres
              </span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight
                  size={24}
                  style={{
                    width: "clamp(20px, 3vw, 24px)",
                    height: "clamp(20px, 3vw, 24px)",
                  }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
