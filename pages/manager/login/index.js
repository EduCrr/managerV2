import styles from "./styles.module.scss";
import Manager from "../../../styles/Manager.module.scss";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className={styles.modal}>
        <div className="login">
          <div className={styles.loginContent}>
            <h2>Autentifique</h2>
            <div className={Manager.formContact}>
              <form>
                <input required placeholder="Email" />
                <input required placeholder="Senha" />
                <input className={Manager.submit} type="submit" value="Login" />
              </form>
            </div>
          </div>
          <div className={styles.footer}>
            <span> Desenvolvido por:</span>
            <Link href="produto/adicionar">
              <a>
                <img src="/8poroito.png" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.title}>© 2022 8poroito</div>
        </div>
      </div>
    </>
  );
};

export default Login;
