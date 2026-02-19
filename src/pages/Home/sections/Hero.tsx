import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import cover from "../../../assets/images/contexto-16-cover-02.png";

export function Hero() {
  const handleScrollDown = () => {
    const firstSection = document.getElementById("editorial");
    if (firstSection) {
      const offset = 150;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = firstSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#111",
        color: "#fff",
        overflow: "hidden",
        padding: "2rem",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
          gap: "10px",
          mixBlendMode: "lighten",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-destaque-1)",
            fontSize: "clamp(4rem, 12vw, 9rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            textShadow: "4px 4px 0px #000",
            color: "#fff",
          }}
        >
          Faces
          <br />
          da Fé
        </motion.h1>
      </div>

      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          bottom: "2rem",
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-destaque-2)",
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          Explorar Matérias
        </span>
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}
