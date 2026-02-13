import Header from "../../components/Header";
import type { SectionLink } from "../../types/interfaces";

import { Documentarios } from "./sections/Documentarios";
import { Editorial } from "./sections/Editorial";
import { Hero } from "./sections/Hero";
import { Reportagens } from "./sections/Reportagens";
import { Especiais } from "./sections/Especiais";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  const navigate = useNavigate();
  const sections: SectionLink[] = [
    { id: "editorial", label: "Editorial", color: "#FCD000" },
    { id: "reportagens", label: "Reportagens", color: "#FC8400" },
    { id: "especiais", label: "Especiais", color: "#F54F00" },
    { id: "documentarios", label: "Documentários", color: "#d63504ff" },
    { id: "expedientes", label: "Expedientes", color: "#F2EA00" },
  ];

  const renderSectionContent = (id: string) => {
    switch (id) {
      case "editorial":
        return <Editorial />;
      case "reportagens":
        return <Reportagens />;
      case "especiais":
        return <Especiais />;
      case "documentarios":
        return <Documentarios />;
      case "expedientes":
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--cor-primary)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              style={{
                fontFamily: "var(--font-destaque-1)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "var(--cor-black)",
                textShadow: "4px 4px 0px #fff",
              }}
            >
              CONHEÇA NOSSA EQUIPE
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{
                fontFamily: "Manrope",
                fontSize: "1.2rem",
                maxWidth: "600px",
                margin: "2rem 0",
                color: "#000",
                fontWeight: 600,
              }}
            >
              Faces da Fé é um projeto construído por mais de 40 jornalistas,
              fotógrafos e pesquisadores dedicados.
            </motion.p>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/expediente")}
              style={{
                padding: "1.2rem 2.5rem",
                border: "var(--border-thick)",
                backgroundColor: "var(--cor-black)",
                color: "#fff",
                fontFamily: "Manrope",
                fontWeight: 800,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Ver Expediente Completo
            </motion.button>
          </motion.div>
        );
      default:
        return <p>Seção em construção</p>;
    }
  };

  return (
    <>
      <Header title="FACES DA FÉ" sections={sections} />

      <main>
        <Hero />

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            style={{
              height: "95dvh",
              padding: "0",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: 1 }}>{renderSectionContent(section.id)}</div>
          </section>
        ))}
      </main>
    </>
  );
}
