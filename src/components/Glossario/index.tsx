import { useState } from "react";
import styles from "./glossario.module.css";

const GLOSSARIO_DATA = [
  {
    id: 1,
    titulo: "Ijexá",
    descricao:
      "Ritmo de origem iorubá, associado aos orixás, especialmente Oxum. No afoxé, o ijexá marca o passo do cortejo e cria um movimento coletivo, cadenciado e contínuo.",
  },
  {
    id: 2,
    titulo: "Padê de Exu",
    descricao:
      "Ritual realizado antes do cortejo para pedir licença, proteção e abertura de caminhos. É uma forma de garantir que a manifestação ocorra sem conflitos ou impedimentos, dedicado a Exu.",
  },
  {
    id: 3,
    titulo: "Atabaque",
    descricao:
      "Instrumento de percussão de origem africana usado em rituais religiosos e manifestações culturais. No afoxé, não é apenas musical: tem função espiritual e simbólica.",
  },
  {
    id: 4,
    titulo: "Agogô",
    descricao:
      "Instrumento metálico de percussão, composto por duas campanas, responsável por marcar o tempo do ritmo. Seu som guia o andamento do cortejo.",
  },
  {
    id: 5,
    titulo: "Xequerê",
    descricao:
      "Instrumento feito com cabaça envolta por contas ou sementes. Produz um som contínuo e marcante, reforçando o balanço corporal do cortejo.",
  },
  {
    id: 6,
    titulo: "Estandarte",
    descricao:
      "Bandeira que identifica o afoxé. Geralmente carrega símbolos, cores e referências aos orixás, funcionando como elemento de representação e proteção do grupo.",
  },
  {
    id: 7,
    titulo: "Axé",
    descricao:
      "Força vital que move pessoas, objetos e rituais. No contexto do afoxé, refere-se à energia espiritual que sustenta o cortejo e seus participantes.",
  },
  {
    id: 8,
    titulo: "Orixá",
    descricao:
      "Divindade das religiões de matriz africana, como o Candomblé, que representa forças da natureza, qualidades humanas e princípios espirituais. Cada afoxé costuma ser dedicado a um orixá específico.",
  },
  {
    id: 9,
    titulo: "Yalorixá",
    descricao:
      "Liderança religiosa feminina nos terreiros de Candomblé. É responsável pela condução espiritual, organização da casa de axé e preservação dos fundamentos religiosos.",
  },
  {
    id: 10,
    titulo: "Candomblé de rua",
    descricao:
      "Expressão usada para definir o afoxé, destacando a transposição dos rituais e símbolos do terreiro para o espaço público, sem perder seu caráter religioso.",
  },
  {
    id: 11,
    titulo: "Casa de axé",
    descricao:
      "Outra forma de se referir ao terreiro. É o espaço sagrado onde se realizam os rituais e onde a tradição é transmitida entre gerações.",
  },
  {
    id: 12,
    titulo: "Filhos de santo",
    descricao:
      "Pessoas iniciadas em uma casa de axé, ligadas espiritualmente a um orixá e à liderança religiosa do terreiro.",
  },
];

function GlossarioCard({ item }: { item: (typeof GLOSSARIO_DATA)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`${styles.cardWrapper} ${isFlipped ? styles.flipped : ""}`}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront} onClick={() => setIsFlipped(true)}>
          <div className={styles.titulo}>{item.titulo}</div>
          <div className={styles.hint}>clique para saber</div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.tituloBack}>{item.titulo}</div>
          <div className={styles.descricao}>{item.descricao}</div>
          <div
            className={styles.voltar}
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            ← voltar
          </div>
        </div>
      </div>
    </div>
  );
}

export function Glossario() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTag}>Glossário</div>
        <h1>Glossário do Afoxé</h1>
        <p>Clique nos cards para revelar os significados</p>
      </div>

      <div className={styles.stripe}></div>

      <div className={styles.grid}>
        {GLOSSARIO_DATA.map((item) => (
          <GlossarioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
