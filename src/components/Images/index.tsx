import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { NextPage } from "next";
import styles from '../../styles/images.module.css';
import SingleImage from "./SingleImage";
import { useState } from "react";

const Images: NextPage = () => {
  const [images, setImages] = useState([
    "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/estatua-teresa-cristina-teresopolis-rj-39.jpg.webp?alt=media&token=046c1302-d7b5-4457-891a-98e2248dd0e6",
    "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f",
    "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/resort-e-parque-de-diversoes-teresopolis.jpg?alt=media&token=3d586580-6d65-4c2e-a313-77f5dae5bb3d",
    "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/shutterstock_443796448.jpg?alt=media&token=76ec5bfa-693b-42b5-9ed4-03ea40dc39c2"
  ])

  const shadowArrow = { filter: "drop-shadow(0px 0px 1px rgba(0,0,0, 0.3))"  };

  const avancarImagem = () => {
    let newImages = [];
    let lastIndex = images.length - 1;

    newImages.push(images[lastIndex]);
    for (let i = 0; i < lastIndex; i++) {
      newImages.push(images[i]);
    } 
    
    setImages(newImages);
  }

  const retrocederImagem = () => {
    let newImages = [];
    let lastIndex = images.length - 1;

    for (let i = 1; i <= lastIndex; i++) {
      newImages.push(images[i]);
    }
    newImages.push(images[0]);

    setImages(newImages);
  }

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
        <SingleImage url={images[0]} width={200} height={150} alt="ImageLeft" />
      </div>
      <SingleImage
        url={images[1]}
        width={400}
        height={300}
        alt="ImageCenter"
        style={{ zIndex: 1 }}
        hover={true}
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
          width={200}
          height={150}
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
