import { Default } from "../../../components/Manager/Default";
import styles from "./styles.module.scss";
import Manager from "../../../styles//Manager.module.scss";
import { FaPlus } from "react-icons/fa";
import { ContentManager } from "../../../components/Manager/ContentManager";
import { ImtemManager } from "../../../components/Manager/ItemManager";
import { Initial } from "../../../components/Manager/Initial";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        //   staggerChildren: 0.1
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Default>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Initial />
        <div className="items">
          <div className={styles.items}>
            <div className={styles.title}>
              <h1>Products</h1>
              <Link href="produto/adicionar">
                <a>
                  <button className={Manager.managerButton}>
                    <FaPlus />
                  </button>
                </a>
              </Link>
            </div>
            <ImtemManager />
            <ImtemManager />
            <ImtemManager />
            <ImtemManager />
          </div>
        </div>
        <div className="items">
          <div className={styles.items}>
            <div className={styles.title}>
              <h1>Content</h1>
            </div>
            <ContentManager />
          </div>
        </div>
      </motion.div>
    </Default>
  );
};

export default Home;
