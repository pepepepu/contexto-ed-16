import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../entrevistas.module.css";
import { Carousel } from "../../../components";
import { Denuncias } from "../../../components/Denuncias";
import { Glossario } from "../../../components/Glossario";

import hero from "../../../assets/afoxe/hero.jpg";
import img01 from "../../../assets/afoxe/img01.jpg";
import img02 from "../../../assets/afoxe/img02.jpg";
import img04 from "../../../assets/afoxe/img04.jpg";
import infografico from "../../../assets/afoxe/imgInfografico.png";

import imgC01 from "../../../assets/afoxe/imgC01.jpg";
import imgC02 from "../../../assets/afoxe/imgC02.jpg";
import imgC03 from "../../../assets/afoxe/imgC03.jpg";
import imgC04 from "../../../assets/afoxe/imgC04.jpg";
import imgC05 from "../../../assets/afoxe/imgC05.jpg";
import imgC06 from "../../../assets/afoxe/imgC06.jpg";
import imgC07 from "../../../assets/afoxe/imgC07.jpg";
import imgC08 from "../../../assets/afoxe/imgC08.jpg";
import imgC09 from "../../../assets/afoxe/imgC09.jpg";
import imgC10 from "../../../assets/afoxe/imgC10.jpg";

const IMAGES = {
  hero: hero,
  sec1_img1: img01,
  sec2_img1: img02,
  sec4_img1: img04,
  infografico: infografico,
  carousel_sec4: [
    imgC01,
    imgC02,
    imgC03,
    imgC04,
    imgC05,
    imgC06,
    imgC07,
    imgC08,
    imgC09,
    imgC10,
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export function Afoxe() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.pageContainer}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={styles.backBtnWrapper}
      >
        <Link to="/" className={styles.backBtn}>
          <ArrowLeft size={18} strokeWidth={3} /> VOLTAR
        </Link>
      </motion.div>

      <header className={styles.articleHero}>
        <motion.div
          className={styles.heroBackground}
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            y: yHero,
            scale: scaleHero,
            opacity: opacityHero,
          }}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={styles.heroTitle}
          >
            Afoxé em Sergipe preserva raízes de fé e cultura
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.heroSubtitle}
          >
            A manifestação que leva a força, a fé e o ritmo dos terreiros para
            as ruas.
          </motion.p>
        </div>
      </header>

      <main className={styles.contentContainer}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.articleMeta}
        >
          <span>
            Por:{" "}
            <strong>
              Carolina Cardoso, Jairo Santos, Marcus Trindade e Yuri Barbosa
            </strong>
          </span>
        </motion.div>

        <AnimatedSection className={styles.contentBlock}>
          <p>
            O som dos atabaques chega antes do cortejo. Na Orla de Atalaia, em
            Aracaju, o ritmo do ijexá se espalha pela avenida, acompanhado pelo
            agogô e pelo xequerê. Ao se deslocar nas ruas da cidade, o afoxé
            transmite cada elemento da religiosidade afro-brasileira para além
            dos muros dos terreiros. A cada passo dado no chão, afirma que
            aquelas pessoas estão ali para serem vistas, ouvidas e respeitadas
          </p>
          <p>
            O professor Fernando Aguiar, do Departamento de Museologia da
            Universidade Federal de Sergipe e vice-presidente do Conselho
            Estadual de Cultura, explica que o afoxé pode ser entendido como
            candomblé de rua: é “o momento em que a dimensão afro-religiosa sai
            dos espaços tradicionais para ocupar as ruas, buscando visibilidade,
            reconhecimento e o combate ao racismo religioso”.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.sec1_img1}
              alt="Imagem do Afoxé nas ruas"
              loading="lazy"
            />
            <figcaption>
              O professor Fernando Aguiar explica a história do afoxé no estado
              de Sergipe. Foto: Jairo Santos
            </figcaption>
          </motion.figure>

          <p>
            Existe também uma confusão com outras manifestações culturais. “Nem
            todo grupo percussivo ou bloco afro é um afoxé”, afirma Aguiar.
            Diferente dos blocos afro, que atuam principalmente no campo
            cultural e identitário, o afoxé mantém fundamento religioso e nasce
            no terreiro, transformando o cortejo em uma extensão do espaço
            sagrado.
          </p>

          <Glossario />
          <p>
            É a partir desse contexto que as histórias de resistência do afoxé
            em Sergipe são vividas, e ainda que essa presença ocupe ruas e
            avenidas da cidade, nem sempre aparece nos registros oficiais, pois
            não há cadastro estadual ou levantamento público que contabilize
            esses grupos.
          </p>
          <p>
            Espalhados por diversos municípios sergipanos como Aracaju, Nossa
            Senhora do Socorro, São Cristóvão e Barra dos Coqueiros, os
            terreiros seguem atuando como espaços de preservação da
            ancestralidade, da música e da oralidade. Como persiste a
            invisibilidade desses locais, o cortejo acaba funcionando como uma
            estratégia de afirmação pública da fé e da identidade afro.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            O SURGIMENTO DO AFOXÉ EM SERGIPE
          </h2>

          <p>
            Para entender como o afoxé passou a circular nas ruas de Sergipe, é
            preciso voltar cerca de 20 anos atrás. No bairro Atalaia, na orla da
            capital, nasceu o Afoxé Omo Oxum, criado pela Yalorixá Marizete
            Silva Lessa, do terreiro Abassá São Jorge. Aguiar relata que a
            Yalorixá articulou-se com o então prefeito de Aracaju, Marcelo Déda,
            para colocar o afoxé na rua.
          </p>
          <p>
            A escolha da Orla de Atalaia, em vez do centro da cidade, não foi
            aleatória. O objetivo era garantir maior visibilidade, ampliando
            alcance simbólico para o cortejo que, a partir daquele momento,
            passou a acontecer no dia 8 de dezembro, data dedicada a Oxum e
            também à padroeira da capital, Nossa Senhora da Conceição. Nos
            primeiros anos, o Afoxé Omo Oxum promovia o empoderamento das
            mulheres que formavam o grupo. Elas eram pretas, marisqueiras,
            catadoras de mangaba e de terreiro.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.sec2_img1}
              alt="Origens em Sergipe"
              loading="lazy"
            />
            <figcaption>
              Cortejo do Afoxé Omo Oxum durante uma das edições nas avenidas da
              capital. Foto de acervo pessoal, cedida por Sara Lessa.
            </figcaption>
          </motion.figure>

          <p>
            Segundo Fernando Aguiar, apenas mulheres podiam desfilar dentro das
            cordas que circundavam o trio, enquanto os homens ocupavam funções
            de apoio externo. Também havia forte participação de comunidades
            quilombolas, como o Quilombo da Mussuca, em Laranjeiras, porém
            dificuldades logísticas foram surgindo e acabaram inviabilizando a
            permanência constante desse grupo no cortejo.
          </p>
          <p>
            Com o passar dos anos, para acessar recursos públicos e políticas
            culturais, o afoxé Omo Oxum precisou se institucionalizar. Isso
            significou adequação a exigências burocráticas, como criação de uma
            associação formal, com estatuto, regimento interno e cadastro de
            pessoa jurídica (CNPJ).
          </p>
          <p>
            Em 2009, o afoxé Omo Oxum, passou a integrar o{" "}
            <a
              href="https://aleselegis.al.se.leg.br/Arquivo/Documents/legislacao/html/L71062010.html?identificador=35003300300035003A004C00"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#FC8400" }}
            >
              Calendário Cultural de Sergipe
            </a>
            , mostrando sua importância como cultura afro-brasileira. Até os
            dias atuais, o afoxé Omo Oxum, mantém seu caráter comunitário e
            aberto, acolhendo mulheres quilombolas, movimentos sociais e a
            comunidade LGBTQIAPN+, reafirmando que o afoxé é, antes de tudo, um
            espaço de acolhimento.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>ALÉM DA FÉ</h2>
          <p>
            Marcelo Alves, conhecido como Mestre Neném, relata que o primeiro
            bloco afro de Sergipe surgiu em 1987, no bairro Cirurgia, a partir
            de um grupo de capoeira. Naquela época, a localidade era conhecida
            pela violência urbana e os integrantes do “Unido do Quilombo”
            formavam um movimento de resistência à criminalidade.
          </p>
          <p>
            Neném e seus companheiros, que faziam parte do grupo, tornaram-se
            mestres na música percussiva. No entanto, em 2010, eles perceberam
            que o ambiente estava sendo transformado em “colégio eleitoral”.
            "Decidimos nos afastar e seguir caminhos diferentes," explica. Foi
            assim que nasceu o Descidão dos Quilombolas, que, embora não seja um
            afoxé e, sim, uma banda de axé, preserva referências da manifestação
            religiosa.
          </p>
          <p>
            O grupo reverencia Exu, divindade que representa o elo de
            comunicação entre os homens e os Deuses, oferecendo-lhe o Padê, uma
            mistura de água, farofa de dendê, cachaça e mel. “Fazemos oferendas
            a Exu, pedindo sua proteção”, explica Dingo Bala, um dos membros
            fundadores, destacando a importância dessa tradição. Invocar Exu é
            também pedir a permissão de Ayangalu, divindade do som dos tambores,
            para que eles possam ecoar nas manifestações fora do terreiro.
          </p>
          <p>
            Além disso, o grupo se dedica a desmistificar a imagem negativa
            associada ao Candomblé, educando mestres e alunos - porque nem todos
            os integrantes são do axé - sobre essas práticas e promovendo o
            respeito à religião. "Muitas pessoas pensavam que Exu era o mal, mas
            conseguimos mostrar que é diferente", comenta Dingo Bala.
          </p>
          <p>
            O Descidão dos Quilombolas também ajuda a demonstrar como a cultura
            afro-brasileira se organiza fora do campo estritamente espiritual.
            Mais de 200 integrantes, por exemplo, participam de projetos sociais
            como o “Descidão por Elas” e o “Descidão Comunidade”, que promovem
            cultura e solidariedade ao longo do ano.
          </p>
          <p>
            Apesar da relevância cultural das bandas de axé, muitos grupos só
            recebem atenção durante o mês da Consciência Negra. “É complicado
            convencer instituições ricas a valorizar nosso trabalho”, lamenta
            Dingo, sublinhando a urgência de um reconhecimento contínuo da
            cultura afro-brasileira e não apenas nesse período.
          </p>

          <motion.figure
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ margin: "5rem 0" }}
          >
            <div className={styles.videoContainer} style={{ margin: 0 }}>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/7r4nXZW06Os?si=F_o7J833ojyPiZml"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <figcaption
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "1rem",
                color: "#666",
                marginTop: "1.2rem",
                borderLeft: "5px solid var(--cor-primary)",
                paddingLeft: "1rem",
                fontStyle: "italic",
              }}
            >
              Durante a entrevista, Mestre Neném e Dingo Bala mostram o toque do
              instrumento ataque. Vídeo: Jairo Santos e Yuri Barbosa
            </figcaption>
          </motion.figure>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            ENFRENTAMENTO Á INTOLERÂNCIA RELIGIOSA
          </h2>
          <p>
            Na cidade de Nossa Senhora do Socorro, o Afoxé de Odé fez seu
            primeiro cortejo em 2011. A Ìyá Silvia conta que teve receio por
            conta da intolerância religiosa, mas seguiu adiante quando o Orixá
            Odé confirmou sua vontade de realização. Com apenas dois meses de
            preparação, o cortejo chegou à avenida com o apoio de muitas
            pessoas, transformando o receio inicial em um momento de libertação
            e força.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.sec4_img1}
              alt="Respeito no cortejo"
              loading="lazy"
            />
            <figcaption>
              Ìyá Silvia comenta sobre a realização dos cortejos do Afoxé de Odé
              em Nossa Senhora do Socorro. Foto: Marcus Trindade
            </figcaption>
          </motion.figure>

          <p>
            Com o tempo, o evento cresceu, consolidou-se e hoje atrai o povo do
            axé, simpatizantes e até caravanas de outros estados, como Alagoas.
            Atualmente, o afoxé é reconhecido pela{" "}
            <a
              href="https://doem.org.br/se/nossasenhoradosocorro/diarios/previsualizar/wWakwba3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#FC8400" }}
            >
              lei municipal Nº 1.666/2023
            </a>{" "}
            e integra o calendário cultural da cidade de Nossa Senhora do
            Socorro. “Os comerciantes abrem seus estabelecimentos, os ambulantes
            ganham dinheiro. É um evento que faz parte da cidade”, destaca Ìyá
            Silvia.
          </p>
          <p>
            Segundo a Ìyá, todas as edições contam com estrutura profissional,
            envolvendo áreas como saúde, segurança e meio ambiente. Nada no
            afoxé é feito de forma improvisada, existem diversos profissionais
            envolvidos, incluindo costureiras para as roupas, um balé com
            coreógrafo próprio e uma banda completa liderada pelo Mestre Dingo,
            que faz parte do Descidão dos Quilombolas.
          </p>
          <p>
            Antes do cortejo, o próprio Orixá Odé é consultado para saber se ele
            deseja o evento e o cortejo somente é realizado após sua
            confirmação. Antes de ir às ruas, a Ìyá Silvia fala que as
            obrigações, os pedidos de licença e os agradecimentos ao pai maior
            Deus e aos Orixás Oxóssi e Oxum são realizados.
          </p>

          <Carousel
            images={IMAGES.carousel_sec4}
            legenda="Cortejo do Afoxé de Odé em Nossa Senhora do Socorro, símbolo de resistência à intolerância religiosa."
          />

          <p>
            A Ìyá Silvia relembra que, nos primeiros anos, os comerciantes
            fechavam suas portas e pessoas de outras religiões tentavam impedir
            o cortejo. Ainda hoje, o grupo sofre intimidação e violência verbal.
            “Eles invadem nosso espaço, entram para entregar papel e dizer que
            somos os diabos”, relata. Mesmo sofrendo ataques, o cortejo do afoxé
            procura respeitar à comunidade e, ao ocupar as ruas e passar por
            hospitais e igrejas abertas, reduz o volume do som.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.pullQuote}
          >
            "A rua é do povo, mas o chão que pisamos no Afoxé é solo sagrado do
            terreiro." -Ìyá Silvia
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>QUANDO A FÉ VIRA ALVO DE ÓDIO</h2>
          <p>
            Os episódios de intolerância relatados por Ìyá Silvia não são casos
            isolados. Eles são legalmente reconhecidos como racismo religioso.
            As cartilhas{" "}
            <a
              href="https://criola.org.br/wp-content/uploads/2018/06/cartilha_racismo_religioso_online_distribuicao.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#FC8400" }}
            >
              “Terreiros em luta: caminhos para o enfrentamento ao racismo
              religioso”
            </a>
            , do Ilê Axé Omiojuarô (RJ), Ilê Axé Omi Ogun siwajú (BA) e Criola
            (RJ), e{" "}
            <a
              href="https://www.mpmg.mp.br/data/files/F6/C6/AB/BF/3027B8100ACB4BA8760849A8/Sobre_Tons_pilula_6.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#FC8400" }}
            >
              “Sobre tons”
            </a>{" "}
            do Ministério Público do Estado de Minas Gerais, explicam que o
            racismo religioso é uma forma de violência que se manifesta por meio
            de discriminação e ódio contra determinadas crenças e aos seus
            territorios sagrados.
          </p>
          <p>
            Mesmo com a Constituição Federal de 1988 assegurando a liberdade de
            culto, as religiões de matriz africana são as mais atacadas por essa
            intolerância no país. As agressões são praticadas das mais diversas
            formas, desde o uso de termos pejorativos, como “macumbeiros”, até a
            vandalização de terreiros. A demonização dessas práticas religiosas
            acaba causando apagamento e invisibilização de saberes ancestrais:
            língua, dança, culinária e música.
          </p>
          <p>
            De acordo com o Censo 2022 do Instituto Brasileiro de Geografia e
            Estatística (IBGE), as religiões Umbanda e Candomblé representam
            1,05% dos grandes grupos religiosos no Brasil, um total de 1.849.824
            pessoas. Apesar de serem as religiões com menor porcentagem de
            adeptos, são elas que lideram as denúncias de intolerância: a
            Umbanda reúne 228 registros, seguida pelo Candomblé (161) e por
            ocorrências classificadas como Umbanda e Candomblé (47), além de
            outras religiosidades afro-brasileiras (40). Segundo o Ministério
            dos Direitos Humanos e da Cidadania (MDHC), 2.774 denúncias de
            intolerância religiosa foram registradas pelo Disque 100 entre
            janeiro de 2025 e janeiro de 2026.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.infografico}
              alt="Infográfico de denúncias"
              loading="lazy"
            />
            <figcaption>Visualidade: Marcus Trindade</figcaption>
          </motion.figure>

          <p>
            A constituição de 1988 deu salvaguarda à liberdade de crença,
            manifestação religiosa e organização, o que assegura que ritos e
            cultos possam ser realizados em espaços públicos e privados sem
            discriminação e também garante que qualquer cidadão possa criar,
            administrar instituições e templos de acordo com suas próprias
            tradições e regras. No ano de 2007, através da{" "}
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11635.htm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "#FC8400" }}
            >
              lei nº 11.635/2007
            </a>
            , instituiu em 21 de janeiro o Dia Nacional de Combate à
            Intolerância Religiosa, medida que reforça a necessidade do debate e
            o enfrentamento aos casos de discriminação e violência motivados por
            crença, ainda recorrentes no país.
          </p>
          <p>
            Para buscar auxílio em situações de violação da liberdade religiosa,
            qualquer pessoa pode contar com a Ouvidoria Nacional de Direitos
            Humanos (ONDH), pelo Disque 100. Além disso, diversas instituições
            dão suporte nesse tipo de contexto como Ministério Público,
            Defensoria Pública, Ordem dos Advogados do Brasil (OAB), delegacias
            de polícia e núcleos de assistência jurídica gratuita de diversas
            universidades públicas e privadas.
          </p>

          <Denuncias />

          <p>
            O afoxé não é apenas uma tradição, é uma forma de resistência e
            cidadania. Ao ocupar as ruas, os cortejos reafirmam a importância da
            liberdade religiosa e da diversidade cultural, mostrando que
            respeitar as religiões de matriz africana é um compromisso de toda a
            sociedade. Cada passo no ijexá, cada ritual e cada denúncia
            registrada são formas de mostrar e manter viva a ancestralidade, e
            de garantir que futuras gerações também possam celebrar sua fé sem
            medo ou discriminação.
          </p>
        </AnimatedSection>
      </main>
    </div>
  );
}

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} variants={fadeInUp}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={fadeInUp}>{children}</motion.div>
      )}
    </motion.section>
  );
}
