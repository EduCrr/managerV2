import styles from "./styles.module.scss";
import Manager from "../../styles/Manager.module.scss";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
export const ContentManager = () => {
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
    <div className={styles.contentType}>
      <h5>Content Type</h5>
      <div className={Manager.formContact}>
        <form>
          <input placeholder="Title" />

          <div className="editor">
            <div ref={quillRef} placeholder="Digite seu conteudo" />
          </div>

          <input
            type="file"
            id="file"
            onChange={onImageChange}
            style={{ display: "none" }}
          />
          <div className={Manager.container}>
            <label htmlFor="file">
              <Image
                alt=""
                className={Manager.selected}
                width={500}
                height={400}
                src={
                  imgFile ??
                  "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                }
              />
              <div className={Manager.middle}>
                <div htmlFor="file" className={Manager.text}>
                  <FaFileAlt />
                </div>
              </div>
            </label>
          </div>
          <input className={Manager.submit} type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
