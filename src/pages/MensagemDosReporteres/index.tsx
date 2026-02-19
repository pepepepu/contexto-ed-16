import { motion } from "framer-motion";
import { Play, Youtube, MessageSquareQuote, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const mensagens = [
  {
    id: 1,
    titulo: "Taieiras",
    thumb: "https://youtube.com/shorts/boeIhmcH0G8?feature=share",
    link: "https://youtube.com/shorts/boeIhmcH0G8?feature=share",
    duracao: "0:50",
  },
  {
    id: 2,
    titulo: "A emoção na Chegança",
    thumb:
      "https://images.unsplash.com/photo-1598155523122-3842334d6c1f?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/4v2_UvY62uk?feature=share",
    duracao: "5:15",
  },
  {
    id: 3,
    titulo: "Relatos de Fé e Devoção",
    thumb:
      "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=800&auto=format&fit=crop",
    link: "https://youtube.com/shorts/dI826v2f96Q?feature=share",
    duracao: "3:45",
  },
];

export function MensagemReporteres() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "var(--cor-gray, #f4f4f4)",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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
            boxShadow: "6px 6px 0px var(--cor-black, #111)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-3px, -3px)";
            e.currentTarget.style.boxShadow =
              "10px 10px 0px var(--cor-black, #111)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0px, 0px)";
            e.currentTarget.style.boxShadow =
              "6px 6px 0px var(--cor-black, #111)";
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
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "var(--cor-primary, #fcd000)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "4px solid var(--cor-black, #111)",
              boxShadow: "6px 6px 0px var(--cor-black, #111)",
              marginBottom: "1rem",
            }}
          >
            <MessageSquareQuote size={40} color="var(--cor-black, #111)" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-destaque-1, 'Anton', sans-serif)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              color: "var(--cor-black, #111)",
              lineHeight: 1,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Mensagem dos <br />
            <span style={{ color: "var(--cor-secondary, #fc8400)" }}>
              Repórteres
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: "var(--font-ui, 'Lato', sans-serif)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#555",
              maxWidth: "600px",
              marginTop: "1rem",
            }}
          >
            Um olhar por trás das câmeras: confira os relatos em vídeo de quem
            vivenciou de perto a fé e a cultura presentes em cada matéria.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            width: "100%",
          }}
        >
          {mensagens.map((msg) => (
            <motion.div key={msg.id} variants={itemVariants}>
              <ReporterCard data={msg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReporterCard({ data }: { data: (typeof mensagens)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        border: "4px solid var(--cor-black, #111)",
        boxShadow: isHovered
          ? "6px 6px 0px var(--cor-brand-orange, #fc8400)"
          : "0px var(--cor-black, #111)",
        textDecoration: "none",
        color: "inherit",
        height: "100%",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: isHovered ? "translate(-6px, -6px)" : "translate(0, 0)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderBottom: "4px solid var(--cor-black, #111)",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <motion.img
          src={data.thumb}
          alt={data.titulo}
          animate={{
            scale: isHovered ? 1.05 : 1,
            opacity: isHovered ? 0.7 : 1,
          }}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "var(--cor-primary, #fcd000)",
              border: "3px solid var(--cor-black, #111)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "4px 4px 0px var(--cor-black, #111)",
            }}
          >
            <Play
              size={24}
              fill="var(--cor-black, #111)"
              color="var(--cor-black, #111)"
              style={{ marginLeft: "4px" }}
            />
          </motion.div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "0.8rem",
            right: "0.8rem",
            backgroundColor: "var(--cor-black, #111)",
            color: "#fff",
            padding: "0.2rem 0.6rem",
            fontFamily: "var(--font-ui, 'Lato', sans-serif)",
            fontSize: "0.8rem",
            fontWeight: 700,
            border: "2px solid #fff",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Youtube size={14} />
          {data.duracao}
        </div>
      </div>

      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-title, 'Oswald', sans-serif)",
            fontSize: "1.4rem",
            lineHeight: 1.2,
            textTransform: "uppercase",
            color: "var(--cor-black, #111)",
            margin: 0,
          }}
        >
          {data.titulo}
        </h3>
      </div>
    </motion.a>
  );
}
