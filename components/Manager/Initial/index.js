import { FaSearch } from "react-icons/fa";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export const Initial = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        //   staggerChildren: 0.1
      },
    },
    exit: {
      x: -140,
      opacity: 0,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        className="linkName"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Home</div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.formContact}
        >
          <form>
            <div className="search">
              <input placeholder="Search" />
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};
