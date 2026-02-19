import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../entrevistas.module.css";

import hero from "../../../assets/lavagemConceicao/hero.jpg";
import imagem01 from "../../../assets/lavagemConceicao/imagem01.jpg";
import imagem02 from "../../../assets/lavagemConceicao/imagem02.jpg";
import imagemCarrosel01 from "../../../assets/lavagemConceicao/imagemCarrosel01.jpg";
import imagemCarrosel02 from "../../../assets/lavagemConceicao/imagemCarrosel02.png";
import imagemCarrosel03 from "../../../assets/lavagemConceicao/imagemCarrosel03.jpg";
import imagemCarrosel04 from "../../../assets/lavagemConceicao/imagemCarrosel04.jpg";
import imagemCarrosel05 from "../../../assets/lavagemConceicao/imagemCarrosel05.jpg";

import imagemCarrosel02_01 from "../../../assets/lavagemConceicao/imagemCarrosel02_01.jpg";
import imagemCarrosel02_02 from "../../../assets/lavagemConceicao/imagemCarrosel02_02.jpg";

import imagemCarrosel03_01 from "../../../assets/lavagemConceicao/imagemCarrosel03_01.jpg";
import imagemCarrosel03_02 from "../../../assets/lavagemConceicao/imagemCarrosel03_02.jpg";
import imagemCarrosel03_03 from "../../../assets/lavagemConceicao/imagemCarrosel03_03.jpg";

import imagemCarrosel04_01 from "../../../assets/lavagemConceicao/imagemCarrosel04_01.jpg";
import imagemCarrosel04_02 from "../../../assets/lavagemConceicao/imagemCarrosel04_02.jpg";
import imagemCarrosel04_03 from "../../../assets/lavagemConceicao/imagemCarrosel04_03.jpg";

