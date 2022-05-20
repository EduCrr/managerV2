import { Default } from "../../../components/Manager/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { motion } from "framer-motion";
const Adicionar = () => {
  const [imgFile, setImgFile] = useState();
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: -60,
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
      y: 140,
      opacity: 0,
      transition: {
        duration: 0.9,
        staggerChildren: 0.1,
      },
    },
  };

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
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
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
              <div className={Manager.container}>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={onImageChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="file">
                  <div className={Manager.labelPhoto}>
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
                  </div>
                  <div className={Manager.middle}>
                    <div htmlFor="file" className={Manager.text}>
                      <FaFileAlt />
                    </div>
                  </div>
                </label>
              </div>
              <div className="editor">
                <div ref={quillRef} placeholder="Digite seu conteudo" />
              </div>

              <input className={Manager.submit} type="submit" value="Create" />
            </form>
          </div>
        </div>
      </motion.div>
    </Default>
  );
};

export default Adicionar;
