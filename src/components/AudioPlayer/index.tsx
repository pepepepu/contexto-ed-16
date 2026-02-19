import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import styles from "../../pages/Entrevistas/entrevistas.module.css";

function AudioPlayer({
  title,
  src,
  legenda,
}: {
  title: string;
  src: string;
  legenda?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <figure style={{ margin: "4rem 0" }}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className={styles.audioPlayerBox}
        style={{ margin: 0 }}
      >
        <span className={styles.audioLabel}>OUÇA: {title}</span>
        <div className={styles.audioControls}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className={styles.playBtn}
          >
            {isPlaying ? (
              <Pause size={20} color="#000" />
            ) : (
              <Play size={20} color="#000" />
            )}
          </motion.button>
          <div className={styles.waveVisual}>
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [10, 30, 15, 25, 10] : 4,
                  opacity: isPlaying ? 1 : 0.3,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                  delay: i * 0.03,
                  ease: "easeInOut",
                }}
                className={styles.waveBar}
              />
            ))}
          </div>
        </div>
        <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
      </motion.div>
      {legenda && (
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
          {legenda}
        </figcaption>
      )}
    </figure>
  );
}

export default AudioPlayer;
