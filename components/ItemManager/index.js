import styles from "./styles.module.scss";
import Manager from "../../styles/Manager.module.scss";
import { FaTrash, FaEdit } from "react-icons/fa";
import Image from "next/image";

export const ImtemManager = () => {
  return (
    <div className={styles.contents}>
      <div className={Manager.productHover}>
        <div className={Manager.container}>
          <Image
            width={250}
            height={270}
            alt=""
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
          <div className={Manager.middle}>
            <div htmlFor="file" className={Manager.text}>
              <FaEdit />
            </div>
          </div>
        </div>
      </div>
      <h4>Title of product</h4>
      <div className={styles.buttons}>
        <button className={Manager.managerButton}>
          <FaEdit />
        </button>
        <button className={Manager.managerButton}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
