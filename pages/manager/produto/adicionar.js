import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
const Adicionar = () => {
  const [imgFile, setImgFile] = useState();
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImgFile(URL.createObjectURL(file));
    } else {
      setImgFile();
    }
  };

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <Default>
      <div className="linkName">Add Product</div>
      <div className={styles.right}>
        <div className={Manager.formContact}>
          <form>
            <input placeholder="Title" />
            <input placeholder="Data" />
            <select className={styles.format}>
              <option selected disabled>
                Choose a book format
              </option>
              <option>teste</option>
              <option>teste</option>
            </select>
            <div className="editor">
              <div ref={quillRef} placeholder="Digite seu conteudo" />
            </div>
            <div className={Manager.container}>
              <input
                type="file"
                id="file"
                multiple
                onChange={onImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="file">
                <Image
                  height={350}
                  width={450}
                  alt=""
                  className={Manager.selected}
                  src={
                    imgFile ??
                    "https://mladezj2cqfh.i.optimole.com/ZcuK1Xg.ECq7~2ccb/w:auto/h:auto/q:auto/https://www.take5.com.br/wp-content/themes/cardinal/images/default-thumb.png"
                  }
                />
                <div className={Manager.middle}>
                  <div htmlFor="file" className={Manager.text}>
                    <FaFileAlt />
                  </div>
                </div>
              </label>
            </div>
            <input className={Manager.submit} type="submit" value="Create" />
          </form>
        </div>
      </div>
    </Default>
  );
};

export default Adicionar;
