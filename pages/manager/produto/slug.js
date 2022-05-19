import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { useRef } from "react";
import Image from "next/image";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import {
  FaTrash,
  FaPlus,
  FaSave,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const ProductSlug = () => {
  const [imgFile, setImgFile] = useState();
  const { quill, quillRef } = useQuill();
  const [value, setValue] = useState();

  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const onImageChange = (e) => {
    setImgFile(e.target.files.length);
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
      <div className="linkName">Product | </div>
      <div className={styles.singleProduct}>
        <div className={styles.left}>
          <Slider {...settings} ref={sliderRef}>
            <Image
              alt=""
              width={450}
              height={620}
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            />
            <Image
              alt=""
              width={450}
              height={620}
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            />
          </Slider>
          <div className={styles.arrows}>
            <div onClick={gotoPrev}>
              <FaLongArrowAltLeft />
            </div>
            <div onClick={gotoNext}>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="items">
          <div className={styles.right}>
            <div className={Manager.formContact}>
              <form>
                <div className={styles.ajustTop}>
                  <input placeholder="Title" />
                  <div className="editor">
                    <div ref={quillRef} placeholder="Digite seu conteudo" />
                  </div>
                </div>
                <div className={styles.ajustBottom}>
                  <input
                    className={Manager.submit}
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className="items">
          <div className={Manager.formContact}>
            <form>
              <input placeholder="Data" />
              <select>
                <option>Categories</option>
              </select>
              <div>
                <button className={Manager.managerButton}>
                  <FaSave size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.images}>
        <div className="items">
          <form>
            <div className={styles.content}>
              <div className={styles.more}>
                <h2>Images</h2>

                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={onImageChange}
                  style={{ display: "none" }}
                />
                {imgFile === 1 && <p>{imgFile} imagem selecionada</p>}
                {imgFile > 1 && <p>{imgFile} imagens selecionadas</p>}
                <label htmlFor="file">
                  <div className={Manager.managerButton}>
                    <div
                      htmlFor="file"
                      style={{ width: "15px", height: "17px" }}
                    >
                      <FaPlus size={14} />
                    </div>
                  </div>
                </label>
              </div>
              <div className={styles.singleImages}>
                <Image
                  alt=""
                  height={80}
                  width={80}
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                />
                <div className={styles.title}>Product name</div>
                <div className={styles.btns}>
                  <div className={Manager.managerButton}>
                    <div style={{ width: "15px", height: "17px" }}>
                      <FaTrash size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.save}>
                <button className={Manager.managerButton}>
                  <FaSave size={14} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Default>
  );
};

export default ProductSlug;
