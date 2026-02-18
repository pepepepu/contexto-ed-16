import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../entrevistas.module.css";

import hero from "../../../assets/penitentes/hero.jpg";
import imagem01 from "../../../assets/penitentes/imagem01.jpg";
import imagem02 from "../../../assets/penitentes/imagem02.jpg";
import imagem03 from "../../../assets/penitentes/imagem03.png";

import imagemCarrosel01 from "../../../assets/penitentes/imagemCarrosel01.jpg";
import imagemCarrosel02 from "../../../assets/penitentes/imagemCarrosel02.png";
import imagemCarrosel03 from "../../../assets/penitentes/imagemCarrosel03.png";

import imagemCarrosel02_01 from "../../../assets/penitentes/imagemCarrosel02_01.jpg";
import imagemCarrosel02_02 from "../../../assets/penitentes/imagemCarrosel02_02.jpg";
import imagemCarrosel02_03 from "../../../assets/penitentes/imagemCarrosel02_03.jpg";

import imagemCarrosel03_01 from "../../../assets/penitentes/imagemCarrosel03_01.jpg";
import imagemCarrosel03_02 from "../../../assets/penitentes/imagemCarrosel03_02.jpg";
import imagemCarrosel03_03 from "../../../assets/penitentes/imagemCarrosel03_03.jpg";

