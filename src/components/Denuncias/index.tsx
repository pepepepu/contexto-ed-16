import { useState } from "react";
import styles from "./denuncias.module.css";

const ORGAOS_DATA = [
  {
    id: "mp",
    icon: "⚖️",
    nome: "Ministério Público",
    tag: "Proteção de direitos",
    desc: "Defende os direitos coletivos e individuais dos cidadãos.",
    texto:
      "O Ministério Público pode investigar e processar casos de intolerância religiosa como crime. É possível registrar a denúncia diretamente em qualquer promotoria de justiça do seu estado. O MP tem o dever de zelar pelo cumprimento das leis e pela proteção dos direitos fundamentais de todos os cidadãos.",
    fullWidth: false,
  },
  {
    id: "dp",
    icon: "🛡️",
    nome: "Defensoria Pública",
    tag: "Assistência gratuita",
    desc: "Assistência jurídica gratuita para orientação e representação.",
    texto:
      "A Defensoria Pública oferece assistência jurídica gratuita a pessoas que não têm condições de contratar um advogado particular. Atende vítimas de intolerância religiosa, orienta sobre os direitos e pode representá-las em ações judiciais. O serviço está disponível em todos os estados brasileiros.",
    fullWidth: false,
  },
  {
    id: "oab",
    icon: "📋",
    nome: "OAB",
    tag: "Orientação jurídica",
    desc: "Ordem dos Advogados do Brasil oferece orientação jurídica.",
    texto:
      "A OAB disponibiliza serviços de orientação jurídica por meio de suas seccionais estaduais. Em muitos casos, é possível agendar atendimento gratuito para receber orientações sobre como proceder diante de situações de violação da liberdade religiosa.",
    fullWidth: false,
  },
  {
    id: "delegacia",
    icon: "🚔",
    nome: "Delegacias de Polícia",
    tag: "Registro de ocorrência",
    desc: "Registro formal de boletim de ocorrência sobre o caso.",
    texto:
      "A delegacia de polícia é o local indicado para registrar o boletim de ocorrência em casos de intolerância religiosa. O registro formal é um passo importante para dar início à investigação policial e pode ser necessário para outras medidas legais. Algumas cidades contam com delegacias especializadas em crimes de intolerância.",
    fullWidth: false,
  },
  {
    id: "universidades",
    icon: "🎓",
    nome: "Núcleos Jurídicos Universitários",
    tag: "Auxílio acadêmico gratuito",
    desc: "Assistência jurídica gratuita oferecida por diversas universidades em todo o país.",
    texto:
      "Diversas universidades brasileiras mantêm núcleos de prática jurídica que prestam assistência gratuita à população. Esses núcleos são supervisionados por professores e atendem casos variados, incluindo violações de direitos fundamentais como a liberdade religiosa. Consulte as universidades da sua região para verificar disponibilidade.",
    fullWidth: true,
  },
];

export function Denuncias() {
  const [activeModal, setActiveModal] = useState<
    (typeof ORGAOS_DATA)[0] | null
  >(null);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.stripeTop}></div>

        <div className={styles.header}>
          <h1>
            Sofreu intolerância religiosa? <em>Saiba como denunciar</em>
          </h1>
          <p>
            Conheça os canais de apoio disponíveis para quem teve sua liberdade
            religiosa violada no Brasil.
          </p>
        </div>

        <a href="tel:100" className={styles.disque}>
          <div className={styles.disqueIcon}>📞</div>
          <div>
            <div className={styles.disqueNum}>Disque 100</div>
            <div className={styles.disqueDesc}>
              Ouvidoria Nacional de Direitos Humanos (ONDH)
            </div>
          </div>
          <div className={styles.disqueBadge}>24h por dia</div>
        </a>

        <div className={styles.orgaos}>
          <div className={styles.sectionLabel}>Onde buscar apoio</div>
          <div className={styles.hoverHint}>
            👆 Clique em cada canal para saber mais
          </div>
          <div className={styles.orgaosGrid}>
            {ORGAOS_DATA.map((orgao) => (
              <div
                key={orgao.id}
                className={`${styles.orgaoCard} ${orgao.fullWidth ? styles.fullWidth : ""}`}
                onClick={() => setActiveModal(orgao)}
              >
                <span className={styles.orgaoIcon}>{orgao.icon}</span>
                <div className={styles.orgaoNome}>{orgao.nome}</div>
                <div className={styles.orgaoDesc}>{orgao.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerSource}>
            Fonte: Ministério dos Direitos Humanos e da Cidadania
          </div>
        </div>
        <div className={styles.stripeBottom}></div>
      </div>

      {/* MODAL OVERLAY */}
      {activeModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveModal(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalIcon}>{activeModal.icon}</span>
                <div className={styles.modalTitle}>{activeModal.nome}</div>
              </div>
              <button
                className={styles.modalClose}
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalTag}>{activeModal.tag}</div>
              <p>{activeModal.texto}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
