import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../entrevistas.module.css";

import imagem01 from "../../../assets/taieiras/imagem01.png";
import imagem02 from "../../../assets/taieiras/imagem02.jpg";

import imagemCarrosel01 from "../../../assets/taieiras/imagemCarrosel01.jpg";
import imagemCarrosel02 from "../../../assets/taieiras/imagemCarrosel02.jpg";
import imagemCarrosel03 from "../../../assets/taieiras/imagemCarrosel03.jpg";
import imagemCarrosel04 from "../../../assets/taieiras/imagemCarrosel04.jpg";

import imagemCarrosel02_01 from "../../../assets/taieiras/imagemCarrosel02_01.jpg";
import imagemCarrosel02_02 from "../../../assets/taieiras/imagemCarrosel02_02.jpg";

import imagem04 from "../../../assets/taieiras/imagem04.png";
import imagem03 from "../../../assets/taieiras/imagem03.jpg";
import imagem05 from "../../../assets/taieiras/imagem05.jpg";

const IMAGES = {
  hero: imagemCarrosel03,
  secMapa: imagem01,
  secAntropologia_img: imagem02,
  secPoderPublico_img: imagem04,
  secCiza_img: imagem05,
  secFuturo_img: imagem03,

  carousel_sagrado: [
    imagemCarrosel01,
    imagemCarrosel02,
    imagemCarrosel03,
    imagemCarrosel04,
  ],
  carousel_taieiras: [imagemCarrosel02_01, imagemCarrosel02_02],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export function Taieiras() {
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
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.heroCat}
          >
            CULTURA POPULAR
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={styles.heroTitle}
          >
            TAIEIRAS
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.heroSubtitle}
          >
            Apesar da força cultural e religiosa, o grupo enfrenta desafios.
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
            Por <strong>Redação Contexto</strong>
          </span>
          <span>•</span>
          <span>15 min de leitura</span>
        </motion.div>

        <AnimatedSection className={styles.contentBlock}>
          <p>
            Logo ao amanhecer do primeiro domingo do ano, próximo ao dia de
            Santos Reis, a rua Umbelina é o palco principal do Encontro Cultural
            de Laranjeiras, em Sergipe. Ali, na frente da casa amarela com
            portas e janelas vermelhas, os marinheiros da Chegança, os
            participantes do Cacumbi e outros grupos da cidade se reúnem para
            cantar e dançar enquanto esperam a saída das moças com blusas
            vermelhas e saias brancas, as Taieiras.
          </p>
          <p>
            A casa amarela tem nome: Irmandade Nagô Santa Bárbara Virgem,
            terreiro do grupo que não abre mão de ser tradicionalmente
            religioso, preservando a linhagem africana. Dali, as Taieiras se
            preparam para percorrer as ruas da cidade sergipana, guiando todos
            os outros grupos até a Igreja de São Benedito e Nossa Senhora do
            Rosário, os dois santos católicos dos negros, louvados por elas.
            Debaixo do sol daquele domingo, os fiéis, moradores e turistas
            também acordaram cedo para subir as escadarias louvando junto ao
            grupo e correr para garantir seu espaço na igreja para assistir ao
            ponto alto da festa: a coroação da rainha das Taieiras pelas mãos do
            padre, simbolizando a abertura do Encontro Cultural.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://uploads.knightlab.com/storymapjs/827a2a2f8459857e9dc8f66791c44566/mapa-taieiras/index.html"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <span className={styles.mapCaption}>
              MAPA MOSTRANDO O NOME DA RUA, COM UM DESTAQUE À FRENTE DA
              IRMANDADE QUE ELES SE REÚNEM + TRAÇANDO O CAMINHO ATÉ A IGREJA
            </span>
          </motion.div>

          <p>
            Apesar de carregar uma extensa tradição, quem acompanhou o cortejo
            sentiu falta de uma pessoa importante na história das Taieiras:
            Bárbara Cristina, de 38 anos e líder do grupo há 24, não estava
            vestida para louvar como em todos os 35 anos desde a sua entrada. De
            forma imprevista, questões de saúde levaram ao seu afastamento e
            sinalizaram a necessidade de uma futura transição. Em um momento de
            incertezas, surge o questionamento: como será o futuro do grupo?
            Nesta reportagem, as Taieiras serão entendidas para além dos seus
            símbolos, mas das percepções de quem luta para manter a tradição
            viva.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>ORIGENS</h2>

          <p>
            O primeiro cenário dessa história é o Brasil Colônia, período em que
            a dominação dos europeus sobre os povos originários e os
            escravizados trazidos do continente africano, gerou uma relação
            unilateral que forçou tradições nativas a se adaptarem aos moldes
            eurocêntricos cristãos para garantir sua sobrevivência física,
            cultural e espiritual. Com o passar das gerações, alguns dos
            elementos cristãos permaneceram em religiões de matriz africana, mas
            ainda preservando a tradição central: o culto aos orixás.
          </p>
          <p>
            O segundo cenário é Laranjeiras, município da Grande Aracaju,
            considerado por muitos berço da cultura popular sergipana, título
            recebido pela alta concentração de grupos folclóricos e
            manifestações de diversas religiões. A rua daquela casa amarela que
            os grupos se concentram antes da procissão carrega um nome forte:
            Rua Umbelina Araújo, conhecida como Mãe Bilina. Nascida em
            Laranjeiras e filha de uma ex-escravizada, herdou da mãe a liderança
            da Taieira e do Nagô.
          </p>
          <p>
            Em relato dado à antropóloga sergipana Beatriz Góis Dantas, na obra
            “A Taieira de Sergipe”, em 1969, Umbelina explicou que, apesar da
            dupla liderança, o Nagô e as Taieiras são diferentes. “A Taieira é
            feita para São Benedito e o Nagô é pros santos [orixás] da África”,
            destaca. Mesmo assim, existe a obrigatoriedade de que a Lôxa lidere
            tanto as Taieiras, como o Nagô, o que não se estende às
            participantes do grupo, que não precisam ser do Nagô para dançar.
            Assim, a figura de Mãe Bilina foi responsável por dar outros rumos
            ao Nagô e às Taieiras, como a associação entre as cores nas vestes
            das Taieiras aos orixás africanos, que se mantém até hoje.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secMapa}
              alt="Beatriz Góis Dantas"
              loading="lazy"
            />
            <figcaption>Fig. 1 — Registros antropológicos.</figcaption>
          </motion.figure>

          <p>
            Desde então, duas gerações vieram após Bilina: as Taieiras de Maria
            de Lourdes e agora, as de Bárbara Cristina. Beatriz Góis Dantas
            explica que a escolha da nova Lôxa (assim chamada a líder do Nagô)
            parte da vontade dos orixás. “Não é simplesmente querer assumir, tem
            que ter a aprovação dos orixás para ser indicada. Por exemplo, o
            processo de sucessão dos terreiros já passou por várias
            dificuldades, como no caso de Bilina”, comentou.{" "}
          </p>
          <p>
            Segundo a antropóloga, desde a época de Mãe Bilina, as pessoas ao
            redor imaginavam que a indicada seria a que tivesse mais afinidade
            com a líder. Mas como a escolha não é feita pela Lôxa, nem sempre a
            indicada pelos orixás estava disposta à assumir o posto e viver sob
            regras, como a preservação da virgindade, uma obrigatoriedade que
            atualmente se estende às participantes do grupo. Hoje, com o estado
            de saúde de Bárbara, a passagem de liderança ainda não está em
            processo, segundo ela, e não citou possíveis pessoas para o cargo.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>SAGRADO E PROFANO</h2>

          <ImageCarousel images={IMAGES.carousel_sagrado} />

          <p>
            Nas janelas vermelhas da Irmandade, está Bárbara Cristina. Com o
            olhar embargado, observou a caminhada das poucas meninas que ainda
            permanecem no grupo até a Igreja de São Benedito e Nossa Senhora do
            Rosário. A sensação era de que entre o muro de sua casa e a rua,
            estava o presente, o passado e o incerto futuro. Mesmo assim, as
            meninas tinham de seguir com a tradição, a apresentação já havia
            sido marcada pelo padre da igreja e os outros grupos aguardavam
            ansiosamente por sua saída para iniciar os louvores.
          </p>
          <p>
            Chegando à igreja, o padre começa o sermão, e no momento da
            coroação, as três taieiras mais antigas na religião sentam nas
            cadeiras perto do púlpito e, ao som de louvores católicos, o padre
            Cleberton Lima participa do ritual. A coroa de prata, que está na
            cabeça de Nossa Senhora do Rosário, passa, de forma breve, na cabeça
            das três mais velhas. A tradição seguiu, para todos que ali
            esperavam dentro e fora da igreja. Durante o sermão, o padre
            relembrou que em Laranjeiras, “fé e credo" se entendem e que ali era
            possível que todos existissem em comum e bom acordo. Sem a Lôxa, o
            momento da coroação terminou com a saída da igreja para voltar para
            a Irmandade em cortejo, não havendo a tradição de dançar na frente
            das casas que convidasse o grupo.
          </p>
          <p>
            A ideia de interdependência em Laranjeiras, como explica padre
            Cleberton, surge da própria realidade do município, onde fé e
            cultura se entrelaçam diariamente. "Como não dialogar se são as
            mesmas pessoas que encontraremos daqui a pouco na fila do pão?",
            questiona. Para ele, a interação vai muito além da coroação ou do
            Encontro Cultural: acontece durante o ano todo, pois mesmo com
            identidades religiosas bem definidas e distintas, ninguém vive
            isolado ou acima do outro, porque a comunidade se sustenta no
            coletivo e no respeito mútuo.
          </p>
          <p>
            O pensamento cultivado pelo sacerdote traduz a energia da cidade
            histórica: a possibilidade de exercer a sua fé, qualquer que seja
            ela. Essa é a energia que exala na semana do Encontro Cultural de
            Laranjeiras e faz com que fiéis acordem cedo, caminhem pelas ruas da
            cidade e esperem três horas de missa para ver a coroação das
            Taieiras. Essa longevidade da tradição também se deve ao poder e
            legado de Mãe Bilina. “Ela era uma articuladora muito grande,
            conseguia estabelecer alianças com o padre, com os professores, com
            fazendeiros importantes, com políticos para conseguir respeito e era
            uma pessoa respeitadíssima na comunidade”, afirma a antropóloga
            Dantas.{" "}
          </p>
          <p>
            Para turistas, estudantes e pesquisadores, a coroação pode ser
            considerada extraordinária. Entender como duas religiões tão
            diferentes podem conviver tão bem, pode demandar tempo e longas
            conversas com especialistas, ainda mais considerando a pureza do
            Nagô, segundo Bárbara. “A gente diz que o nagô é puro porque ele não
            tem mistura. Mistura é ter características de outra religião dentro
            do Nagô. O mundo [Nagô] sempre se manteve tradicional, com as suas
            características originárias da África”, explica Bárbara. Hoje,
            entende-se que não há espaço para o sincretismo, mas para a
            coexistência e o entendimento que o respeito sobre a fé do outro é
            ordinário.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            A RELAÇÃO COM A ANTROPOLOGIA DE BEATRIZ GÓIS DANTAS
          </h2>

          <p>
            Além da articulação de Umbelina, da persistência de Bárbara e do bom
            relacionamento com o padre local, parte da conservação e divulgação
            dos valores das Taieiras e do Nagô ao longo das gerações se deve ao
            estudo antropológico feito por Beatriz Góis Dantas, que inclusive,
            baseou boa parte da pesquisa feita para essa reportagem. Nascida no
            município de Lagarto/SE, Beatriz, hoje com 84 anos, foi professora
            na área de Ciências Sociais da Universidade Federal de Sergipe
            (UFS).
          </p>
          <p>
            Apesar de nunca ter sido uma Taieira ou parte do Nagô, seu interesse
            pelo grupo surgiu entre as décadas de 1960 e 1970, quando foi
            instigada por um de seus alunos a conhecer os grupos de Laranjeiras.
            A partir daí, conheceu Umbelina, personagem principal de sua
            primeira obra sobre o grupo: “A Taieira de Sergipe”, em 1972. Nele,
            são trazidos vários detalhes sobre a Taieira de Laranjeiras, mas
            também sobre a de Lagarto e de São Cristóvão, que apesar de
            existentes, não possuem um caráter fortemente religioso, o que se
            tornou uma exclusividade do grupo de Laranjeiras. Além da obra, a
            antropóloga produziu o primeiro documentário sobre o grupo. Da
            história de Bilina às roupas e aos cantos, Beatriz faz seu papel
            como antropóloga ao resgatar a história do grupo e o que motiva suas
            tradições.{" "}
          </p>
          <p>
            Mas, dos tempos em que Beatriz esteve em trabalho de campo até hoje,
            as Taieiras passaram por mudanças. Em seus estudos, Beatriz destaca
            que o calendário Nagô era muito rigoroso e, só após esses
            compromissos religiosos, as Taieiras poderiam se apresentar. “Bilina
            tinha um ciclo de festas, um calendário a cumprir o ano inteiro.
            Elas só faziam as festas das Taieiras depois que terminassem de
            cumprir as obrigações com o Nagô, que iam até o mês de outubro,
            quando eles faziam a Festa do Inhame. E aí sim, o terreiro era
            fechado e elas iam cuidar das Taieiras, cuja primeira apresentação
            era feita para São Benedito e Nossa Senhora do Rosário, no dia 6 de
            janeiro, Dia de Santos Reis”, enfatizou.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secAntropologia_img}
              alt="Beatriz Góis Dantas"
              loading="lazy"
            />
            <figcaption>Fig. 1 — Registros antropológicos.</figcaption>
          </motion.figure>

          <p>
            Hoje, as Taieiras não seguem mais esse calendário estrito, se
            apresentando no início do ano, obrigatoriamente, e em algumas outras
            vezes ao longo do ano, quando o padre agenda as apresentações,
            segundo Dayana Aragão, ex-taieira e mãe de duas moças do grupo. Além
            disso, a questão da virgindade, originalmente obrigatória apenas
            para a Lôxa, passou a ser regra para as demais participantes. “Eu
            não sei responder quanto ao futuro do grupo, mas vai mudar. E
            continua mudando. Até porque, se não mudar, vai desaparecer”, diz
            Beatriz, segundo sua experiência no estudo de grupos culturais de
            fé.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>O QUE PENSAM AS TAIEIRAS</h2>

          <p>
            Ao conhecer as moças que permanecem no grupo, uma surpresa: das
            poucas jovens que ainda participam, boa parte delas mora em Nossa
            Senhora do Socorro, mesmo que o grupo e a Irmandade sejam de
            Laranjeiras. No dia da coroação, os outros grupos cantaram por mais
            tempo na frente da Irmandade, esperando a saída das Taieiras, que
            entre ajustes na costura das saias e ajuda para pentear os cabelos,
            aguardavam a chegada das demais.
          </p>
          <p>
            Segundo Lorena Araújo, uma das integrantes do grupo, nem todas
            conseguem participar do rito porque, além de muitas serem crianças
            mais novas e morarem em outros municípios, também é cansativo.
            “Todos os anos, a gente sai de manhã, assiste a missa e passa na
            casa das pessoas que chamam a gente para dançar. Depois, a gente vem
            dançando até chegar aqui. Almoçamos e, umas 13h ou 14h, a gente vai
            dançando para a procissão e volta dançando para casa. Querendo ou
            não, para crianças é mais puxado”, explica.
          </p>
          <p>
            Lorena, hoje com 17 anos, conta que é uma taieira durante toda a
            vida, se recorda de não ter participado apenas em um ou dois anos,
            tradição passada por sua mãe, Dayana, que mesmo não sendo mais uma
            taieira, continua sendo parte da tradição ao incentivar a
            participação das filhas e continuar ajudando na manutenção, como na
            costura das roupas, no acompanhamento durante o cortejo e no resgate
            dos ritos, ao entoar junto ao grupo. Mesmo sendo passado através das
            gerações, Lorena acredita que a diminuição das meninas pode ser
            porque muitas não querem abdicar da mesma forma que as mães, tias ou
            avós. “Se você parar para olhar, a história das Taieiras é muito
            bonita, mas está se perdendo com o tempo, porque as meninas, além de
            não quererem ir, se perdem muito cedo [sobre a virgindade].”
          </p>

          <ImageCarousel images={IMAGES.carousel_taieiras} />

          <p>
            Enquanto que, para Lorena, ser uma taieira não exige abdicações, a
            veterana Maria do Espírito Santo discorda. Conhecida como Ciza, tem
            73 anos e está no grupo desde 2002. Sua entrada no grupo não foi
            através de sua mãe, como foi o caso de Lorena: Ciza foi para a
            Irmandade cuidar de Bárbara Cristina, que havia acabado de perder a
            mãe. Hoje, Bárbara é mestra e quem guia o grupo, mas tem ao seu lado
            Maria, como coordenadora. Na 50° edição do Encontro Cultural de
            Laranjeiras, sem a presença de Bárbara, foi Ciza que acompanhou as
            meninas até a igreja e deu continuidade à tradição, mesmo com a
            muleta ao lado. Foi ela também a responsável por informar que não
            iriam dançar nas casas que as chamam como em todos os anos, pela
            ausência da Lôxa.
          </p>
          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secCiza_img}
              alt="Beatriz Góis Dantas"
              loading="lazy"
            />
            <figcaption>Fig. 1 — Registros antropológicos.</figcaption>
          </motion.figure>
          <p>
            “A partir do momento que eu vim para cá morar aqui, a minha vida é
            essa. Tomar conta das taieiras, tomar conta da casa, não tem outra
            vida fora”, Ciza diz, mas não em tom de lamentação. Para ela, a
            abdicação existe, mas fazer parte da história do grupo e manter viva
            a tradição não tem preço. Ao ser perguntada sobre as incertezas
            quanto ao futuro, Maria afirma que existe uma preocupação, mas que
            tem certeza que não irá acabar, e responde de forma inabalável. Ao
            todo, Ciza exerce o papel de coordenadora há 24 anos ao lado de
            Bárbara e pretende permanecer por muitos mais anos.
          </p>
          <p>
            Fora da Irmandade, o historiador e especialista em religiões
            afro-indígenas brasileiras, Gabriel Lourenço, que também é
            secretário adjunto de Igualdade Racial de Laranjeiras, afirma que a
            história deve ser contada e lembrada por gerações, mas que para
            permanecer, as Taieiras devem trabalhar políticas de pertencimento
            para que mais jovens se interessem pela cultura e dentro do próprio
            grupo, difundir as origens do grupo e os valores que carregam.
          </p>
          <p>
            Apesar disso, as Taieiras têm seu espaço entre os moradores, que
            carregam um pertencimento que condiz com o fato de Laranjeiras ser
            conhecida como berço da cultura. A professora Marileide Costa,
            nascida e criada na cidade, como faz questão de destacar, tem 59
            anos e viu o Encontro Cultural nascer em 1975, participando desde os
            oito anos de idade. Por ter morado em grande parte de sua vida
            próximo à Igreja de São Benedito e Nossa Senhora do Rosário, surgiu
            uma curiosidade pelas Taieiras, que a levou a pesquisar mais sobre
            os seus símbolos. Mesmo após se mudar, continua percorrendo o
            trajeto dos cortejos para prestigiar e louvar junto aos grupos.
          </p>
          <p>
            O laranjeirense Adilson Batista lembra que cresceu vendo a cidade
            ser reconhecida por grupos culturais como as Taieiras. Para ele,
            apesar das mudanças ao longo dos anos, ainda acredita na
            continuidade do grupo, sustentada pela transmissão entre gerações.
            Porém, para além disso, avalia que o apoio financeiro é essencial
            para viabilizar os festejos e manter as atividades culturais.{" "}
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>O DEVER DO PODER PÚBLICO</h2>

          <p>
            Os grupos necessitam de mais do que o apoio do público e da
            persistência dos integrantes: é preciso viabilizar a cultura para
            que ela continue existindo de forma democrática. No Brasil, duas
            leis federais se destacam como principais instrumentos de incentivo
            direto: as Leis Paulo Gustavo e Aldir Blanc, incluindo sua segunda
            fase, a Aldir Blanc II. Segundo o Secretário de Cultura de
            Laranjeiras, Leomax Célio, o repasse desses recursos ocorre por meio
            de chamadas públicas organizadas pelo próprio órgão, com vagas e
            valores definidos conforme a legislação vigente e as consultas
            públicas. Esse mecanismo garante que parte do recurso seja destinada
            aos grupos de culturas populares, considerando que “quem sustenta a
            cultura de Laranjeiras” são eles, de acordo com Leomax.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#f0f4f8",
              borderLeft: "4px solid #000",
              padding: "2rem",
              margin: "2.5rem 0",
              borderRadius: "0 8px 8px 0",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <Lightbulb size={24} color="#F59E0B" fill="#F59E0B" />
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  fontWeight: "800",
                }}
              >
                VOCÊ SABIA?
              </h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "1.2rem",
                lineHeight: "1.6",
                fontStyle: "italic",
                color: "#333",
              }}
            >
              A inscrição nas chamadas não é automática, já que depende da
              participação no edital, exigindo o cadastro e o envio de
              documentação, e para ampliar o acesso é disponibilizada também a
              modalidade presencial, com orientação e suporte no processo, já
              que muitos mestres e representantes têm maior familiaridade com o
              atendimento físico e podem enfrentar dificuldades para realizar a
              inscrição de forma digital.
            </p>
          </motion.div>

          <p>
            Além dos repasses federais, Laranjeiras também dispõe de recursos
            próprios destinados ao incentivo às manifestações culturais e
            artísticas. De acordo com a Lei Orçamentária Anual (LOA) de 2025,
            foi previsto o repasse de R$4.482.300,00 para o fortalecimento,
            valorização e promoção da cultura local, garantindo apoio a
            artistas, grupos culturais e iniciativas que preservam a identidade
            e a tradição do município.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secPoderPublico_img}
              alt="Ações do governo"
              loading="lazy"
            />
            <figcaption>Fig. 3 — Restauração do patrimônio.</figcaption>
          </motion.figure>

          <p>
            Leomax Célio conta que existe a doação de indumentárias aos grupos
            folclóricos para o Encontro Cultural, que ocorre de dois em dois
            anos, mas que isso não foi possível para a edição de 2026, por
            questões administrativas, segundo ele, não sendo possível entregar a
            tempo do Encontro Cultural. “Já estamos no processo de uma nova
            licitação e vamos fazer a aquisição ainda este ano”, garante o
            secretário. No caso das Taieiras, foi possível ver, durante a
            preparação para a coroação, uma movimentação das mães e mulheres
            mais velhas para costurar às pressas as saias, blusas e chapéus, que
            já haviam sido utilizados nos anos anteriores, para realizar a saída
            da Irmandade com os trajes que louvam aos orixás.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            ENTRE PASSADO E FUTURO, O PRESENTE
          </h2>

          <p>
            Naquele primeiro domingo do ano, a ausência de Bárbara Cristina não
            passou despercebida, nem para quem acompanha as Taieiras há décadas,
            nem para quem as via pela primeira vez. Sua doença, cercada de
            silêncios, levantou questionamentos sobre a continuidade, tema que
            costuma assolar grupos culturais, seja pela falta de incentivo ou de
            valorização. Fora da Irmandade, há quem questione se a tradição
            realmente resistirá ao tempo e à diminuição das jovens. Dentro dela,
            porém, a certeza é outra. O que existe hoje não é um fim decretado,
            mas um presente em aberto. Ao ser perguntada sobre como via o futuro
            das Taieiras daqui a algumas décadas, Bárbara respirou, respeitou os
            espaços de silêncio e afirmou que, apesar de não saber como estarão,
            tem certeza de que não terminará.
          </p>
          <p>
            Na memória de Mãe Bilina, nos registros de Beatriz Góis Dantas e nos
            silêncios de Bárbara, o passado se faz presente e o futuro, embora
            incerto, não é visto como ameaça, mas como algo que será revelado no
            tempo certo. Até lá, a tradição segue sendo sustentada por quem
            fica: pelas jovens que continuam saindo de suas cidades para louvar
            em Laranjeiras, pelas mães que acompanham a procissão, por Ciza, que
            mesmo apoiada em uma muleta, não abandona o cargo, e por Bárbara,
            que, mesmo impossibilitada de atravessar aquelas paredes amarelas,
            segue presente mesmo na ausência durante as apresentações.
          </p>
          <p>
            No meio da procissão, as pequenas taieiras chamam a atenção e
            representam uma chama de esperança quanto a continuidade do grupo.
            Luana Pereira é mãe das taieiras mais novas, com três e dois anos de
            idade, e, casada com o padrinho do Nagô de Laranjeiras, decidiu
            passar a tradição adiante. Para ela, o grupo não tem chances de
            terminar mesmo enfrentando desafios, porque sempre terá alguém novo
            que se encantará pela história e decidirá continuar com o grupo.
            Mesmo sendo uma escolha direta dos orixás, caso a mulher indicada
            não tenha interesse em assumir o cargo de Lôxa, outra é escolhida
            entre o grupo para receber a responsabilidade de liderar as Taieiras
            e o Nagô.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secFuturo_img}
              alt="Novas gerações"
              loading="lazy"
            />
            <figcaption>Fig. 4 — O legado continua.</figcaption>
          </motion.figure>

          <p>
            A permanência se mede pela convicção coletiva de que a tradição não
            se encerra enquanto houver quem a carregue. Entre o passado que
            embasa e o futuro que inquieta, é no presente que o grupo se afirma
            resistindo, adaptando-se e, sobretudo, existindo. Para quem vive a
            tradição das Taieiras, não há dúvida: ela não vai acabar. Enquanto
            houver fé, pertencimento e memória, a procissão seguirá encontrando
            seu caminho pelas ruas de Laranjeiras.
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

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className={styles.carouselWrapper}>
      <button
        className={`${styles.carouselBtn} ${styles.prev}`}
        onClick={prevSlide}
      >
        <ChevronLeft size={24} color="#000" />
      </button>

      <div className={styles.carouselTrackContainer}>
        <motion.div
          className={styles.carouselTrack}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {images.map((img, index) => (
            <div key={index} className={styles.carouselSlide}>
              <img src={img} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </motion.div>
      </div>

      <button
        className={`${styles.carouselBtn} ${styles.next}`}
        onClick={nextSlide}
      >
        <ChevronRight size={24} color="#000" />
      </button>
      <div className={styles.carouselDots}>
        {images.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${currentIndex === i ? styles.activeDot : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
