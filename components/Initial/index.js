import { FaSearch } from "react-icons/fa";
import Manager from "../../styles/Manager.module.scss";
import styles from "./styles.module.scss";

export const Initial = () => {
  return (
    <>
      <div
        className="linkName"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Home</div>
        <div className={styles.formContact}>
          <form>
            <div className="search">
              <input placeholder="Search" />
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
