import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
          opacity: 0.4,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(120%)",
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
            color: "#fff",
            textShadow: "4px 4px 0px #000",
          }}
        >
          Faces
          <br />
          da Fé
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.2rem",
            textTransform: "uppercase",
            color: "var(--cor-primary)",
            marginBottom: "1rem",
          }}
        >
          O Sagrado no Cotidiano Urbano
        </motion.p>
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
          color: "var(--cor-primary)",
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
