import { NextPage } from "next";
import Image from "next/future/image";
import { useState } from "react";

type SingleImageProps = {
  alt: string;
  style?: object;
  width: number;
  height: number;
  url: string;
  class?: string;
  hover?: boolean;
};

const SingleImage: NextPage<SingleImageProps> = (props) => {
    const [tamanho, setTamanho] = useState({
        width: props.width,
        height: props.height
    });

    const onHoverImage = () => {
        if(!props.hover) return;
        setTamanho({ width: tamanho.width * 1.2, height: tamanho.height * 1.15})
    };

    const onLeaveHoverImage = () => {
        if (!props.hover) return;
        setTamanho({
            width: props.width,
            height: props.height,
        })
    };

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: 3,
        borderRadius: 22,
        ...props.style,
      }}
      onMouseEnter={onHoverImage}
      onMouseLeave={onLeaveHoverImage}
    >
      <Image
        src={props.url}
        alt={props.alt}
        width={tamanho.width}
        height={tamanho.height}
        style={{ verticalAlign: "middle", borderRadius: 20 }}
      ></Image>
    </div>
  );
};

export default SingleImage;
