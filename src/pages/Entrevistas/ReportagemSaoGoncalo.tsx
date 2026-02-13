import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, User, MapPin, Music, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Reportagem.module.css";

export function ReportagemSaoGoncalo() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock de imagens para o carrossel (ajuste os caminhos conforme seu projeto)
  const carouselImages = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200",
    "https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=1200",
    "https://images.unsplash.com/photo-1520156557489-3176db102142?q=80&w=1200",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.articlePage}
    >
      {/* Barra de Progresso */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      {/* Botão Voltar Fixo */}
      <Link to="/" className={styles.backBtn}>
        <ArrowLeft size={20} /> VOLTAR
      </Link>

      {/* HERO SECTION */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div
          className={styles.heroImage}
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1547150620-190726af01b9?q=80&w=2000")',
          }}
        />
        <div className={styles.heroContent}>
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles.category}
          >
            CATOLICISMO
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.title}
          >
            SÃO GONÇALO
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.subtitle}
          >
            A dança da devoção e promessa que atravessa gerações no interior do
            estado.
          </motion.p>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className={styles.mainContainer}>
        {/* Meta info */}
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <User size={18} /> Por <strong>Redação Contexto</strong>
          </div>
          <div className={styles.metaItem}>
            <Clock size={18} /> 15 min de leitura
          </div>
        </div>

        {/* Bloco 1 */}
        <section className={styles.block}>
          <h2 className={styles.sectionTitle}>
            CELEBRAÇÃO DO SÃO GONÇALO NA MUSSUCA
          </h2>
          <p className={styles.paragraph}>
            <span className={styles.dropCap}>O</span> trajeto de pouco mais de
            20 quilômetros que separa a capital de Sergipe, Aracaju, do
            município de Laranjeiras, é marcado por uma transição entre a
            modernidade urbana e o peso da história colonial sergipana. Logo na
            entrada, os muros pintados não deixam dúvidas sobre a vocação do
            lugar: cultura. Laranjeiras não é apenas feita da arquitetura
            colonial que conta a história do local, é um território onde a
            cultura popular pulsa em cada esquina.
          </p>
          <p className={styles.paragraph}>
            A gênese do São Gonçalo em solo brasileiro remete ao projeto
            colonial de evangelização implementado pelos jesuítas europeus.
            Originalmente, a manifestação foi concebida como uma ferramenta
            colonial, utilizada para converter as populações locais e difundir
            os valores do catolicismo sob uma ótica de redenção espiritual. O
            enredo central gira em torno da narração de São Gonçalo, o santo
            marinheiro que, segundo a tradição, utilizava a música e o ritmo
            para atrair mulheres da prostituição, conduzindo-as a uma nova vida
            de devoção.
          </p>

          <figure className={styles.mediaFigure}>
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200"
              alt="Dançadores de São Gonçalo"
            />
            <figcaption>
              Fig. 1 — O movimento circular dos devotos durante a celebração.
            </figcaption>
          </figure>

          <p className={styles.paragraph}>
            Como líder do grupo, o Patrão, Neilton Santana, é responsável por
            guiar os brincantes — os demais dançarinos do grupo — e os músicos,
            para garantir que a tradição seja seguida conforme o que foi
            ensinado pelos antigos. Em meio à formação masculina, surge a figura
            singular da Mariposa, Dona Maria Santana, a única mulher presente na
            celebração.
          </p>
        </section>

        {/* Mapa / Localização */}
        <section className={styles.mapSection}>
          <div className={styles.mapBox}>
            <MapPin size={24} className={styles.mapIcon} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.341492062325!2d-37.17134375!3d-10.82015625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7103233c467972d%3A0x6b696f80d7c6742a!2sLaranjeiras%2C%20SE!5e0!3m2!1spt-BR!2sbr!4v1675865423000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
            <span className={styles.mapCaption}>
              Localização: São Cristóvão e Laranjeiras, berços da tradição.
            </span>
          </div>
        </section>

        {/* Citação / Pull Quote */}
        <section className={styles.quoteSection}>
          <motion.div
            whileInView={{ scale: 1.05 }}
            className={styles.pullQuote}
          >
            "Inderê mamãe Zambi
            <br />
            mãe Zambi oi ela ai <br />
            Inderê mamãe Zambi
            <br />
            oi ela ai
            <br />
            Inderê Mamãe Zambi"
          </motion.div>
        </section>

        {/* Audio Box */}
        <section className={styles.audioSection}>
          <div className={styles.audioPlayer}>
            <div className={styles.audioLabel}>
              <Music size={16} /> OUÇA: CÂNTICO DE ENTRADA
            </div>
            <audio controls className={styles.nativeAudio}>
              <source src="/assets/sao_goncalo/audio01.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </section>

        {/* Carrossel Interativo */}
        <section className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <div className={styles.slideWrapper}>
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                src={carouselImages[currentSlide]}
                alt="Galeria São Gonçalo"
              />
            </div>
          </div>
          <p className={styles.carouselCaption}>
            Deslize para ver mais momentos da celebração.
          </p>
        </section>

        {/* Documentário Link Card */}
        <section className={styles.docLinkSection}>
          <Link to="/especiais" className={styles.docCard}>
            <div className={styles.docIcon}>
              <Film size={32} />
            </div>
            <div className={styles.docInfo}>
              <strong>ASSISTA AO DOCUMENTÁRIO COMPLETO</strong>
              <span>
                "Os Passos de Gonçalo" — Disponível na seção Especiais.
              </span>
            </div>
          </Link>
        </section>

        {/* Bloco Final */}
        <section className={styles.footerNote}>
          <p className={styles.paragraph}>
            O São Gonçalo da Mussuca mantém, por mais de quatro décadas, sua
            tradição viva. Ao articular cultura e fé em apresentações por todo o
            estado de Sergipe, o grupo evidencia o compromisso com as raízes da
            dança.
          </p>
        </section>
      </main>
    </motion.div>
  );
}
