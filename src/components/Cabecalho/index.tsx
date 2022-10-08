import type { NextPage } from "next";
import styles from "../../styles/cabecalho.module.css";
import Image from "next/image"; 
import Link from "next/link";
import {
  MdCameraAlt,
  MdRestaurantMenu,
  MdEditCalendar,
  MdAccountCircle,
} from "react-icons/md";

const Cabecalho: NextPage = () => {
  const styleIcon = { verticalAlign: "text-bottom", filter: "drop-shadow(1px 1px 0.5px black)" };

  return (
    <div style={{ paddingTop: 10, paddingLeft: "3%", display: "flex", paddingRight: "3%" }}>
      <Link href={"/"}>
        <Image src="/icone.svg" width={100} height={100} alt="logo" style={{ cursor: 'pointer' }}/>
      </Link>
      
      <div className={styles.menu}>
        <Link href={"/pontos-turisticos"}>
          <a className={styles.subMenu}>
            <MdCameraAlt size={20} style={styleIcon} /> Pontos Turisticos
          </a>
        </Link>

        <Link href={"/restaurantes"}>
          <a className={styles.subMenu}>
            <MdRestaurantMenu size={20} style={styleIcon} /> Restaurantes
          </a>
        </Link>

        <Link href={"/eventos"}>
          <a className={styles.subMenu}>
            <MdEditCalendar size={20} style={styleIcon} /> Eventos
          </a>
        </Link>
        <div className={styles.loginContainer}>
          <Link href={"/login"}>
            <a className={styles.subMenu}>
              <MdAccountCircle size={20} style={styleIcon} /> Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cabecalho;