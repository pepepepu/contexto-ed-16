import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { SectionLink } from "../../types/interfaces";
import styles from "./Header.module.css";

interface HeaderProps {
  title: string;
  sections: SectionLink[];
}

const TAB_COLORS = ["#F2EA00", "#FCD000", "#FC8400", "#F54F00", "#f50800ff"];

function Header({ title, sections }: HeaderProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 150;
      const viewportTop = window.scrollY + headerHeight;
      const viewportBottom = window.scrollY + window.innerHeight;

      let maxVisibleHeight = 0;
      let mostVisibleSection = "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        const visibleTop = Math.max(viewportTop, sectionTop);
        const visibleBottom = Math.min(viewportBottom, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisibleSection = section.id;
        }
      }

      setActiveSection(mostVisibleSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScrollTo = (id: string) => {
    if (id === "expedientes") {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 150, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.logoContainer}>
          <motion.h1
            className={styles.title}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: "pointer" }}
          >
            {title}
          </motion.h1>
        </div>
      </div>

      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          {sections.map((section, index) => {
            const sectionColor =
              section.color || TAB_COLORS[index % TAB_COLORS.length];
            const isActive = activeSection === section.id;

            return (
              <li key={section.id} className={styles.navItem}>
                <button
                  type="button"
                  onClick={() => handleScrollTo(section.id)}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                  style={{ "--tab-color": sectionColor } as React.CSSProperties}
                >
                  {section.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
