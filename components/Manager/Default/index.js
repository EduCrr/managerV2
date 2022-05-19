import { MenuTop } from "../MenuTop";
import { MenuLeft } from "../MenuLeft";
import styles from "./styles.module.scss";

export const Default = ({ children }) => {
  return (
    <>
      <div className="top">
        <MenuTop />
      </div>
      <div className="left">
        <MenuLeft />
      </div>
      <main className={styles.content}>{children}</main>
      <div className={styles.footerManager}>
        <div>Todos os direitos reservados 2022</div>
        <div>8poroito</div>
      </div>
    </>
  );
};
