import { Default } from "../../../components/Manager/Default";
import styles from "./styles.module.scss";
import Manager from "../../../styles//Manager.module.scss";
import { FaPlus } from "react-icons/fa";
import { ContentManager } from "../../../components/Manager/ContentManager";
import { ImtemManager } from "../../../components/Manager/ItemManager";
import { Initial } from "../../../components/Manager/Initial";
import Link from "next/link";

const Home = () => {
  return (
    <Default>
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
    </Default>
  );
};

export default Home;
