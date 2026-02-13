import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Expediente.module.css";

const equipe = [
  {
    id: 1,
    nome: "George Oliveira",
    cargo: "Editor-Chefe",
    bio: "Jornalista apaixonado por narrativas urbanas e fé.",
    cor: "var(--cor-primary)",
  },
  {
    id: 2,
    nome: "Pedro Barros",
    cargo: "UI/UX & Dev",
    bio: "Desenvolvedor focado em experiências digitais modernas.",
    cor: "var(--cor-brand-orange)",
  },
  {
    id: 3,
    nome: "Ana Silva",
    cargo: "Repórter Fotográfica",
    bio: "Especialista em capturar o sagrado no cotidiano.",
    cor: "var(--cor-alert)",
  },
  {
    id: 4,
    nome: "Lucas Mendes",
    cargo: "Editor de Vídeo",
    bio: "Transformando relatos em documentários imersivos.",
    cor: "var(--cor-acid-yellow)",
  },
  {
    id: 5,
    nome: "Carla Souza",
    cargo: "Pesquisadora",
    bio: "Doutora em sociologia das religiões.",
    cor: "#f50800ff",
  },
  {
    id: 6,
    nome: "Mariana Luz",
    cargo: "Social Media",
    bio: "Conectando o projeto às comunidades digitais.",
    cor: "#f50800ff",
  },
  {
    id: 7,
    nome: "João P. Oliveira",
    cargo: "Antropólogo",
    bio: "Estudioso dos ritos de passagem brasileiros.",
    cor: "#FCD000",
  },
  {
    id: 8,
    nome: "Beatriz Costa",
    cargo: "Ilustradora",
    bio: "Dando forma visual aos mitos e lendas.",
    cor: "#FC8400",
  },
  {
    id: 9,
    nome: "Ricardo Gomes",
    cargo: "Produtor",
    bio: "Viabilizando as expedições por todo o Sergipe.",
    cor: "#F54F00",
  },
  {
    id: 10,
    nome: "Elena Martins",
    cargo: "Arquivista",
    bio: "Curadoria histórica e preservação de memórias.",
    cor: "#F2EA00",
  },
];

export function Expediente() {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.page}
    >
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <header className={styles.header}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className={styles.backButton}>
            <motion.div
              whileHover={{ x: -5 }}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <ArrowLeft size={20} /> VOLTAR AO PORTAL
            </motion.div>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className={styles.title}
        >
          Expediente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={styles.subtitle}
        >
          Faces da Fé é um projeto coletivo que envolve mais de 40 profissionais
          dedicados a registrar a pluralidade das crenças.
        </motion.p>
      </header>

      <section className={styles.grid}>
        {equipe.map((membro, index) => (
          <motion.div
            key={membro.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            // Stagger animation: um card entra depois do outro suavemente
            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            className={styles.card}
          >
            <div className={styles.photoWrapper}>
              <motion.div
                className={styles.photoContainer}
                style={{ backgroundColor: membro.cor }}
                whileHover={{ scale: 1.05 }} // Zoom interno suave na cor/foto
                transition={{ duration: 0.4 }}
              >
                <motion.span
                  className={styles.photoLabel}
                  whileHover={{ x: 20, skewX: -10 }} // Texto do fundo se move
                >
                  {membro.nome.split(" ")[0]}
                </motion.span>
              </motion.div>

              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                >
                  <ExternalLink size={32} color="#fff" strokeWidth={2} />
                </motion.div>
              </motion.div>
            </div>

            <div className={styles.info}>
              <h2 className={styles.memberName}>{membro.nome}</h2>
              <span className={styles.role}>{membro.cargo}</span>
              <p className={styles.bio}>{membro.bio}</p>

              <div className={styles.socials}>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "var(--cor-brand-orange)" }}
                  className={styles.socialLink}
                >
                  <Mail size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, color: "#0077b5" }}
                  className={styles.socialLink}
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Faces da Fé — Sergipe, Brasil.</p>
      </footer>
    </motion.main>
  );
}
