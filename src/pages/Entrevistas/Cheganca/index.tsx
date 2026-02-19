import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../entrevistas.module.css";

import { Carousel } from "../../../components";

import hero from "../../../assets/cheganca/imagem01.jpg";
import imagemCarrosel01 from "../../../assets/cheganca/imagemCarrosel01.jpg";
import imagemCarrosel02 from "../../../assets/cheganca/imagemCarrosel02.jpg";
import imagemCarrosel03 from "../../../assets/cheganca/imagemCarrosel03.jpg";
import imagemCarrosel04 from "../../../assets/cheganca/imagemCarrosel04.jpg";
import imagemCarrosel05 from "../../../assets/cheganca/imagemCarrosel05.jpg";
import imagemCarrosel06 from "../../../assets/cheganca/imagemCarrosel06.jpg";
import imagemCarrosel07 from "../../../assets/cheganca/imagemCarrosel07.jpg";
import imagemCarrosel08 from "../../../assets/cheganca/imagemCarrosel08.jpg";
import visualizade from "../../../assets/cheganca/visualidade01.png";

import imagemCarrosel02_01 from "../../../assets/cheganca/imagemCarrosel02_01.jpg";
import imagemCarrosel02_02 from "../../../assets/cheganca/imagemCarrosel02_02.jpg";

import imagemCarrosel03_01 from "../../../assets/cheganca/imagemCarrosel03_01.jpg";
import imagemCarrosel03_02 from "../../../assets/cheganca/imagemCarrosel03_02.jpg";

import imagemCarrosel04_01 from "../../../assets/cheganca/imagemCarrosel04_01.jpg";
import imagemCarrosel04_02 from "../../../assets/cheganca/imagemCarrosel04_02.jpg";

import imagem03 from "../../../assets/cheganca/imagem03.jpg";
import imagem04 from "../../../assets/cheganca/imagem04.jpg";
import imagem05 from "../../../assets/cheganca/imagem05.jpg";
import imagem06 from "../../../assets/cheganca/imagem06.jpg";

