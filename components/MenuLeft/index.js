import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaEdit } from "react-icons/fa";
import { Theme } from "../Theme/Theme";
export const MenuLeft = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <ul>
          <li
            className={
              router.pathname === "/manager/home"
                ? styles.linkActive
                : styles.link
            }
          >
            <Link href="/manager/home">
              <a>
                <FaHome />
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/manager/sobre"
                ? styles.linkActive
                : styles.link
            }
          >
            <Link href="/manager/home">
              <a>
                <FaEdit />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};
