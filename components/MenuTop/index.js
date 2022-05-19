import styles from "./styles.module.scss";
import Manager from "../../styles/Manager.module.scss";
import { FaPowerOff } from "react-icons/fa";
import Image from "next/image";

export const MenuTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.user}>
          <p>8poroito</p>
          <Image
            alt=""
            height={40}
            width={40}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_p_TOIEqMsaP4yTN9mJPWCIcZEmOABtDB_gXOCaDuKBw6K-iTbTctOZZSorgNf8J2OoU&usqp=CAU"
          />
        </div>
        <button className={Manager.managerButton}>
          <FaPowerOff />
        </button>
      </div>
    </div>
  );
};
