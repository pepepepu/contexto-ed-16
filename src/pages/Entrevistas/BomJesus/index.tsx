import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../entrevistas.module.css";

import hero from "../../../assets/bomJesus/hero.jpg";
import imagem01 from "../../../assets/bomJesus/imagem01.jpg";
import imagem02 from "../../../assets/bomJesus/imagem02.jpg";
import imagem03 from "../../../assets/bomJesus/imagem03.jpg";
import imagem04 from "../../../assets/bomJesus/imagem04.jpg";
import imagem05 from "../../../assets/bomJesus/imagem05.jpg";
import imagem06 from "../../../assets/bomJesus/imagem06.jpg";

const IMAGES = {
  hero: hero,
  img01: imagem01,
  img02: imagem02,
  img03: imagem03,
  img04: imagem04,
  img05: imagem05,
  img06: imagem06,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export function BomJesus() {
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
            BOM JESUS
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.heroSubtitle}
          >
            O cortejo de Bom Jesus dos Navegantes representa uma manifestação
            religiosa e cultural passada em família, de geração para geração
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
            Por{" "}
            <strong>
              Aline S., Eduarda S., Fernanda F., Larissa P. e Yasmim C.
            </strong>
          </span>
        </motion.div>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>
            TRADIÇÃO QUE RESISTE SOBRE AS ÁGUAS
          </h2>
          <p>
            Reverenciada nas ruas de Aracaju e protegida pelas águas do rio
            Sergipe, a procissão do Bom Jesus dos Navegantes se mantém viva ano
            após ano. Iniciou com os pescadores em 1914 e desde então reúne os
            fiéis no dia 1º de janeiro.{" "}
          </p>

          <p>
            O Bom Jesus simboliza a proteção de quem vive seus dias navegando e
            lembra a ligação da comunidade com o rio e o mar. A procissão
            terrestre começa na Colina Santo Antônio no bairro Santo Antônio e
            segue até a Ponte do Imperador, no centro da capital, onde a imagem
            é colocada em um barco para a travessia pelas águas. Hoje, menos
            embarcações e poucos pescadores participam do cortejo fluvial, mas a
            tradição resiste e o povo acompanha agradecendo pelas bênçãos
            concedidas e pedindo paz em mais um ano que se inicia.{" "}
          </p>

          <p>
            O livro “História das romarias em Sergipe”, organizado por Ane Luíse
            Silva Mecenas Santos e Magno Francisco de Jesus Santos, relata que a
            tradição surgiu na Igreja de Santo Antônio, a primeira de Aracaju,
            da união entre a comunidade católica e os pescadores. Nos dias
            atuais, a organização da procissão e a sua execução são
            responsabilidade da Igreja do Espírito Santo, conhecida também como
            Convento de Santo Antônio, que fica logo abaixo da Colina.{" "}
          </p>

          <p>
            Em busca dos nossos personagens, passamos pelo Convento. Tocamos a
            campainha às 13h40 do dia 5 de novembro de 2025. Uma senhora
            apareceu na janela discretamente. Ao notá-la, nós nos apresentamos e
            pedimos informações sobre a procissão. Pela porta da secretaria, ela
            disse que estava de saída e por “azar” nos encontrou. Nesse primeiro
            contato, sentimos nossas expectativas de acolhimento quebradas. Mas,
            ainda assim, conseguimos um número de telefone e um ponto de partida
            para a nossa reportagem. Apesar desse início desafiador, atingimos o
            objetivo que havíamos planejado: contar a história e a tradição da
            Festa de Bom Jesus dos Navegantes por meio daqueles que a vivenciam
            todos os anos. Durante a apuração, encontramos seis fiéis, escutamos
            suas experiências de devoção e, a partir desses relatos, percebemos
            que a fé em Bom Jesus está profundamente ligada a uma herança de
            família, passando de geração em geração. Infelizmente, também é uma
            tradição que tem se perdido com o tempo.{" "}
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>NA CASA MAIS ANTIGA, UM FIEL</h2>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img src={IMAGES.img01} alt="" loading="lazy" />
            <figcaption></figcaption>
          </motion.figure>
          <p>
            Em frente à Igreja Santo Antônio, reside o Senhor Antônio Aciole,
            morador da casa mais antiga do bairro. Onde vive há 48 anos e
            acompanha a procissão como católico e devoto ao Bom Jesus dos
            Navegantes de Aracaju, como ele gosta de chamar. Antônio conta com
            muito orgulho sobre a casa onde mora. “Tenho o privilégio de morar
            na casa mais antiga, onde foi transferido o Palácio do Governo, em
            frente à Capela do Santo Antônio, e do Bom Jesus dos Navegantes de
            Aracaju”, comenta Antônio. Como uma memória fresca, relembra o tempo
            que acompanhava a procissão do morro do Pirro, outro nome para a
            Colina de Santo Antônio, com sua mãe, era o dia de vestir roupa nova
            e caminhar junto ao povo.
          </p>

          <p>
            Seu Antônio conta sobre a história que conhece do início da festa.
            “Quem deu essa imagem [Bom Jesus] foi o português, que o navio
            encalhou na foz do Rio Sergipe, ele prometeu ao Bom Jesus que todo
            ano faria a festa do Bom Jesus e assim seguiu.” Os relatos do
            histórico popular são diversos, mas algo está certo, foi feita no
            mar com os pescadores. A comunidade católica hoje em dia mantém a
            procissão em tradição. Nas lembranças de Seu Antônio, a festa era
            ainda mais bela, feita por vários órgãos públicos, a comunidade ia
            em direção ao rio carregando na mão a imagem. Os pescadores se
            reuniam na Ponte do Imperador no Bairro Industrial para soltar fogos
            e festejar por mais um ano de navegação e proteção.
          </p>

          <p>
            Ao longo dos anos houve mudanças. Seu Antônio relembra a estrutura
            da igreja Santo Antônio antes da reforma. “A primeira igreja é em
            frente à minha casa. Fizeram aquele estilo gótico. Colocaram Bom
            Jesus no centro, Santo Antônio ao lado, e era São Francisco e outra
            imagem, que é São Luís de França, no outro.” comentou. As gerações
            católicas passaram e fizeram mudanças, mas apesar de ficar triste
            com as alterações que vão além da reforma da igreja e da maneira de
            reproduzir a tradição, Seu Antônio continua prestigiando o Bom
            Jesus, durante os dias de missa.
          </p>

          <p>
            Ao lado do seu irmão, que é uma pessoa com deficiência física,
            Antônio frequenta as missas toda semana e nos dias de festa
            participa da procissão de carro. “A gente vinha a pé, lá do Siqueira
            Campos com a minha mãe (...) para acompanhar, e depois ficava ali no
            corredor da frente [Rua da Frente], acompanhava pelo bairro
            Industrial, esperava lá e depois voltava”, relatou. Na fé, Seu
            Antônio continua fazendo o trajeto na procissão e, com essa ação,
            abre mais um ano em devoção. “Eu sou devoto de Santo Antônio, que
            meu nome é Antônio. E sou [devoto] a imagem [lembrança] de Maria
            Santíssima. E assim, Jesus sempre carrego no coração eternamente.
            Toda vida eu fui católico e morrerei católico eternamente”.
          </p>

          <p>
            No dia 27 de dezembro,no sábado, foi o primeiro dia da procissão,
            com saída da Colina de Santo Antônio, para a imagem ser guardada na
            Catedral Metropolitana de Aracaju até o dia 1º de janeiro. Com a
            programação, que começou com a missa às 15h, a procissão passou
            pelas ruas dos bairros Santo Antônio e Centro durante o entardecer
            do último sábado do ano, com católicos acompanhando e orando a Bom
            Jesus dos Navegantes.{" "}
          </p>

          <p>
            A ida da Colina para a catedral seguiu com poucas pessoas
            acompanhando, maioria idosas que estavam na missa. Já nas ruas, viam
            as pessoas saírem de suas casas para ver a procissão passando e até
            cantavam. Durante essa caminhada, famílias unidas, irmãs idosas de
            braços dados caminhando juntas com terço na mão. Na chegada da
            catedral, a igreja estava cheia, os fiéis esperando a imagem do Bom
            Jesus entrar.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>NAVEGANDO COM O BOM JESUS</h2>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img src={IMAGES.img02} alt="" loading="lazy" />
            <figcaption></figcaption>
          </motion.figure>
          <p>
            Acompanhante da procissão desde criança, Seu Pedro Henrique Almeida,
            barqueiro de 73 anos, comenta sobre as mudanças dos últimos anos.
            “Antigamente, a gente acompanhava até de navegação à vela. Agora
            não, está aparentemente meio moderno. Era a navegação a remo, a
            pano, a tototó e agora estamos quase no nível de lancha’’, comentou.
            Mas, lamenta a queda da quantidade de barcos em navegação no dia da
            festa, além da falta de incentivo do poder público.
          </p>

          <p>
            Dentro do seu barco, ao lado do filho, comenta com pesar:
            “Antigamente a gente arrumava, botava a bandeira, pintava a
            navegação. Agora tá difícil até de comprar óleo”, declarou Seu
            Pedro. Apesar das dificuldades, esteve mais um ano na procissão,
            acompanhando de perto, com seu totóto, o Bom Jesus navegando no Rio
            Sergipe. Percorreu levando algumas pessoas, e a nossa equipe, que
            estavam às margens da Ponte do Imperador quando o barco do Bom Jesus
            saiu.{" "}
          </p>

          <p>
            Seguindo a tradição do seu pai, Hugo Almeida conta sobre a sua
            experiência com a festa de Bom Jesus dos Navegantes. “A gente pede
            proteção para nossas embarcações e clarear nossos caminhos durante o
            ano que se inicia. E ainda comenta: “Desde 2000, tem competição de
            barco a vela, que participo no dia primeiro antes da procissão’’.
            Essa competição é uma tradição dos barqueiros, todo dia primeiro,
            pela manhã, os barqueiros da Barra dos Coqueiros, em Sergipe, pegam
            os barcos menores para apostar corrida pelo rio, quando termina,
            ficam na espera da hora da procissão fluvial do Bom Jesus dos
            Navegantes.{" "}
          </p>

          <p>
            Ele fala sobre a influência do seu pai em relação a essa tradição.
            “Meu pai me ensinou tudo o que eu sou hoje, graças a ele, pretendo
            manter essa a sua tradição de acompanhar a procissão’’, declarou
            Hugo, enquanto olha para o pai ao seu lado. Hugo também demonstra
            preocupação sobre o número de barcos. “A gente tá lutando para
            manter os tototós com muito esforço, porque já acabaram umas seis
            embarcações por falta de condições de manter e vai acabando. A
            tendência é acabar’’, relatou.{" "}
          </p>

          <p>
            Este ano, não foi diferente, nossa equipe de reportagem notou que
            foram poucos os barcos que acompanharam a procissão fluvial, e isso
            se tornou um impedimento para aquelas pessoas que não tem barcos e
            querem ir, então, esperam os tototós na Ponte do Imperador para que
            levem-nas ao rio, pois, não é por falta de pessoas querendo ir, mas
            sim, de barcos para levar.{" "}
          </p>

          <p>
            Hugo declara que essa diminuição dos barcos acompanhando a procissão
            procede porque a maioria dos tototós não têm os recursos suficientes
            que são exigidos da Marinha para poder acompanhar, como equipamentos
            de segurança para as pessoas. Hugo ainda comenta sobre a
            desvalorização do patrimônio da Barra dos Coqueiros, os tototós, não
            passam de status. “Ganhou nome de patrimônio público da cidade, mas
            não chegou nenhuma ajuda para manter”, compartilhou.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>MOVIDA PELA FÉ</h2>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img
              src={IMAGES.img03}
              alt="Dona
            Ivanira Lemos"
              loading="lazy"
            />
            <figcaption>Dona Ivanira Lemos</figcaption>
          </motion.figure>
          <p>
            No pé da Colina do Santo Antônio, mora uma das figuras centrais da
            organização da Festa de Bom Jesus dos Navegantes em Aracaju. Dona
            Ivanira Lemos, mais conhecida como Nira, é referência para aqueles
            que acompanham a festa de perto todo ano. Seja da igreja ou apenas
            fiéis, todos a procuram para saber mais informações sobre a
            comemoração. Não é por acaso, nascida e criada no bairro Santo
            Antônio, Dona Nira, de 77 anos, participa da festa desde a
            juventude, quando era apenas uma das fiéis na procissão. E, durante
            décadas, deu conta de todo tipo de tarefas relacionadas à preparação
            de festas religiosas do bairro como a Festa de Bom Jesus dos
            Navegantes e a Festa de Santo Antônio.{" "}
          </p>

          <p>
            Com exceção da programação, da data e da compra das flores, Dona
            Ivanira ficava responsável por quase toda a organização das tarefas.
            Dentre elas, fazer o contato com todas as autoridades competentes
            necessárias para a realização da procissão por terra e rio, como a
            SMTT, Polícia Civil, Capitania dos Portos de Sergipe, etc;
            providenciar carros de som e estrutura de palcos e som ao vivo, além
            de ajudar com a decoração. Sendo movida pela fé e devoção aos
            santos, à Igreja Católica e ao bairro onde vive, três elementos que
            estão profundamente interligados com a sua identidade.{" "}
          </p>

          <p>
            Dona Nira sempre esteve ao lado da igreja, já foi coordenadora do
            Apostolado da Oração por 20 anos e possui uma relação especial com a
            Igreja do Espírito Santo, foi lá onde se casou com o seu marido,
            Wilson Dória, há mais de 50 anos. Ele era seu companheiro de festas
            e que quando eram jovens “pintavam e bordavam”, não era muito
            religioso, mas sempre fazia suas vontades. Criaram seus quatro
            filhos, primeiro na Rua Japaratuba e depois na Avenida João Ribeiro,
            bem abaixo da Igreja do Santo Antônio, onde vive até hoje.
          </p>

          <p>
            Alguns deles tentaram convencê-la a se mudar do bairro depois do
            falecimento do pai, uma das vítimas da pandemia de Covid-19, em
            2020. Porém, ela afirma que não se vê morando em outro lugar, já que
            é parte integral da comunidade. Conhece todos aqueles que moram ao
            redor da colina e suas histórias. No Santo Antônio, consegue “rodar
            de cima para baixo”, sem muita preocupação. É onde está a Igreja que
            frequenta, os amigos e as pessoas que conhece, as memórias de uma
            vida inteira. E apesar de não conseguir mais subir ou descer a
            ladeira devido à artrose nos dois joelhos, continua mantendo a
            memória do marido viva e participando todo ano da procissão de
            carro.
          </p>

          <p>
            A morte do marido não foi a única perda que Dona Ivanira enfrentou.
            Antes disso, ela já havia perdido seu filho mais velho devido aos
            danos cerebrais causados por uma meningite meningocócica, uma
            infecção bacteriana das meninges que protegem o sistema nervoso. Era
            ela quem cuidava dele quando ainda estava vivo. Durante esse
            período, se apegou a sua fé e agradece a Deus e aos santos por seu
            filho ter vivido 40 anos mesmo assim. “Minha filha, a fé é uma
            grandeza que Deus dá para a gente. Então, essa fé é uma segurança”,
            testemunha.
          </p>

          <p>
            Este ano, Dona Nira não foi responsável pela organização da Festa de
            Bom Jesus dos Navegantes como sempre fez, mas preferiu não
            compartilhar os motivos. Conta que não foi avisada sobre a mudança
            de datas que ocorreu na primeira procissão no dia 27 de dezembro e,
            mesmo descobrindo por terceiros, ainda assim fez o percurso dentro
            do carro de som como de costume. No entanto, na virada do ano,
            preferiu passar com os filhos e não participou da procissão também
            pela primeira vez em anos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://uploads.knightlab.com/storymapjs/47af41dc57b8d304790ff14ff8c48284/trajeto-da-procissao-de-bom-jesus-dos-navegantes/draft.html "
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
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>PROMESSA DE VIDA</h2>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img src={IMAGES.img04} alt="Albino Silva" loading="lazy" />
            <figcaption>Albino Silva</figcaption>
          </motion.figure>
          <p>
            Albino Silva é um dos nomes que ajudam a manter viva a tradição da
            Procissão do Bom Jesus dos Navegantes em Aracaju. A relação da
            família com a festa religiosa atravessa gerações e tem origem em uma
            promessa feita por seu pai, Albino Silva da Fonseca, ainda jovem.
            Ele conta sobre a história do pai com emoção e orgulho, relembra a
            promessa que iniciou a devoção ao Santo.
          </p>

          <p>
            A história começa em Itabaiana, de onde o pai era natural. Órfão de
            mãe aos 10 anos de idade, ele deixou a cidade ainda muito novo e
            seguiu para Aracaju em busca de uma vida melhor. Para sobreviver,
            ele vinha trazer farinha no lombo de burro para vender na capital.
            E, justamente no dia 1º de janeiro chegou a Aracaju, onde se deparou
            pela primeira vez com a procissão do Bom Jesus dos Navegantes.{" "}
          </p>

          <p>
            Tocado pela fé e pelo simbolismo daquele momento, ele fez uma
            promessa ao santo: “Se conseguisse crescer na vida e prosperar,
            ajudaria a festa todos os anos.” Segundo o filho, o pedido foi
            atendido. Ao longo da vida, Albino Silva prosperou e se tornou
            empresário em diversos segmentos: montou a maior emissora do estado,
            a famosa Rádio Liberdade, foi proprietário da primeira granja do
            estado, dono de fazenda e fundou uma empresa de gás, chamada Sergipe
            Gás; da água mineral Itaperoá, (atual Indaiá). Fiel à promessa, ele
            passou a contribuir ativamente com a procissão por muitos anos.{" "}
          </p>

          <p>
            Entre as ações mais marcantes estava a organização dos fogos de
            artifício. Naquele tempo, havia um barco de seu Cizinho, localizado
            na rua Maruim, em Aracaju. Era por meio dele que os fogos eram
            adquiridos e levados até o Bairro Industrial, onde ficava a
            comunidade dos pescadores. De lá, os fogos eram soltados no momento
            em que a procissão passava, tornando a celebração ainda mais
            simbólica para os fiéis.{" "}
          </p>

          <p>
            Albino Silva faleceu há 33 anos, no dia 19 de junho de 1992, aos 83
            anos. Mas sua devoção deixou um legado. Desde jovem, o filho já
            acompanhava o pai na procissão e, após sua morte, deu continuidade à
            tradição. Hoje, ele conta que participa da festa há mais de 40 anos,
            sendo que por mais de uma década esteve ao lado do pai durante o
            percurso. “Antigamente, a gente fazia tudo a pé, ia e voltava
            caminhando”, recorda.{" "}
          </p>

          <p>
            Com o avanço da idade e problemas no joelho e na perna, passaram a
            acompanhar parte do trajeto de carro. Atualmente, ele voltou a
            acompanhar a procissão a pé, mantendo viva a prática que aprendeu
            com o pai, que era muito católico. Ao seguir participando da
            procissão do Bom Jesus dos Navegantes, Albino não apenas cumpre uma
            promessa familiar, mas reafirma uma tradição de fé que atravessa
            gerações.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>CANTANDO EM PROCISSÃO</h2>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img src={IMAGES.img05} alt="Maria Auleína" loading="lazy" />
            <figcaption>Maria Auleína</figcaption>
          </motion.figure>
          <p>
            Assim como para muitos, a fé também foi uma herança de família para
            Maria Auleína, ou Leia, como gosta de ser chamada. Para ela, foi a
            mãe, a quem era muito apegada, que passou a tradição católica quando
            Leia ainda era muito nova. Guarda com muito carinho as lembranças de
            quando ela ensinava os filhos a se benzer e rezar o Pai Nosso e a
            Ave Maria. Sua mãe era doceira e sempre vendia em festas ou eventos
            religiosos e, às vezes, a levava para acompanhá-la. Ela relembra o
            seu doce favorito de castanha torrada com açúcar e as embalagens em
            forma de casa feitas à mão com saudades. As duas sempre acompanhavam
            a procissão de Bom Jesus dos Navegantes, antes da mãe falecer quando
            tinha seis anos.
          </p>

          <p>
            Atualmente, continua a ir à procissão honrar a memória da mãe, agora
            na capital sergipana. Hoje, aposentada, tem mais tempo para dedicar
            a sua fé, indo à Paróquia São José e Santa Teresa de Calcutá,
            fazendo parte do apostolado e cantando com o grupo Jesus
            Misericordioso. Consegue dedicar-se mais à sua religião e, este ano,
            avançou ainda mais na conexão com a festa, comparecendo aos dois
            dias de procissão. “Eu pulei, pulei mesmo”, ela contou. “Louvei e
            cheguei em casa [me sentindo] leve, mais do que os outros dias. Cada
            vez que a gente vai, a gente recebe bênçãos diferentes.”
          </p>

          <p>
            Leia diz que nunca fez uma promessa para Bom Jesus, mas afirma que
            pede forças para comparecer todos os anos. Até agora, tem
            funcionado. Fortalece sua conexão com o Espírito Santo ao continuar
            sua tradição de vestir branco e fazer o trajeto mesmo com dores no
            joelho, como neste ano. “Se eu estiver doente ou cansada, quando é
            no dia, eu não sinto mais nada”, relatou. “Eu subi a colina e não
            senti o joelho doer. Quem cura não é o santo. É sua fé”.
          </p>

          <p>
            E a fé é fundamental na vida de Leia, pois de dores ela entende
            muito. Apesar do semblante frágil, dentro dela mora uma força
            profunda, e sempre reza por mais. Teve uma infância difícil, lidando
            com a morte da mãe e por causa do relacionamento conturbado com o
            pai. Começou a trabalhar muito nova como empregada doméstica e ao
            longo de sua vida, foi a fé que manteve sua esperança. “Se eu parar
            de ir, eu acho que eu caio, caio mesmo”, confessou. “Deus me deu
            essa força pra eu seguir Ele. E jamais eu quero deixar por nenhum
            [outro] tipo de religião”.
          </p>
        </AnimatedSection>
        <AnimatedSection className={styles.contentBlock}>
          <h2 className={styles.sectionTitle}>SERVINDO COMO GUARDIÃO</h2>
          <motion.figure
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mediaContainer}
          >
            <img src={IMAGES.img06} alt="Seu Antônio" loading="lazy" />
            <figcaption>Seu Antônio</figcaption>
          </motion.figure>
          <p>
            As tradições religiosas com o tempo se tornam também culturais,
            movidas pela fé e união das comunidades, nesse caso, o bairro Santo
            Antônio, visitado pelos turistas o ano inteiro, mas que também é a
            casa de várias pessoas que cresceram dentro da história. Se tornam
            parte e personagens principais para contar e manter vivas as
            tradições do Bom Jesus dos Navegantes.{" "}
          </p>

          <p>
            Subindo a ladeira da Colina de Santo António, encontra-se um senhor
            na igreja, Seu Antônio, com o apelido de “Galo”, como gosta de ser
            chamado. Ele contou que recebeu o apelido menino novo, por causa do
            cabelo em que sempre ficava em pé, ele não gostava quando chamavam
            assim quando criança, mas com o tempo, se acostumou e passou a
            gostar. Hoje, para quem chega, ele se apresenta assim.{" "}
          </p>

          <p>
            A Igreja da Colina Santo Antônio ainda tem funcionamento em dois
            dias na semana, terça-feira e quinta-feira são realizadas missas. E
            quem toma de conta da chave da igreja e arrumação é Galo. Todos os
            dias pontualmente às 9 horas, ele sobe a ladeira para abrir as
            portas da igreja e deixar à disposição daqueles que vão orar e
            visitar. Aproveita para fazer suas preces do dia e organizar o
            altar. Para Galo, é um privilégio servir ao Senhor, cuidar do espaço
            como se fosse sua casa . “Ando servindo para chegar a Deus, se eu
            não fizer isso, não chego. Você pode rezar todo dia, mas se não
            tiver obra, não está fazendo nada”, comentou.{" "}
          </p>

          <p>
            Durante a procissão terrestre, os católicos se juntam para pedirem
            forças e agradecer pelo ano que está começando, além de terem
            esperanças para um ano novo melhor, com cantos alegres e louvando a
            Bom Jesus dos Navegantes. Tanto no dia 27 quanto no dia 1º, as duas
            procissões têm algo em comum: param e ficam em silêncio em frente ao
            Hospital São José, localizado próximo a Colina, para orarem e
            pedirem a recuperação dos enfermos.
          </p>

          <p>
            No momento da oração, havia pessoas na procissão que se ajoelhavam
            para rezar com seus terços na mão, enquanto outros aproveitavam para
            descansar, sentavam na beira da rua, baixando a cabeça em respeito.
            Na chegada da procissão à colina, finalizou o dia com a missa, sendo
            realizada pelo arcebispo fora da pequena igreja, com o Santo
            rodeado. Um dia que todos saem de suas casas para tornar a tradição
            viva, com a esperança de passar de geração para geração a crença no
            Bom Jesus dos Navegantes.
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