const IMAGES = {
  hero: hero,
  visualizade: visualizade,
  block1_carousel: [
    imagemCarrosel01,
    imagemCarrosel02,
    imagemCarrosel03,
    imagemCarrosel04,
    imagemCarrosel05,
    imagemCarrosel06,
    imagemCarrosel07,
    imagemCarrosel08,
  ],
  block3_house: [imagemCarrosel02_01, imagemCarrosel02_02],
  block3_archive: [imagemCarrosel03_01, imagemCarrosel03_02],
  block3_everybody: [imagemCarrosel04_01, imagemCarrosel04_02],
  block4_family: imagem03,
  block4_space: imagem04,
  block5_procession: imagem05,
  block5_giselma: imagem06,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export function Cheganca() {
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
            Entre a cruz e a espada, a Chegança em Sergipe
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.heroSubtitle}
          >
            A história de uma das principais manifestações religiosas e
            culturais do estado.
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
              Aline Souto, Eduarda Santos, Fernanda Felix, Larissa Prado e
              Yasmim Carvalho
            </strong>
          </span>
        </motion.div>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>O que é a Chegança?</h2>
          <p>
            <span className={styles.dropCap}>D</span>ia 6 de janeiro, Dia de
            Reis. Os cânticos dos marinheiros nostálgicos, as vozes de quem não
            esteve lá, mas que recebeu o chamado familiar, ressonam uma tradição
            criada por anos e reverberada nos estados do Ceará, Maranhão,
            Alagoas, Bahia e Sergipe. Originada na região ibérica e disseminada
            no Brasil em tempos coloniais, a Chegança é uma manifestação
            folclórica que retrata momentos da retomada cristã dos europeus
            contra os muçulmanos. A história, que começa há cerca de oito
            séculos atrás, reflete um passado de imposição religiosa e
            colonização, que se transforma ao chegar no país da miscigenação,
            tendo sua fé católica sincretizada para abrir mais espaço à
            população brasileira.
          </p>
          <p>
            Roupas em branco e azul, vozes potentes para ecoar a canção durante
            o trajeto, os marinheiros seguem o caminho até a igreja matriz de
            Laranjeiras, para cumprir sua promessa de fé a São Benedito e Nossa
            Senhora do Rosário. Atrás dos inquisidores, surge a mourama, código
            daqueles que abandonaram sua fé e terras de forma impositiva.
            Juntos, encenam momentos históricos da Retomada Cristã Ibérica. Com
            sorrisos, músicas e vestimentas, se orgulham do costume estrangeiro
            da terra natal, que já se tornou deles também.
          </p>

          <Carousel
            images={IMAGES.block1_carousel}
            legenda="Suas vestimentas trazem características visuais inesquecíveis em meio aos outros grupos. Fotos por: Larissa Prado e Yasmin Carvalho"
          />
          <p>
            Com pilotos, primeiro tenente, cabo guardião, padres, marujos e
            muito mais, encontramos aqueles que encenam os ibéricos extasiados
            após longas batalhas por território e fé. Já a mourama é composta
            por embaixadores, reis, rainhas, príncipes e princesas. Guerreiros
            em trajes reais que realizam a tentativa de resistir contra a força
            dos marinheiros de reconquistar suas terras e dominar um coletivo
            através da religião.
          </p>

          <p>
            Tudo começa com um sonho de chegar em terra firme. Após meses de
            lutas, os marinheiros europeus já estavam fartos da guerra, mas
            previam vitória contra os muçulmanos. Nesse contexto, estabeleceu-se
            uma promessa de fé e esperança: caso chegassem em terra firme e
            dessem o conflito por encerrado, iriam à igreja agradecer a Nossa
            Senhora do Rosário e a São Benedito pela preservação da vida durante
            o processo de reconquista. O cumprimento da promessa estaria
            condicionado a um confronto com grupos muçulmanos, descrito como
            difícil, e associado, no discurso da época, à conversão dos
            habitantes da Península Arábica ao catolicismo, religião
            predominante nas embarcações envolvidas na reconquista.
          </p>

          <p>
            Em Sergipe, duas cidades se destacam no panorama da Chegança:
            Laranjeiras e Itabaiana. Embora compartilhem a mesma tradição, os
            contextos são distintos. Em um dos casos, os grupos mantêm uma
            estrutura fortemente vinculada ao catolicismo e a modelos associados
            à Península Ibérica, mas enfrentam dificuldades relacionadas à
            redução de integrantes e à falta de espaços adequados. Já no outro,
            a cerca de 43 km de distância, o grupo de brincantes se caracteriza
            pelo grande número de participantes e pela diversidade de expressões
            de fé.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://view.genially.com/6985e19c3116d33a6b1f32c4/interactive-content-cheganca-em-sergipe"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <span className={styles.mapCaption}>
              VISUALIDADE MAPA DAS CHEGANÇAS EM SERGIPE
            </span>
          </motion.div>
          <p>
            Em Laranjeiras, a Chegança Almirante Barroso, cultivada atualmente
            pelos irmãos Andréia e Ângelo dos Santos, demonstra a força da
            tradição hereditária, apesar das adversidades. Pais, filhos, netos,
            amigos e conhecidos que se conectam independente da religião e
            distância para a encenação. A Chegança de Santa Cruz, de Itabaiana,
            é repleta de devotos católicos, esbanja orgulho e muita fé ao falar
            de sua trajetória. O grupo de resistência da tradição, criado por
            José Serafim de Menezes, mais conhecido como Zé de Biné, enfrenta
            desavenças políticas na região, falta de investimento e número
            reduzido de brincantes.
          </p>

          <p>
            Apesar de serem tão diferentes, mesmo compartilhando o mesmo
            propósito, de prolongar a vida histórica da Chegança como costume
            folclórico no nordeste e Brasil, Santa Cruz e Almirante Barroso
            travam suas batalhas individuais e coletivas, sendo uma a mais
            impactante e comum, a falta de apoio para a preservação daquilo que
            não se pode viver sem, memórias e cultura. No entanto, um aspecto
            invisível se apresenta para os mais observadores: a manutenção da fé
            dentro do festejo.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            Mudanças seculares do produto colonizador
          </h2>
          <p>
            Na Chegança, essa fusão de referências religiosas se revela no
            pagamento de promessas a São Benedito e a Nossa Senhora do Rosário.
            Ambos os santos mantêm uma forte ligação com as populações negras e
            com as irmandades formadas ainda no período colonial, quando pessoas
            escravizadas e seus descendentes encontraram nessas devoções
            católicas uma maneira de expressar sua fé nos orixás, ocultando suas
            crenças de origem africana sob a imagem dos santos cristãos. O
            pagamento das promessas ao final da encenação, após a batalha
            simbólica contra os mouros, reforça o caráter religioso da
            manifestação, marcando o agradecimento pelas graças alcançadas e o
            pedido de proteção espiritual.
          </p>
          <p>
            Com o passar do tempo, a Chegança passou por transformações. A
            religiosidade, antes central, foi aos poucos cedendo espaço a um
            caráter mais cultural. Hoje, para muitos participantes, o movimento
            representa sobretudo a preservação da tradição, da memória e da
            história local, ainda que os símbolos religiosos sigam presentes.
            Líder da Chegança Santa Cruz de Itabaiana, a mestra Giselma de Zé de
            Biné explica como essa herança se mantém viva mesmo diante das
            mudanças: “Não existe separar a Chegança da religião. Os cantos
            mostram isso o tempo todo. Dentro da encenação, essa ligação com a
            fé está sempre presente, que é a questão do cristianismo com a
            mourama.”
          </p>
          <p>
            Mesmo quando essas manifestações passam a ser vistas oficialmente
            apenas como expressões culturais, a dimensão religiosa não se
            dissocia completamente. De acordo com o professor de história da
            Universidade Federal de Sergipe (UFS), Claudefranklin Monteiro, o
            catolicismo popular no Brasil sempre se caracterizou pela
            espontaneidade e pela forma íntima com que os fiéis se relacionam
            com o sagrado, especialmente por meio dos santos. Essa vivência de
            fé, construída fora das quatro paredes da Igreja institucional,
            permitiu que práticas, ritos e devoções atravessassem séculos,
            preservando sentidos religiosos mesmo diante de tentativas de
            controle e padronização.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}> O apagamento da Chegança</h2>
          <p>
            Eram seis horas da noite e os pandeiros, misturados à canções e
            risadas, já davam para ser escutados há metros de distância, quando
            o rei da Chegança Almirante Barroso chegou do trabalho, em uma moto,
            com a roupa suja que demonstra o dia corrido e cansativo. O rei,
            Cleverton Batista, que trabalhou oito horas naquele dia, tinha uma
            segunda missão: honrar o seu grupo na brincadeira.{" "}
          </p>
          <p>
            Apesar do cansaço e da impossibilidade de se organizar para a
            apresentação, ele não pensou duas vezes ao sair da moto e ficar
            pronto em menos de trinta minutos. Mesmo sem ter comido e
            descansado, nada importava, ele estava pronto para dar o seu melhor.
          </p>

          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.visualizade}
              alt="Vestimentas tradicionais"
              loading="lazy"
            />
            <figcaption>
              Essa é uma das músicas tocadas na Chegança, onde demonstra a
              irmandade dos marinheiros para que ninguém ficasse fora do navio.
            </figcaption>
          </motion.figure>
          <p>
            Uma casa cedida pelo fundador, o falecido Mestre Cosme, é o espaço
            onde os brincantes da Chegança de Almirante Barroso se reúnem para
            ensaiar, conviver e articular estratégias de captação de recursos,
            por meio de parcerias e editais. Nesse grupo, a noção de resistência
            está associada à manutenção contínua da atividade, independentemente
            das dificuldades enfrentadas. Devoção, amizade e cultura se
            articulam em torno de um objetivo comum: a valorização da
            manifestação e a busca por apoio financeiro para a continuidade dos
            grupos.
          </p>

          <p>
            A falta de investimentos em apresentações é algo comum para a
            Chegança em Sergipe. Uma triste realidade contada pelos mestres,
            pilotos e toda tripulação que não quer pular do barco. Para realizar
            as encenações, são necessárias várias etapas, como confeccionar e
            lavar as roupas e sapatos danificados, providenciar comida, água e
            diárias dos trabalhadores que compõem o grupo. Os integrantes
            participam de todas elas, tendo que enfrentar a dupla jornada para
            se sustentar e se apresentar
          </p>

          <Carousel
            images={IMAGES.block3_house}
            legenda="A preparação para o festejo vai além de roupas e ensaios, a relação interpessoal mostra-se essencial e o cuidado com os seus também. Fotos: Larissa Prado"
          />

          <p>
            Os grupos folclóricos da Chegança enfrentam momentos difíceis há
            mais de 10 anos, quando os grupos começaram a sentir a falta de
            incentivo financeiro para que fosse disseminada por todo estado de
            Sergipe, em festejos folclóricos e escolas municipais e estaduais.
            Diiscrimanação social por fatores associados a religião não está
            clara para uma parte, e entrar no preconceito religioso ao ser
            confundida com religiões afro-brasileiras, perdendo sua essência no
            caminho e sendo colocados em lugares que são encaixados para que
            assim não seja o fim dos grupos no estado. As justificativas são
            sempre porque a verba não é suficiente ou não existe orientação
            assertiva sobre pré requisitos para obter as mesmas sob
            editais.{" "}
          </p>

          <p>
            A mestra Giselma de Zé de Biné, relembra de momentos felizes que
            viveu enquanto criança com a Chegança liderada pelo seu pai, o
            mestre Zé de Biné, responsável pela criação e história do grupo. Sem
            saber das barreiras vivenciadas para que acontecesse as
            apresentações. “Antigamente, meu pai não ligava para patrocínio e
            ajuda, ele saia batendo de porta em porta no comércio e o que
            faltasse ele colocava do próprio bolso, sem pensar duas vezes. Eu
            não entendia, só queria ir para a avenida admirar o meu pai e os
            amigos dele com as roupas de marinheiro”, relembra
          </p>

          <Carousel
            images={IMAGES.block3_archive}
            legenda="A força da Chegança Santa Cruz resiste em arquivos que documentam a fé e cultura como um lembrete para nunca desistirem. Fotos: Larissa Prado"
          />

          <p>
            Hoje, à frente do grupo, Giselma lida com desafios financeiros para
            manter os integrantes, providenciando roupas, sapatos, lanches e
            apoio financeiro aos que mais precisam para garantir sua
            subsistência.. “Hoje, eu busco sempre me profissionalizar e tentar
            todos os editais de incentivos mesmo que seja o menor valor. São
            custos para mantê-los aqui, eu não posso cobrar nada deles, já estão
            aqui e querem permanecer, continuar a história do meu pai. Eu só
            peço editais mais amplos e com valores maiores para custear o grupo
            em todos os aspectos”, pontua.{" "}
          </p>

          <p>
            Um navio não navega sozinho. Nele, todos os tripulantes são
            importantes, toda função contribui para uma navegação de sucesso.
            Então, por que os marinheiros estão sendo esquecidos em alto mar
            pelo próprio município e estado? Não há lugar para todos no navio?
            Questionamentos como esse sempre aparecem em ambos os grupos, em
            momentos que deveriam ser destinados à felicidade de estarem
            reunidos para disseminar e contribuir para cultura sergipana.
          </p>

          <p>
            Na Chegança Almirante Barroso, sediada em Laranjeiras, cidade
            conhecida como a cidade da cultura popular pela diversidade cultural
            e folclórica, esses questionamentos não deixam de existir sobre o
            grupo que teme pelo futuro da Chegança. Os cargos culturais são
            transmitidos de pais para filhos e de filhos para netos, como forma
            de garantir a continuidade da tradição. Apesar das dificuldades
            financeiras, das duplas jornadas de trabalho e da falta de recursos
            para vestimentas e instrumentos, o grupo permanece unido. Mesmo com
            parte dos integrantes já em idade avançada e com a perda recente de
            alguns componentes, existe entre eles um compromisso coletivo de
            manter a Chegança ativa até onde for possível.
          </p>

          <Carousel
            images={IMAGES.block3_everybody}
            legenda="Com pessoas únicas e diversas, os dois grupos se unem no amor à tradição e na resistência cultural. "
          />
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            A resistência e perseverança dos brincantes
          </h2>
          <p>
            A mestra Giselma, líder do grupo em Itabaiana, carrega não apenas no
            sobrenome o legado do pai, mas também em cada gesto dedicado à
            manifestação. “Eu nasci, cresci ouvindo a história, participando da
            Chegança, acompanhando tudo isso. Quando eu era pequena, estive como
            brincante e, ao longo dos anos, passei a participar”, relembra
            Giselma. “Quando o meu pai ficou acamado, eu vi praticamente o grupo
            se desfazendo. Ele chorava, me pedia: ‘Não deixe morrer o grupo’. E
            foi aí que eu tomei a frente”, conta.
          </p>
          <p>
            Giselma e Zé de Biné não são a única expressão dos laços familiares
            que sustentam a Chegança. Ainda na Chegança de Santa Cruz, a
            tradição também atravessa gerações dentro de uma mesma família. Uma
            avó brincante, Maria Sobral, que cresceu acompanhando e participando
            da manifestação, hoje observa com orgulho os dois netos seguirem
            seus passos, aprendendo desde cedo os cantos, os gestos e os
            significados que compõem o folguedo. Para ela, ver as crianças
            envolvidas na Chegança representa mais do que a continuidade do
            grupo, é a garantia de que a memória, a fé e a identidade cultural
            construídas ao longo de décadas não se perderão com o tempo.
          </p>

          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.block4_family}
              alt="Maria Sobral não mede esforços nos convites para a Chegança de Santa Cruz, seu amor transpassou sua árvore genealógica e até limites de vizinhança. Foto: Larissa Prado"
              loading="lazy"
            />
            <figcaption>
              Maria Sobral não mede esforços nos convites para a Chegança de
              Santa Cruz, seu amor transpassou sua árvore genealógica e até
              limites de vizinhança. Foto: Larissa Prado
            </figcaption>
          </motion.figure>

          <p>
            A Chegança Almirante Barroso também carrega esse mesmo vínculo
            familiar. De longe, é possível perceber a força que os irmãos
            Andréia e Ângelo dos Santos dedicam ao fortalecimento do grupo. Para
            quem chega para conhecer a Chegança, a sensação é de acolhimento.
            Ali, em uma casa localizada no centro histórico da cidade, a
            história do grupo é contada por pessoas que dedicam a vida à
            preservação dessa tradição.
          </p>
          <p>
            E além de preservar a tradição, o grupo cumpre um papel social
            fundamental ao oferecer a cultura não apenas como forma de
            expressão, mas também como uma oportunidade de pertencimento,
            visibilidade e dignidade para aqueles que participam. Giselma
            ressalta que parte dos brincantes que integram a Chegança vem de
            comunidades carentes. Muitas vezes sem ter uma alimentação adequada
            antes de sair de casa, crianças e jovens encontram na arte um espaço
            de acolhimento, aprendizado e disciplina.
          </p>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.block4_space}
              alt="O espaço Cultural Mestre Zé de Biné se mostra como um museu de memórias da Chegança Santa Cruz. Foto: Larissa Prado"
              loading="lazy"
            />
            <figcaption>
              O espaço Cultural Mestre Zé de Biné se mostra como um museu de
              memórias da Chegança Santa Cruz. Foto: Larissa Prado
            </figcaption>
          </motion.figure>
          <p>
            Nesse cenário, a cultura atende à sua função como ferramenta social,
            oferecendo novas oportunidades para quem mais necessita. Mais do que
            um grupo folclórico, a Chegança tem se consolidado como uma das
            principais formas de manutenção da tradição em comunidades populares
            e passou a integrar o cotidiano dessas localidades como prática
            cultural e religiosa. Ao ocupar ruas e espaços comunitários com suas
            apresentações, os grupos mantêm a circulação da tradição, ampliam a
            participação dos moradores e reforçam vínculos entre diferentes
            gerações, articulando memória, religiosidade popular e convivência
            comunitária.
          </p>
          <p>
            Assim, cada ensaio, cada apresentação e cada nova geração de
            brincantes representa um ato de continuidade frente às tentativas de
            silenciamento, transformando a Chegança em símbolo de permanência e
            afirmação cultural em Sergipe. O amor pela manifestação, presente em
            cada participante é o que faz o grupo se fortalecer e resistir ao
            apagamento de uma herança cultural que deve ser preservada no
            estado.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}> O futuro da Chegança</h2>
          <p>
            A Chegança precisou de reinventar ao longo dos anos, a igreja deixa
            de ser seu único lar e o povo passa a abraçar como movimento
            cultural. Entretanto, se essa cultura não for fortalecida, corre o
            risco de se perder no tempo. “Quem tá na Chegança vai envelhecer e
            vai transmitir para quem? Se pensar na Chegança em 1976, havia
            grupos em Lagarto, Itabaiana, São Cristóvão, Laranjeiras, Divina
            Pastora, mas hoje só encontra algum tipo de resistência em São
            Cristóvão, Itabaiana, Laranjeiras…”, afirma Claudefranklin.
          </p>
          <p>
            O município de Laranjeiras se destaca como um dos principais polos
            da cultura popular sergipana, recebendo o título de “Capital
            Sergipana da Cultura Popular”. O título foi oficializado em dezembro
            do ano passado, pelo Projeto de Lei nº 306/2025, de autoria do
            deputado Paulo Júnior (PV), que foi aprovado pela Assembleia
            Legislativa de Sergipe. O valor histórico e cultural da cidade já é
            reconhecido nacionalmente desde 1995, quando foi reconhecida
            nacionalmente pelo seu conjunto arquitetônico, urbanístico e
            paisagístico, ao ser tombada pelo Instituto do Patrimônio Histórico
            e Artístico Nacional (Iphan).
          </p>
          <p>
            Segundo o secretário da cultura de Laranjeiras, Leomax Célio, a
            Chegança é um dos grupos tradicionais mais importantes e é
            necessário que essa cultura seja passada nas escolas. Anualmente no
            mês de agosto, durante a semana do folclore, chamada Semana dos
            Saberes e Fazeres, se celebra também a manifestação popular. Os
            mestres vão até as escolas e realizam palestras e rodas de conversa.
          </p>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.block5_procession}
              alt="O cortejo tradicional traz vida e movimento a cidade histórica com seus cânticos resistentes ao tempo. Foto: Yasmim Carvalho"
              loading="lazy"
            />
            <figcaption>
              O cortejo tradicional traz vida e movimento a cidade histórica com
              seus cânticos resistentes ao tempo. Foto: Yasmim Carvalho
            </figcaption>
          </motion.figure>

          <p>
            Em Itabaiana, a vontade de perpetuar a cultura é a mesma e para dar
            continuidade à manifestação, é necessário que ela seja transmitida
            para as próximas gerações, pelos familiares ou pela comunidade. A
            mestra Giselma conta que não se pode deixar a tradição morrer junto
            com os brincantes mais velhos, é necessário introduzir os mais
            jovens. “Hoje, temos jovens que iniciaram com apenas 4 anos e já são
            rapazes, outros que entraram com 9 e atualmente têm 17, 18 anos. A
            maioria desses jovens mora em bairros periféricos e, ao integrar o
            grupo, passa a ter a oportunidade de conhecer outras cidades, fazer
            novas amizades e ampliar seus horizontes.” Disse a mestre da
            Chegança Santa Cruz.
          </p>
          <p>
            Os editais de fomento cultural do Governo de Sergipe, por meio da
            Fundação de Cultura e Arte Aperipê (Funcap), a partir da Política
            Nacional Aldir Blanc (PNAB) instituída pela Lei nº 14.399/2022, tem
            caráter estruturante e buscam democratizar o acesso à cultura no
            estado. As inscrições nos editais são feitas na plataforma Mapa
            Cultural de Sergipe, os grupos sem CNPJ podem participar desde que
            indiquem uma pessoa física como responsável legal.
          </p>
          <p>
            Entre as iniciativas estão Programa de Registro de Patrimônio Vivo
            da Cultura Sergipana (conhecido como "Lei dos Mestres"), que
            reconhece mestres desses grupos da cultura popular sergipana,
            oferecendo premiação e apoio financeiro, e a Política Nacional de
            Cultura Viva (PNCV), instituída pela Lei nº 13.018/2014, visa
            promover a cidadania cultural e dar acesso à recursos.{" "}
          </p>
          <p>
            Giselma recebe o título de mestre através da Lei dos Mestres, porém
            o grupo questiona se esse apoio é o suficiente para manter uma
            tradição secular. “Ao observar as fotos, tudo parece bonito e bem
            organizado, mas existem muitas dificuldades. Há a manutenção do
            espaço, das indumentárias e a questão do transporte, já que muitas
            pessoas moram longe. Todo esse cuidado demanda recursos
            financeiros.” Disse.{" "}
          </p>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.block5_giselma}
              alt="Giselma se mostra a base da Chegança Santa Cruz ao seguir o pedido da continuação do festejo feito por seu pai, Zé de Biné. Foto: Larissa Prado "
              loading="lazy"
            />
            <figcaption>
              Giselma se mostra a base da Chegança Santa Cruz ao seguir o pedido
              da continuação do festejo feito por seu pai, Zé de Biné. Foto:
              Larissa Prado
            </figcaption>
          </motion.figure>

          <p>
            Além disso, esses editais carecem de uma instrução acessível e
            eficaz para que o público alvo seja agraciado devidamente, visto que
            a inscrição é feita pelo aplicativo e muitos dos mestres são pessoas
            idosas sem letramento digital. Existem outras publicações como o
            Mérito Universitário Especial da UFS, que não compreendem o trabalho
            da filha de Zé Biné na comunidade. “Então, encontrei uma barreira
            ali que eu não posso participar. Por quê? Porque o edital lá (UFS) é
            fechado, só para quem tem até ensino médio. Mas aí eu vou lá e tem
            uma barreira. Só pode participar quem tem até o ensino médio.”
            Comenta a mestra.
          </p>
          <p>
            O futuro da Chegança está na valorização da sua trajetória, de
            perpetuar a tradição nas crianças que brincam. É muito mais do que
            uma apresentação, é um retrato da cultura sergipana que resiste ao
            apagamento, na memória, na tradição e nos saberes transmitidos entre
            gerações. O encontro de espadas, entre os marinheiros e a mourama,
            representa mais do que uma brincadeira, é a representação de uma
            parte da história.
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