const IMAGES = {
  hero: hero,
  sec2_img1: imagem01,
  secTrad_img1: imagem02,
  secTrad_img2: imagem03,
  carousel_sec2_1: [imagemCarrosel01, imagemCarrosel02, imagemCarrosel03],
  carousel_sec2_2: [
    imagemCarrosel02_01,
    imagemCarrosel02_02,
    imagemCarrosel02_03,
  ],
  carousel_sec3: [
    imagemCarrosel03_01,
    imagemCarrosel03_02,
    imagemCarrosel03_03,
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export function Penitentes() {
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
            TRADIÇÃO
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={styles.heroTitle}
          >
            Penitentes
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.heroSubtitle}
          >
            Na Capital Sergipana da Fé, existe um grupo — os penitentes — que
            contrariou previsões de que estariam prestes a ruir e que hoje se
            mostram mais fortes que nunca
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
          <span>10 min de leitura</span>
        </motion.div>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            Onde estão os penitentes nesta sexta-feira santa?
          </h2>
          <p>
            Esse questionamento — feito pelo jornalista e historiador Luiz
            Antônio Barreto em um texto publicado na Gazeta de Sergipe em 1982,
            em que ele levantou a hipótese do desaparecimento dessa tradição em
            diversas cidades do estado — não é difícil de ser respondido. Por
            aqueles dias, Barreto estava angustiado com o que entendia ser o
            esvaziamento das tradições da quaresma existentes há décadas em
            Sergipe.
          </p>
          <p>
            Apesar da preocupação do historiador, o fato é que ainda hoje, por
            volta das 19h do dia do sacrifício do Senhor, em frente ao Cemitério
            Municipal de Nossa Senhora das Dores, cidade do agreste sergipano, é
            possível observar mais de 500 homens reunidos. Vestidos com túnicas
            brancas e com capuzes que deixam somente os olhos e a boca de fora,
            eles chamam a atenção de qualquer um que os observe. O grupo deixa o
            cemitério em procissão para relembrar os passos de Jesus Cristo rumo
            ao calvário, seguindo uma cruz de madeira com um sudário branco
            enrolado e em meio ao som do “trá-trá-trá” das tradicionais matracas
            de madeira. Após percorrerem a longa distância de cerca de 17 km,
            entoando cânticos e realizando orações pelas almas do purgatório,
            com paradas em 15 estações, eles chegam até a Igreja Matriz para a
            finalização do cortejo.{" "}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://uploads.knightlab.com/storymapjs/291e3804ef2b71bde8634d1a07232ce1/dores/draft.html "
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <span className={styles.mapCaption}>
              MAPA DAS ESTAÇÕES DA PROCISSÃO. Crédito: Gustavo Barbosa
            </span>
          </motion.div>

          <p>
            Mas, afinal (esperamos que a quebra do mistério tão brevemente não
            tenha o induzido a deixar de ler), como chegamos à resposta para
            contradizer as palavras de Luiz Antônio Barreto, que sugeriram que a
            tradição religiosa estava se esvaindo? O caminho não é complicado e
            você mesmo pode percorrê-lo de maneira semelhante. O primeiro passo
            é escolher um município onde a tradição é preservada ainda hoje,
            mesmo que, em seu texto, Barreto não tenha se referido nominalmente
            a ela. É o caso de Dores, por exemplo. Basta digitar “penitentes de
            Dores” em qualquer buscador que você irá encontrar alguns perfis no
            Instagram. Foi assim que tivemos nosso primeiro contato com o grupo
            que conheceremos nesta reportagem.
          </p>
          <p>
            A partir de diversas conversas, tivemos a certeza da ideia que
            surgiu a partir do momento que vimos a presença deles nas redes
            sociais. Na verdade, essa tradição não havia perdido força. Ela
            resistiu ao tempo, fortaleceu-se e se renovou. Muito mais do que a
            entrada dos penitentes no Instagram e o seu uso como instrumento de
            registro e memória da tradição, a renovação e o crescimento se
            mostraram também quando descobrimos que este grupo, outrora pequeno,
            contendo cerca de 15 a 20 pessoas, hoje se transformou em uma
            multidão de mais de 500 pessoas participando da procissão durante a
            Sexta-Feira da Paixão.
          </p>
          <p>
            De agora em diante, você embarca, a partir da cidade de Dores, numa
            jornada pela história de renovação dessa tradição para chegar numa
            resposta mais incisiva à constatação feita por Luiz Antônio Barreto.
            E podemos garantir desde já (prometemos que não somos
            estraga-prazeres, continue lendo até o fim!): se depender da fé dos
            Penitentes de Nossa Senhora das Dores, eles jamais deixarão de
            existir.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>A EXPLOSÃO DE FÉ</h2>

          <p>
            O momento presente do grupo é resultado de uma série de mudanças e
            permanências, naturais de uma tradição que já dura mais de 100 anos.
            Entre conflitos internos e externos, conquistas importantes,
            mudanças de pensamentos e de paradigmas, já vimos que segue
            crescendo, ano após ano. Entretanto, o que não mudou foi o
            sentimento de ser um penitente. “Ser penitente é acreditar que os
            nossos sacrifícios e as nossas orações chegam, alcançam as almas,
            principalmente daqueles que padecem no purgatório. Depois,
            [acreditar] que os nossos próprios sacrifícios convertam a nós
            mesmos e nos levem um dia às alegrias da vida eterna e ao céu”,
            afirma o atual presidente e coordenador litúrgico do grupo, Igor
            Araújo.
          </p>
          <p>
            De acordo com o antigo pároco da Igreja Matriz de Dores Nilton
            César, “o significado da penitência é de purificação, de libertação,
            de arrependimento dos pecados, de pedir descanso das almas que estão
            perdidas nesse mundo e precisam de conversão, de mudança de vida”.
            Ao mesmo tempo, destaca ele, “tudo isso tudo faz bem a quem faz”.
            Ele conta que essa é uma prática bastante comum entre os fiéis
            católicos, que inclui, por exemplo, o jejum e a abstinência durante
            a Quaresma.
          </p>
          <p>
            O mais antigo dos penitentes dorenses, Jorge Santos, complementa que
            “a missão dos penitentes é rezar pelos falecidos do grupo, pelos
            falecidos parentes, pelos falecidos amigos e, enfim, rezar por todas
            as almas”. Ele, que se prepara para sua quinquagésima sétima
            procissão, a ocorrer em abril de 2026, pede que os “irmãos
            penitentes” continuem levando a sério o cortejo e a fé. “Em vez dele
            ir para a procissão, tirar onda, brincar com algo ou alguém, [que]
            ele siga em oração. Ele siga rezando”, roga.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img src={IMAGES.sec2_img1} alt="Imagem única" loading="lazy" />
            <figcaption>
              Foto: Maria Eduarda Rocha <br></br>As indumentárias utilizadas
              pelos penitentes de Nossa Senhora das Dores representam a pureza e
              chamam a atenção por se destacarem durante a noite.
            </figcaption>
          </motion.figure>

          <p>
            Mas como essa manifestação religiosa chegou em Nossa Senhora das
            Dores? Segundo a historiadora e professora dorense Magneide Lima, a
            tradição dos penitentes, como um todo, foi trazida ao Brasil por
            meio dos colonizadores portugueses e chegou na cidade de Dores a
            partir dos chamados “promesseiros” (pagadores de promessas). Ela
            classifica o movimento como fruto do catolicismo popular, uma vez
            que não foi instituída oficialmente pela Igreja Católica. Por esse
            motivo, havia diversos conflitos com a instituição, que faziam com
            que diversas pessoas tivessem “medo” de acompanhá-los.
          </p>
          <p>
            Em seu livro “Penitentes: Explosão de Fé”, a historiadora destaca
            que foi na penitência que as pessoas encontraram uma maneira de
            agradecer a Deus pela concessão de uma graça decorrente de
            promessas. Essa obra utiliza como fonte um documento escrito pelos
            próprios penitentes em meados da década de 1980, e cita que o
            movimento se fortaleceu com os principais expoentes: Manoel de
            Dantas e Francisco Pedro Nascimento, também conhecido como Ioiô.
          </p>

          <ImageCarousel images={IMAGES.carousel_sec2_1} />

          <p>
            De acordo com o atual presidente, Igor Araújo, e o antigo
            coordenador do movimento a partir do ano de 1977 até 2000, Nestor de
            Andrade, essa manifestação chegou à cidade por meio de uma família
            dorense vinda do Crato, no Ceará (também reconhecida por sua grande
            religiosidade). Foi Domingos Dias dos Santos, também conhecido como
            Dominguinhos, que iniciou as procissões, ainda no final do século
            XIX. Ele, no entanto, faleceu anos depois, e a liderança do grupo
            foi assumida por seu filho, Seu Ioiô. O grupo começou aceitando
            somente seus próprios parentes, sendo esse o motivo pelo qual o
            número de integrantes era pequeno inicialmente, mas, com o passar
            dos anos, diversas pessoas foram sendo admitidas no grupo.
          </p>
          <p>
            Nessa época, ainda era realizada a prática da autoflagelação, que
            consistia em se autoinflingir ferimentos com ferramentas como
            chicotes e maxixes (uma bola de cera com vários cacos de vidro
            grudados), para simbolizar o açoitamento de Jesus Cristo. Segundo
            Seu Nestor, ela continuou sendo realizada até meados dos anos 1960,
            quando ocorreu uma trágica história, que é transmitida entre
            gerações: o flagelo, que tinha uma ponta de ferro, estava
            enferrujado e contaminou um dos praticantes com tétano, levando-o a
            óbito. Em conversa com o fotógrafo Guy Veloso, que viajou o Brasil
            para conhecer os diversos grupos de penitentes espalhados pelas
            cinco regiões do país, ficamos sabendo que existem poucos grupos que
            ainda realizam a prática do autoflagelo. Em Sergipe, por exemplo, o
            único lugar em que continuam a realizar é na cidade de Ilha das
            Flores.
          </p>
          <p>
            Contudo, para ser um penitente era (e é até hoje) necessário cumprir
            exigências. O livro utilizado pela professora Magneide, possui uma
            lista bem clara, na qual a primeira regra para ser membro do grupo é
            ser um homem adulto e se comprometer em realizar a penitência
            durante sete anos seguidos. Igor conta que o motivo de serem
            permitidos apenas homens foi uma convenção que se tornou tradição.
            Ele explica que as justificativas eram o caminho “extenuante” que
            eles percorrem durante a procissão e a prática da autoflagelação,
            que “leva o corpo humano ao limite”.{" "}
          </p>
          <p>
            Portanto, desde o seu início, os penitentes sempre foram formados
            por homens. Seu Nestor destacou, ainda, que não houve abertura para
            as mulheres participarem, mesmo com grande interesse da parte delas.
            A historiadora, por exemplo, foi uma das mulheres que, desde
            criança, sonhava em ser uma penitente. “Eu tinha muito desejo de
            estudar esse grupo, aí vi a oportunidade quando fiz o curso de
            história. Eu disse: ‘Não vou perder essa oportunidade de estudar
            esse grupo, que eu sempre fui apaixonada. Eu sempre tive vontade de
            sair de penitente’”, contou.
          </p>
          <p>
            Assim como as mulheres, outro público também nutria o desejo de
            participar das procissões: os meninos e rapazes que ainda não tinham
            atingido a idade adulta, isto é, 18 anos. Na década de 1970, o jovem
            Nestor foi barrado por essa regra, que era imposta pelo antigo
            líder, Seu Ioiô. Mas, foi durante a gestão dele como coordenador do
            grupo, que se passou a aceitar menores de idade como membros — e
            esse é um dos motivos para sua renovação contínua e que perdura com
            as mudanças da sociedade.
          </p>
          <p>
            Ainda que não tenha unanimidade, e não seja uma regra específica do
            grupo sobre qual a idade ideal para se aceitar membros, a idade
            preferida e geralmente indicada é 14 anos, como para Seu Nestor. Seu
            neto chegou a sair com 12 anos, após muita insistência. O antigo
            coordenador, no entanto, não considerava que ele estivesse preparado
            para sair como penitente. A preparação, segundo ele, consiste em
            “chamar para a igreja, fazer as orações, aprender os cantos, rezar.
            Porque participar, só participar? Eu não acho ideal ainda o menino
            sair [na procissão] com 12, 13 anos”.
          </p>

          <ImageCarousel images={IMAGES.carousel_sec2_2} />

          <p>
            Dos jovens que começaram a fazer parte do movimento na casa dos 14
            aos 15 anos, temos os exemplos do próprio presidente, Igor Araújo, e
            do técnico de rede de internet Victor Santos. “Desde os meus 8, 9,
            10 anos, eu tinha bastante interesse em sair na procissão”, conta
            Victor, que era desaconselhado pela mãe quando pedia para sair na
            procissão, por conta da idade. “Quando completei meus 15 anos, eu
            disse: ‘Mãe, esse ano eu vou sair de penitente’. Ela até [disse]:
            ‘Não, você não vai’. Eu [reafirmei]: ‘Vou, possa chover, possa fazer
            sol, mas eu vou sair de penitente’”. A mãe, então, aceitou, com a
            condição de ter algum membro antigo como responsável.
          </p>
          <p>
            Superada a condição, Victor saiu durante dois anos acompanhado e,
            depois, continuou sozinho — e suas saídas já duram 12 anos. Já Igor
            começou a participar sendo levado pelo cunhado, que também ficou
            como seu responsável nas primeiras vezes, até finalmente começar a
            participar sozinho. Essa é, inclusive, uma imposição da organização:
            os menores de idade devem ter responsáveis quando saem na procissão
            pelas primeiras vezes (ou seja, durante dois ou três anos).
          </p>
          <p>
            Foi sob a presidência de Igor Araújo, inclusive, que mais uma
            conquista muito importante aconteceu para o grupo: uma aproximação e
            abertura ainda maior com a Igreja Matriz. Mas, esse é um processo de
            renovação que vem sendo construído desde a década de 1970. É
            relatado no livro dos penitentes e pelo atual presidente que um
            antigo vigário da paróquia de Dores, chamado de cônego Miguel
            Barbosa, “fechou as portas” para o movimento e tentou acabar com ele
            por considerá-lo uma manifestação pagã, já que não fazia parte da
            liturgia da Igreja Católica.
          </p>
          <p>
            Contudo, continuou Igor, foi a chegada de um novo pároco em Dores
            que mudou os rumos dessa história: Raimundo Cruz, que após uma
            “pesquisa pessoal”, narra o documento, abriu as portas da igreja
            para os penitentes em 1980. Até então, eles não podiam entrar e
            rezavam sua última estação em frente ao cruzeiro da praça. Ele
            descreve que um sacerdote, vestido de túnica branca, participou
            escondido de um dos cortejos na Sexta-Feira Santa. “Ninguém sabia
            que era ele, que ele tinha participado de toda a procissão. Ele só
            se revelou no final. E ele viu que o motivo era nobre, então decidiu
            novamente abrir as portas. Hoje, as igrejas se abrem, graças a
            Deus”, contou o coordenador.
          </p>
          <p>
            Seu Nestor, coordenador na época, confirma a identidade de padre
            Raimundo e conta como descobriram que o pároco estava entre eles:
            “Quando nós chegamos na última estação, que é na igreja, disse:
            ‘Agora vamos pedir a benção do padre, vamos chamar o padre’. Aí ele
            disse: ‘Não precisa chamar o padre não, que eu estou aqui’. Aí ele
            abriu o capuz. Surpreendeu todo mundo. Daí para lá, foi crescendo. E
            muita gente foi querendo acompanhar”.
          </p>
          <p>
            Alguns anos atrás, Igor, em contato com a paróquia, na época gerida
            pelo padre Nilton César (que após quase dez anos na cidade, foi
            transferido para Nossa Senhora do Socorro em 2025), conseguiu mais
            uma renovação para fortalecer o movimento. Após conversas, ficou
            acordado que a missa que ocorre nas primeiras segundas-feiras de
            cada mês seria dedicada aos penitentes. “Como já é tradição das
            pessoas daqui da Igreja Matriz rezar toda segunda-feira pelas almas,
            a gente decidiu [que] a primeira segunda-feira do mês os penitentes
            participam e juntam as nossas orações com as orações da comunidade
            pelas almas”, comenta Igor, orgulhosamente.
          </p>
          <p>
            “Quando eu cheguei lá, existia uma relação um pouco distante, devido
            a, talvez, alguma situação do passado e que eles não tiveram muita
            oportunidade de ter uma aproximação caminhando junto com a Igreja”,
            reconhece o Padre Nilton. Quando ele chegou na cidade, procurou
            alguns membros dos penitentes para conversar, o que resultou numa
            aproximação maior do grupo com a igreja e na retomada da confiança
            deles. Segundo ele, a comunidade ficou bastante feliz, “porque todos
            nós ganhamos”, enfatiza.
          </p>
          <p>
            “Eu acredito que esse foi um dos momentos, na história dos
            penitentes, que mais alegrou o meu coração”, comenta Igor. O motivo
            para isso é que agora os penitentes, que são um movimento católico
            (ele frisa isso!), podem estar em comunhão plena com a Igreja
            durante todo o ano, participando da Santa Missa, confessando,
            comungando, etc. O fato de ser católico, no entanto, não impede a
            participação de pessoas de outras denominações. “A gente não faz
            restrições e acolhe a todos”, afirma Igor. Por outro lado, uma das
            consequências dessa abertura maior da Igreja foi justamente a evasão
            de alguns membros não-católicos, segundo Seu Nestor.
          </p>
          <p>
            “Eu acredito que esse foi um dos momentos, na história dos
            penitentes, que mais alegrou o meu coração”, comenta Igor. O motivo
            para isso é que agora os penitentes, que são um movimento católico
            (ele frisa isso!), podem estar em comunhão plena com a Igreja
            durante todo o ano, participando da Santa Missa, confessando,
            comungando, etc. O fato de ser católico, no entanto, não impede a
            participação de pessoas de outras denominações. “A gente não faz
            restrições e acolhe a todos”, afirma Igor. Por outro lado, uma das
            consequências dessa abertura maior da Igreja foi justamente a evasão
            de alguns membros não-católicos, segundo Seu Nestor.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            ENTRE A TRADIÇÃO E A MODERNIDADE
          </h2>

          <p>
            Sem dúvidas, a procissão dos penitentes chama a atenção de qualquer
            um que a veja, sobretudo pelas suas peculiaridades. Além do
            anacrônico fato de só homens poderem participar, durante todo o
            percurso existe um som que quebra o silêncio da noite e ordena os
            penitentes ao que fazerem: são as matracas de madeira, instrumentos
            musicais comumente utilizados pela Igreja Católica durante a Semana
            Santa, e que, segundo a historiadora Magneide, já faziam parte da
            tradição inicialmente introduzida pelos colonizadores portugueses no
            Brasil.
          </p>
          <p>
            “A matraca é para chamar o despertador. Para despertar de cada
            oração, cada estação e cada canto. A matraca toca para silenciar e
            se recolher. A igreja não toca matraca na quinta-feira santa?
            Começa. Pronto. É sinal de recolhimento. Quando ela toca, a gente
            tem que silenciar, se concentrar”, explicou Seu Nestor. O mecânico e
            penitente Roberto Andrade, que bate a matraca há mais de 25 anos, é
            hoje o principal matraqueiro (aquele que começa a sacudir, seguido
            por mais dois ou três). Depois da cruz com o sudário, a matraca é
            uma das mais importantes partes da procissão, pois dá os comandos
            para que os penitentes comecem ou parem de rezar, fazendo silêncio.
            A cruz, por sua vez, é a principal representação de Jesus e um guia
            que leva a fé no divino, como uma representação da força necessária
            para continuar lutando e pagar as promessas, conta Magneide.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secTrad_img1}
              alt="Tradição e Modernidade 1"
              loading="lazy"
            />
            <figcaption>
              Fotos: Maria Eduarda Rocha<br></br>
              Legenda: O som da matraca é um dos principais identificadores da
              procissão dos penitentes. O uso desse instrumento no cortejo foi
              trazido com a tradição pelos portugueses.
            </figcaption>
          </motion.figure>

          <p>
            Porém, não é só o barulho alto das matracas que chama atenção. No
            escuro da noite, as vestes brancas dos penitentes — que representam
            a pureza — também se destacam e protagonizam um dos grandes debates
            entre o grupo. Durante seu período como coordenador, ele relembra
            que houve um conflito com os membros mais antigos para substituir o
            lençol branco, preso por alfinetes, pela túnica e capuz utilizados
            atualmente. Pela resistência de alguns membros antigos, que estavam
            presos ao legado, a troca só foi finalizada depois de quatro anos.
          </p>
          <p>
            Contudo, depois disso, iniciou-se uma discussão maior: a questão da
            retirada do capuz durante a procissão. Seu Nestor afirma que esse
            foi um dos motivos para sua saída do grupo, ocorrido em 2000, e
            reclama que o “penitente representa as almas, a alma não é para ser
            identificada. Esse movimento é mais espiritual. É uma profundidade
            muito grande e não é para ninguém mostrar o rosto”. Ele comenta que,
            por “querer aparecer”, algumas pessoas têm retirado a túnica em
            alguns momentos, como beber água ou falar com a namorada. Durante a
            procissão, outros ainda aproveitam para fumar cigarro e bater papo,
            contrariando o propósito da penitência, que é o recolhimento. “Eu
            não concordo!”, enfatiza ele, que diz que o correto é ficar com o
            rosto coberto da primeira estação (o cemitério) até a última (a
            Igreja).
          </p>
          <p>
            Igor explica que no livro de regras dos penitentes, sempre esteve
            definido que o capuz seria “totalmente fechado, permitindo somente
            aberturas para respiração e visualização”. Poderiam estar
            descobertos apenas os olhos, o nariz, e, no máximo, a boca, de
            maneira a facilitar o canto. No entanto, um adendo foi realizado ao
            livro depois, permitindo o capuz semiaberto, mas “aberto jamais”,
            reforçou.
          </p>
          <p>
            Após uma “atenção midiática”, que ocorreu de maneira intensa nos
            anos 2000, como explica Magneide em seu livro, algumas pessoas
            despertaram em si a “vaidade” e queriam tirar o capuz para serem
            identificados, continuou Igor. Ao longo dos anos, ser penitente
            tornou-se motivo de orgulho e não de vontade de permanecer no
            anonimato, como ocorria no passado, por conta da não aceitação por
            setores da igreja.
          </p>
          <p>
            Ainda houve um período, no ano de 2012, que a comissão definiu que o
            capuz precisaria estar, obrigatoriamente, aberto, removendo o tecido
            que cobria o espaço entre os olhos e o nariz. O atual coordenador
            conta que houve alegações de que alguns penitentes estavam se
            aproveitando do anonimato para levar bebidas para a procissão ou
            para assediar mulheres no caminho. Após discussões, a comissão
            voltou atrás na decisão e, até os dias de hoje, são permitidas
            somente as variações fechada ou semiaberta. Mas, Igor ainda destaca
            que, considerando a quantidade de pessoas participando, que muitas
            vezes passa de quinhentas, nem sempre é possível controlar quem está
            seguindo essa regra.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.secTrad_img2}
              alt="Tradição e Modernidade 2"
              loading="lazy"
            />
            <figcaption>Arte: Alice Mendonça e Ana Carolina Alves</figcaption>
          </motion.figure>

          <p>
            Seu Nestor também explicou outros problemas que ele tem observado
            nos últimos tempos. Segundo ele, existem cada vez menos penitentes
            realmente dispostos a rezar e cantar, além daqueles que não
            frequentam a igreja regularmente durante o ano, e isso deixa “muito
            a desejar”. “Se tiver 500, 600, aí você pode colocar 80, 100
            [dispostos]. O resto é para responder, não tem aquela dedicação, o
            fervor de rezar o Pai Nosso, a Ave Maria, a Santa Rainha”, lamenta.
            “Tem penitente que só sai na Sexta-Feira [Santa]. Não vai na igreja.
            É penitente? Fica a interrogação, viu? Ser penitente no cotidiano é
            se manter no mesmo lugar. É manter a fé, a postura, o compromisso. A
            primeira segunda-feira [do mês], rezar. Se não for à missa [dedicada
            aos penitentes], mas rezar [em casa]”, desabafa.
          </p>
          <p>
            Para o atual presidente, Igor, o importante é guardar a Sexta-Feira
            Santa para a procissão. Ele comenta que “tem muitos penitentes que
            são caminhoneiros e rodam as estradas desse Brasil; outros trabalham
            em outros empregos; e temos até um peão que também roda o Brasil
            competindo”, e, no entanto, retornam a cidade para participar da
            procissão na Sexta-Feira Maior, pois a levam como compromisso.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>OS PENITENTES IRÃO ACABAR?</h2>

          <p>
            O futuro, para os penitentes, é uma construção diária. Desde as
            dificuldades de aceitação por parte da Igreja Católica até problemas
            internos, eles sempre procuraram formas de resolver os impasses e
            continuar reivindicando seus lugares e sua fé. E isso traz
            resultados visíveis no dia de hoje: a procissão se torna mais
            “forte”, “bonita” e “organizada” a cada ano que passa, segundo
            Victor Santos, sendo um baluarte da cultura dorense.
          </p>
          <p>
            A nova geração, destaca ele, não pode deixar essa cultura cessar,
            pois o município “respira fé”, sendo popularmente conhecida como a
            Capital Sergipana da Fé. Mas o que que motiva Victor? A fé e o amor
            pela procissão. “Sem a fé a gente não é nada. A gente tem também que
            ter amor e respeito [pela procissão]. Não adianta só a gente ir lá
            na sexta-feira da Paixão e dizer: ‘Eu sou penitente’. Penitente não
            é só no dia, a gente tem que se comportar como penitente durante
            toda a nossa vida”, afirma. Ele também espera que após sua morte,
            outras pessoas, tocadas pelas rezas que fez em vida, também rezem
            por ele e pelos outros penitentes.
          </p>
          <p>
            Igor, também da nova geração, exalta o respeito aos ancestrais como
            fundamental para a continuidade do grupo. “Aqueles que não conhecem
            e não valorizam as suas raízes não podem se sustentar de perto por
            muito tempo. Então as nossas raízes são aqueles que nos precederam,
            são aqueles que se esforçaram, que se doaram para que aquilo
            chegasse até nós. Então, assim, eles tiveram um papel preponderante
            que nos dá força para prosseguir”. Ele fala da alegria, ao ver
            senhores como Seu Jorge, ainda participando da procissão: “O corpo
            padece, mas o corpo é carne, é pecaminoso, o corpo é a nossa
            inclinação, mas o espírito ele enobrece. Então é muito bonito ver”.
          </p>

          <ImageCarousel images={IMAGES.carousel_sec3} />

          <p>
            Em sua trajetória, Seu Jorge Santos não deixou de completar o
            percurso nenhuma vez, e sequer sentou em algum momento. “Mesmo o
            corpo já pedindo [para parar] um pouco, a boa vontade que você tem
            de fazer aquilo ali, lhe leva além. Se repetir [a procissão] outra
            noite, eu tô prontinho! Porque não levo aquilo com uma brincadeira.
            Levo a sério, pela fé”, conta ele, que está prestes a fazer 74 anos
            de uma vida marcada pela religiosidade.
          </p>
          <p>
            Victor é, ao mesmo tempo, o presente e o futuro da tradição secular.
            E isso quem diz é o atual decano, Seu Jorge. “Eu que já prometi e se
            Deus me permitir assim, daqui mais um ano ou dois, ou quando Deus
            quiser, o meu substituto vai ser esse aí, ó. Esse daí é meu
            substituto. Porque eu vejo [como] um rapaz que tem capacidade de
            entregar [a seriedade e compromisso necessários]”, diz ele enquanto
            aponta de forma orgulhosa para o jovem penitente.
          </p>
          <p>
            Quando alguma coisa acontece em sua vida, o primeiro pensamento de
            Victor é: “Meu Deus, será que eu vou conseguir sair de penitente?”,
            pergunta aflito. “Recentemente eu sofri um choque elétrico, eu sofri
            uma descarga elétrica no trabalho e a primeira coisa que veio na
            minha mente. ‘Meu Deus, não deixe com que eu pare de andar ou que eu
            tenha alguma coisa porque eu ainda preciso muito sair de
            penitente’”, completa.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.pullQuote}
          >
            "Os penitentes nunca vão acabar. A crença de ser penitente nunca vai
            acabar por causa disso, porque é muita gente que tem prazer em
            participar."
          </motion.div>

          <p>
            Por si só, a frase do decano do grupo já acalenta as angústias do
            historiador Luiz Antônio Barreto com relação às tradições quaresmais
            em Sergipe. Ela indica que, mesmo que sobrem poucos integrantes, a
            fé dos penitentes, pelo menos em Dores, vai muito além do
            superficial e da quantidade de participantes. A partir de diversas
            renovações, a prática de penitência se tornou um modo de vida para
            muitos.
          </p>
          <p>
            Mas, elaborando-a um pouco mais, a resposta é: dentre outros
            lugares, eles estavam em Nossa Senhora das Dores. E lá permanecem
            até hoje, apesar dos conflitos, das dificuldades e da passagem do
            tempo. Ou seja: não desapareceram! Os penitentes de Dores
            resistiram, e, contrariando a expectativa (ou previsão?) de Barreto,
            se renovaram e seguem se renovando para não cair em esquecimento. E,
            se depender da fé das mais de 500 pessoas que participam da
            procissão todos os anos, o futuro também está garantido.
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
