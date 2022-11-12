import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from '../../styles/images.module.css';
import SingleImage from "./SingleImage";
import { useState } from "react";

type ImagesProps = {
  arrayImages: string[];
  width: number;
  height: number;
};

const Images = ({ arrayImages, width, height } : ImagesProps) => {
  const [images, setImages] = useState<string[]>(arrayImages);

  const shadowArrow = { filter: "drop-shadow(0px 0px 1px rgba(0,0,0, 0.3))" };

  const retrocederImagem = () => {
    let newImages = [];
    let lastIndex = images.length - 1;

    newImages.push(images[lastIndex]);
    for (let i = 0; i < lastIndex; i++) {
      newImages.push(images[i]);
    }

    setImages(newImages);
  };

  const avancarImagem = () => {
    let newImages = [];
    let lastIndex = images.length - 1;

    for (let i = 1; i <= lastIndex; i++) {
      newImages.push(images[i]);
    }
    newImages.push(images[0]);

    setImages(newImages);
  };

  return (
    <div className={styles.container}>
      <div style={{ margin: "auto", marginRight: 50 }}>
        <MdArrowBackIos
          size={60}
          color={"#4DCB8C"}
          style={shadowArrow}
          className={styles.arrow}
          onClick={retrocederImagem}
        />
      </div>
      <div
        style={{
          verticalAlign: "middle",
          marginTop: "auto",
          marginBottom: "auto",
          marginRight: -40,
        }}
      >
        <SingleImage
          url={images[0]}
          width={width / 2}
          height={height / 2}
          alt="ImageLeft"
        />
      </div>
      <SingleImage
        url={images[1]}
        width={width}
        height={height}
        alt="ImageCenter"
        style={{ zIndex: 1 }}
        hover={true}
        class={styles.image}
      />
      <div
        style={{
          verticalAlign: "middle",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: -40,
        }}
      >
        <SingleImage
          url={images[2]}
          width={width / 2}
          height={height / 2}
          alt="ImageRight"
        />
      </div>
      <div style={{ margin: "auto", marginLeft: 50 }}>
        <MdArrowForwardIos
          size={60}
          color={"#4DCB8C"}
          style={shadowArrow}
          className={styles.arrow}
          onClick={avancarImagem}
        />
      </div>
    </div>
  );
};

export default Images;
