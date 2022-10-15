import { NextPage } from "next";
import Image from "next/future/image";

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
  return (
    <div
      className={props.class}
      style={{
        backgroundColor: "black",
        padding: 3,
        borderRadius: 22,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: props.width,
        height: props.height,
        ...props.style,
      }}
    >
      <Image
        src={props.url}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={{
          verticalAlign: "middle",
          borderRadius: 20,
        }}
      ></Image>
    </div>
  );
};

export default SingleImage;
