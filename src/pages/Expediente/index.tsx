import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Expediente.module.css";
import { equipe } from "./equipeData";

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
            className={styles.card}
            style={
              {
                contentVisibility: "auto",
                containIntrinsicSize: "100% 400px",
              } as React.CSSProperties
            }
          >
            <div className={styles.photoWrapper}>
              <motion.div
                className={styles.photoContainer}
                style={{ backgroundColor: membro.cor }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {membro.foto ? (
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={400}
                    height={400}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      willChange: "transform",
                    }}
                  />
                ) : (
                  <motion.span
                    className={styles.photoLabel}
                    whileHover={{ x: 20, skewX: -10 }}
                  >
                    {membro.nome.split(" ")[0]}
                  </motion.span>
                )}
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