const IMAGES = {
  hero: hero,
  imgSection1_1: imagem01,
  imgSection1_2: imagem02,
  carouselSection2_1: [
    imagemCarrosel01,
    imagemCarrosel02,
    imagemCarrosel03,
    imagemCarrosel04,
    imagemCarrosel05,
  ],
  carouselSection2_2: [imagemCarrosel02_01, imagemCarrosel02_02],
  carouselSection3_1: [
    imagemCarrosel03_01,
    imagemCarrosel03_02,
    imagemCarrosel03_03,
  ],
  carouselSection3_2: [
    imagemCarrosel04_01,
    imagemCarrosel04_02,
    imagemCarrosel04_03,
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export function Lavagem() {
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
            A força da fé contra a frieza do ferro
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.heroSubtitle}
          >
            A Lavagem da Conceição completou 43 anos em Aracaju e revelou, entre
            memórias, ritos e tensões, como o sincretismo religioso segue vivo
            mesmo diante de igrejas que fecham seus portões com cadeados
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
              Yan Lima, Maria Clara Batista, Raquel Lopes e Helen Basílio.
            </strong>
          </span>
        </motion.div>

        <AnimatedSection className={styles.contentBlock}>
          <p>
            <span className={styles.dropCap}>E</span> ra por volta das 9h da
            manhã de uma terça-feira quando chegamos à casa da Ialorixá (Mãe)
            Angélica, no bairro Santo Antônio, localizado na zona norte de
            Aracaju. Sentada em sua poltrona, com suas cinco guias em mãos,
            aguardava pacientemente o começo da entrevista. A sala de estar era
            composta por azulejos verdes, mesas e uma prateleira de vidro que
            continha alguns santos católicos e entidades do Candomblé, como São
            Cosme e Damião, Nossa Senhora da Conceição e Iemanjá; além desses,
            lembrancinhas de outras edições da Lavagem também encontravam-se no
            local.
          </p>
          <p>
            Assim que o cenário estava pronto, as câmeras ligadas e os
            microfones testados, Mãe Angélica pôs as guias no pescoço. Mas não
            simplesmente como se fossem apenas colares. Em um claro sinal de
            religiosidade e respeito, levou as guias em direção aos lábios para
            um beijo delicado e, em seguida, pressionou-as contra a testa. Após
            esse momento, ela estava pronta para nos contar a história de uma
            caminhada que está enraizada em sua alma desde sempre.
          </p>
          <p>
            A história se inicia no dia 8 de dezembro de 1981, com oito jovens
            vestibulandos em busca de uma aprovação nos cursos dos sonhos. O que
            mais tarde se transformaria em um movimento religioso é iniciado a
            partir de uma promessa, mas, também, precedido pela vontade de expor
            Oxum aos holofotes. Essa promessa, feita pelos estudantes há mais de
            quatro décadas, foi a de que, caso passassem no vestibular, iriam
            lavar as escadarias da Catedral Metropolitana como agradecimento
            pela graça.
          </p>
          <p>
            Todos os oito passaram no vestibular. E, então, após o resultado, o
            grupo composto por meninos e meninas organizou tudo o que seria
            necessário para o pagamento da promessa; conversaram com os
            responsáveis pela Igreja para realizar a lavagem, convidaram alguns
            terreiros para fazer parte do momento e se prepararam para o que
            seria o início de uma nova história em Aracaju.
          </p>
          <p>
            Ialorixá Angélica falava com sabedoria. Vidrados, com olhos e
            ouvidos atentos, e coração aberto para saber, absorvemos tudo o que
            nos contava; tal qual crianças quando param para escutar as
            histórias e vivências de suas avós. Sua fala era intercalada com os
            movimentos das mãos e com a saudade estampada em seu rosto. Ela
            estava totalmente dedicada a transmitir, com o melhor que pôde, como
            ocorreu a primeira Lavagem das Escadarias.
          </p>
          <p>
            Podíamos imaginar a cena retratada: os oito estudantes chegando na
            Praça Olímpio Campos, no dia 8 de dezembro, vestidos de branco e
            carregando baldes e vassouras. E, ao longe, observando os
            acontecimentos tal qual um filme no cinema, aqueles que tinham sido
            convidados a participar da Lavagem, como Mãe Angélica, à época uma
            jovem de 25 anos. Enquanto a lavagem acontecia, o medo da mídia, do
            governo e da igreja os mantiveram afastados da ação.
          </p>
          <p>
            Mas, apesar disso, continuaram parados ali, curiosos, exatamente
            como nós estávamos 43 anos depois. Eles viram os estudantes
            utilizarem seus baldes para retirar água da fonte que ficava na
            Praça e caminharem em direção a escadaria da igreja. As flores,
            colhidas ali mesmo, também foram levadas até onde se fazia a
            Lavagem. O momento, observando as fotos, era de descontração;
            meninos e meninas fazendo poses e brincando com as vassouras e
            baldes.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.imgSection1_1}
              alt="Detalhe da Chegança"
              loading="lazy"
            />
            <figcaption>Fig. 1 — O cortejo pelas ruas da cidade.</figcaption>
          </motion.figure>

          <p>
            E foi então que, olhando em nossos olhos, com aquele sentimento de
            saudade, a Ialorixá nos contou o momento que mudou tudo. Os
            vestibulandos caminharam em direção ao grupo que os observavam e
            pediram somente uma coisa: “Não deixem a festa parar.” Foi
            impossível negar aquele pedido. Comprometidos e esperançosos,
            algumas pessoas, como a Ialorixá, aceitaram o pedido de, a partir
            daquele momento, buscar realizar uma segunda edição. Não sabiam
            como, apenas que aquilo aconteceria.
          </p>
          <p>
            Mas parecia que Otávio Luiz, um dos estudantes que fizeram a
            promessa, sentia pressa na confirmação da continuidade. Ialorixá
            Angélica contou que ele foi atrás de alguns terreiros, buscando um
            Babalorixá que ficasse com a responsabilidade da festa. Foram vários
            “nãos” que teve que escutar até ouvir o “sim” de seu José de
            Oliveira; coincidentemente pai de Angélica.
          </p>
          <p>
            Antes de seguir rumo à universidade, Otávio só pediu uma coisa ao
            Babalorixá: que a manifestação cultural fosse registrada legalmente
            (algo possível de ser feito no país a depender do objetivo do
            registro, como proteção de tradição ou formalização de grupo).
            Saudosa, a Ialorixá lembra que, infelizmente, o pai não chegou a
            cumprir a promessa de registro da Lavagem; faleceu antes que pudesse
            ter realizado o combinado. Mas quem garantiu que isso acontecesse,
            algum tempo depois, estava na nossa frente, narrando toda aquela
            história.
          </p>

          <motion.figure
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.imgSection1_2}
              alt="Espadas e trajes"
              loading="lazy"
            />
            <figcaption>Fig. 2 — A representação da batalha.</figcaption>
          </motion.figure>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>Quando a fé ocupa as ruas</h2>

          <p>
            Na segunda-feira seguinte, chegamos na Praça Siqueira de Menezes, no
            bairro Santo Antônio, às 7h30min, todos vestidos com camisas
            brancas. A concentração para o cortejo estava marcada para às 8h e
            não queríamos chegar atrasados. Era uma manhã que prometia muito:
            todos estavam animados para descerem a ladeira da Colina de Santo
            Antônio em direção às ruas da cidade, prontos para levarem suas
            oferendas a Oxum, vestidos de amarelo e branco, cores da orixá.
          </p>
          <p>
            Aquele pequeno espaço estava cheio de cor, flores e vida. Mesmo
            ainda cedo (considerando que era uma segunda-feira de feriado), as
            batidas iniciais do tambor no trio fazia alguém a uns passos de
            distância balançar a saia amarela em uma dança calma e tímida.
            Outros batucavam os dedos em cima de umas das mesas de concreto que
            existem no local - uma delas usada para jogos de tabuleiro,
            conversando e aguardando o início da caminhada.
          </p>
          <p>
            Por volta das 9h30, tudo estava pronto. Trio ligado, a imagem de
            Nossa Senhora da Conceição presa e ornamentada com flores no teto de
            uma Saveiro vermelha, câmeras ligadas e muito protetor solar;
            afinal, a caminhada ia ser feita sob um sol de 33º graus. Ao longe,
            o batuque do som tocava enquanto descíamos a ladeira, acompanhados
            por fiéis e simpatizantes
          </p>
          <p>
            A primeira parte da caminhada foi curta; fizemos uma parada cerca de
            400 metros depois da Igreja de Santo Antônio. Era chegado o momento
            de Mãe Angélica falar algumas palavras sobre a importância da
            manifestação. Parados juntamente com ela estavam o padre da Igreja
            Católica Apostólica Brasileira (instituição cristã independente da
            Apostólica Romana, fundada em 1945 e que não faz parte do Conselho
            Nacional das Igrejas Cristãs), José Wellington dos Santos, o Ebomi
            Augusto Lessa e o Secretário de Cultura do Município de Aracaju,
            Paulo Corrêa, que reconhece a importância do cortejo para a
            preservação das tradições e o combate à intolerância religiosa.
          </p>

          <ImageCarousel images={IMAGES.carouselSection2_1} />

          <p>
            De mãos dadas, formando uma linha de frente para representar a união
            de todos os credos, a líder religiosa afirmou que realizar o cortejo
            da Lavagem todos esses anos nas ruas de Aracaju era, além de
            homenagear Oxum e Nossa Senhora da Conceição, uma forma de mostrar
            aos preconceituosos que ali não havia demônio. Nunca existiu e nunca
            existirá. Os aplausos que se seguiram foram instantâneos e vinham
            tanto por parte dos fiéis quanto das pessoas que paravam na rua para
            observar o cortejo.
          </p>
          <p>
            O discurso foi seguido pelas apresentações. Quatro pessoas, dois
            homens e duas mulheres, rodavam o lugar “demarcado” por eles
            cantando os seus ritos, clamando por Oxum. Eles estavam chamando
            ela, quase como se dissessem: “Ei, esta homenagem é para você, venha
            ver.” Era lindo; hipnotizante e religioso de uma maneira que poucos
            conhecem. Os pés batiam no chão, as saias dos vestidos rodavam entre
            uma dança e outra e os nossos olhos não saiam dali. Tínhamos medo de
            piscar e perder alguma coisa.
          </p>
          <p>
            E então começou a apresentação dos iniciadas, afinal o tema daquela
            edição era justamente eles. Estavam com vestimentas brancas e
            douradas, carregando plantas de São Jorge, espelhos e sendo
            coroadas. Todas tinham seu solo e, em cada movimento que fazia,
            representava alguma fase da origem da orixá. Passavam dançando,
            parecendo agrupar com elas todos os sentimentos de pertencimento.
            Naquele momento, os iniciados estavam se apresentando não mais para
            o público, mas sim para Oxum e começando sua missão para com o
            Candomblé.
          </p>
          <p>
            Nota da redação: a missão dos iniciados tem a ver com voltar o olhar
            para tudo aquilo que deve ser sustentado dentro de um terreiro. Para
            conduzir com dignidade e respeito os saberes deixados pelos
            ancestrais, preservando tudo aquilo que é voltado para a
            espiritualidade. Para que isso seja concretizado, os iniciados
            aprendem sobre as copas, as folhas, os banhos e cada instrumento
            trabalho na casa.
          </p>

          <ImageCarousel images={IMAGES.carouselSection2_2} />

          <p>
            O percurso continuou. Passamos pelas principais avenidas da região
            central de Aracaju em direção à Ponte do Imperador, nas margens do
            Rio Sergipe. Enquanto o cortejo seguia com músicas, danças e cantos,
            as pessoas que aguardavam a passagem começaram também a acompanhar.
            O público, algo em torno de 100 pessoas, que tinha inicialmente
            descido a Colina, agora já havia aumentado, com flores, alfazema e
            pedidos de intercessão e benção.
          </p>
          <p>
            Aqui percebemos algo importante: embora a intolerância religiosa
            ainda seja muito presente na sociedade - seja por falta de
            conhecimento ou ideias errôneas há muito tempo impregnadas na
            consciência, ainda há muitas pessoas que não fazem parte de
            religiões de matriz africana mas que clamam e acreditam no poder dos
            Orixás. No cortejo, todos os tipos de pessoas apareceram:
            trabalhadores, turistas, pessoas em situação de rua. Dançavam,
            pediam benção, acenavam e iam embora. A cena revelava um respeito
            silencioso e uma crença espontânea que atravessava classes, idades e
            preconceitos.
          </p>
          <p>
            Eram por volta de 11h30min quando chegamos à segunda parada do
            cortejo: a Ponte do Imperador. Aquele espaço, que parecia ter um
            tamanho consideravelmente bom, ficou pequeno quando as pessoas se
            reuniram para ver a próxima ação. Era chegada a hora de arrumar a
            cesta onde levariam as oferendas para o encontro do Rio Sergipe com
            o mar. O rito de passagem era celebrado com um círculo ao redor da
            cesta, com cantos da religião e banhos de alfazema, que tinham a
            intenção, principalmente, de proteção e limpeza, afastando
            negatividades.
          </p>
          <p>
            Enquanto esse ritual acontecia no centro da ponte, outras oferendas
            estavam sendo entregues individualmente pelos fiéis aos pés da
            escada que leva ao rio. Flores foram jogadas ao mar, assim como
            brincos e pulseiras; a alfazema também era jogada nas águas. O
            cheiro suave mas ao mesmo tempo refrescante do perfume estava
            impregnado nos quatro cantos da ponte.
          </p>
          <p>
            Aguardamos, concentrados, o início do trajeto para levar as
            oferendas. Um de nós estaria no barco junto com dois fiéis e os
            marinheiros; Raquel Lopes é quem nos representaria sobre as águas.
            Os bombeiros, por sua vez, estariam em um jet ski, acompanhando
            lateralmente o barco. Com a cesta amarela dentro do transporte e
            todos prontos para o momento, o barco foi se afastando.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.videoContainer}
          >
            <iframe
              width="100%"
              height="450"
              src="https://youtu.be/FmdvlJB9mzA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          <p>
            Enquanto Raquel se distanciava sobre as águas junto com o pequeno
            barco, nós três aguardamos o retorno em um momento de socialização
            com os outros participantes do cortejo. Muitos estavam curiosos para
            saber o que fazíamos ali, com câmeras, tripé e microfones. Foi
            quando a Ialorixá e seu produtor, Anderson de Oliveira (que também é
            seu filho), informaram nossa função: estávamos ali para aprender e
            poder contar, com afinco, uma história escrita com religiosidade e
            fé.
          </p>
          <p>
            Quando nos apresentamos como repórteres, Ebomi Laurinda aceitou
            falar um pouco da sua relação com a Lavagem. Ela, que acompanha há
            12 anos o cortejo, entende a importância da visibilidade do evento
            para preservação da identidade afro-brasileira no município. “A
            Lavagem não é um negócio só de Mãe Angélica; é uma demonstração da
            afro-cultura no estado de Sergipe”. No entanto, nos relata que ainda
            sente falta da participação de outros terreiros, informando que é
            uma pena que ainda não haja uma união mais forte.
          </p>
          <p>
            Ao ouvi-la, compartilhamos do mesmo sentimento que a tomava. Pensar
            que algo tão rico em religiosidade e cultura é ainda, por alguns,
            renegado, nos leva a crer que o receio não vem apenas de quem está
            do lado de fora da janela; às vezes ele também está dentro da casa.
            Mas isso não deixou que o brilho da Lavagem se apagasse dos olhos de
            Laurinda e dos demais fiéis. Com ou sem união entre os terreiros,
            eles ainda estariam ali, observando o pequeno barco que carregava as
            oferendas sumir na imensidão das águas.
          </p>
        </AnimatedSection>

        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>O aroma do sagrado na Lavagem</h2>

          <p>
            A euforia e a ansiedade predominavam no ambiente. Ao longe, bem
            pequenininhos, podíamos ver o barco voltando. Não demorou muito, a
            volta parecia ter sido mais rápida que a ida e isso foi confirmado
            quando Raquel finalmente voltou à terra firme e nos disse que dera
            sorte: as águas do rio não estavam tão agitadas naquela manhã.
            Animada, nos contou o que tinha acontecido. “Eles cantaram durante
            todo o percurso. Quando chegaram no encontro do rio com o mar,
            ofereceram a Oxum os itens que estavam na cesta nas águas,
            derramaram alfazema e champanhe. Foi lindo”.
          </p>
          <p>
            Agora que já estavam em terra firme novamente, era hora de voltarmos
            a andar, só que dessa vez em direção a Catedral Metropolitana de
            Aracaju, localizada na Praça Olímpio Campos, a 650 metros de onde
            estávamos. Os cantos e as danças continuavam, o trio emitia as
            músicas/preces que pareciam estar na ponta da língua dos que
            acompanhavam.
          </p>
          <p>
            Enquanto andávamos, tentávamos adivinhar como seria realizada a
            Lavagem; era a primeira vez de todo o grupo acompanhando o cortejo.
            Imaginávamos de onde retirariam a água para lavar as escadarias;
            onde estariam os baldes e as vassouras. Leigamente, ainda
            acreditávamos que haveria espuma ao redor e vassouras arrastadas
            pelo chão. Qual não foi a surpresa, então, ao avistarmos um palco
            quase rente ao final da escadaria? Onde ficariam os fiéis? Ali
            haveria espaço suficiente para jogar água sem prejudicar a estrutura
            montada?
          </p>
          <p>
            As respostas para essas perguntas surgiram aos poucos. A primeira de
            todas foi que nenhum espaço era limitado para eles. Uma vez que não
            podiam se amontoar aos pés da escadaria para assistir a última
            apresentação, se agruparam então em frente aos portões fechados da
            igreja. No meio, entre o fundo do palco e os portões de ferro, as
            mulheres vestidas de Oxum e demais iniciadas dançavam de acordo com
            o ritmo vocal do artista e integrante da comunidade do Axé Éden
            Brisio.
          </p>
          <p>
            A segunda resposta veio, para a nossa surpresa, em um recipiente de
            vidro. Não haveria água para lavar a escada, como foi feito da
            primeira vez. Quem lavaria aquele ambiente era nada mais, nada
            menos, do que a alfazema que nos acompanhou em todos os momentos do
            cortejo. Jogada no ar, o líquido atingia a todos. O cheiro cítrico
            era percebido na mesma hora. Tínhamos nossas mãos em concha para
            receber a alfazema; assim que o líquido tocava nossas palmas, os
            espalhávamos por todo o corpo e, principalmente, cabeça.
          </p>
          <p>
            Mas, mesmo tomados pelas sensações e experiências descobertas
            naquele dia, alguma coisa ainda parecia fora de lugar: os portões
            trancados. Não entendemos a razão de isso ser assim; afinal, havia
            fiéis católicos ajoelhados no chão desconfortável. Fiéis que
            pareciam também não compreender o motivo dos portões da Igreja de
            Nossa Senhora da Conceição estarem fechados justamente no dia
            dedicado a ela.
          </p>

          <ImageCarousel images={IMAGES.carouselSection3_1} />

          <p>
            Lembramos bem do momento em que uma voz surgiu no meio da multidão,
            declarando em um timbre forte e alto que aquilo não poderia estar
            acontecendo. A mulher, na faixa dos 40 anos, caminhava de um lado
            para outro, indignada com o cadeado que mantinha a igreja separada
            do sincretismo que acontecia naquele dia. Um pouco mais distante,
            outra mulher concordou. Não havia motivo para tal ação.
          </p>
          <p>
            Procuramos o pároco da Catedral, Anderson Gomes, para uma entrevista
            sobre o ocorrido. Nosso primeiro contato foi com a secretaria da
            Catedral, no dia 9 de dezembro, mas não obtivemos retorno da
            disponibilidade do padre. Por fim, tentamos contato com a
            Arquidiocese de Aracaju, para quem enviamos um ofício de solicitação
            de entrevista, mas apenas conseguimos como resposta que “a igreja
            não participa diretamente, apenas abre as portas para o pessoal
            possa fazer a lavagem”.
          </p>
          <p>
            Mas não gostaríamos de ouvir o padre sobre as portas; elas estavam
            abertas. Queríamos entender porque os portões de ferro estavam
            trancados com corrente e cadeado, mesmo que ali também estivessem
            membros católicos e devotos de Nossa Senhora da Conceição. Até o
            fechamento desta edição não obtivemos resposta.
          </p>
          <p>
            Embora a intenção dos candomblecistas fosse apenas realizar a
            Lavagem da Conceição em frente à igreja que tem o seu nome, e não
            invadir um lugar que não desejavam, o peso da desarmonia retratada
            ainda afetou alguns. E não só aqueles que acompanharam a Lavagem,
            mas também católicos que não tiveram outra opção a não ser se
            ajoelharem aos pés dos portões e rezar dali, no duro chão da
            calçada.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.pullQuote}
          >
            "Eu nunca os vi [portões] abertos nessa ocasião.<br></br>Para mim,
            essas portas fechadas representam só o desinteresse da parte de lá
            em viver nessa harmonia que a gente tá propondo. <br></br>Não
            queremos ocupar este espaço; nós já temos o nosso"
          </motion.div>

          <p>
            Mas isso não impediu que a manifestação continuasse. Cantos e mais
            cantos eram ouvidos; danças e mais danças eram vistas. As vozes
            permaneciam altas, com uma força descomunal, como se cantassem com a
            alma. Como se lutassem contra aqueles portões e dissessem “você não
            vai me vencer”. Os fiéis não arredaram o pé; nem os candomblecistas
            nem os católicos. E naquele momento percebemos o verdadeiro
            sincretismo se realizar enquanto uns rezavam de um lado para Nossa
            Senhora da Conceição e outros clamavam as bênçãos de Oxum.
          </p>
          <p>
            Quando a lavagem se deu por encerrada, flores amarelas foram
            deixadas em frente aos portões. Aos poucos, o ambiente foi se
            esvaziando, deixando no ar a energia e fé que há poucos minutos
            estavam sendo demonstradas. E também, aos poucos, começamos a ouvir
            murmúrios daqueles que se encontravam ajoelhados na calçada,
            questionando o porquê de os portões estarem fechados. “Isso não pode
            acontecer”, “Tudo isso no dia de Nossa Senhora”, “Que coisa feia”...
          </p>
          <p>
            Pouco tempo depois, a celebração ainda ecoava no ar quando alguns
            funcionários saíram da igreja com vassouras e baldes. As flores
            deixadas pelos candomblecistas, ainda coloridas e frescas, foram
            varridas e jogadas dentro de um vaso. Seriam descartadas no lixo. Às
            14h em ponto, os portões da Catedral Metropolitana de Aracaju foram
            abertos.
          </p>

          <ImageCarousel images={IMAGES.carouselSection3_2} />
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
