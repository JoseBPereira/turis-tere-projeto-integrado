import { NextPageWithLayout } from './_app';
import AppLayout from '../components/AppLayout';
import styles from '../styles/home.module.css';
import Image from 'next/image';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.containerBody}>
      <div className={styles.containerText}>
        <span style={{ fontSize: 40 }} className={styles.innerShadow}>
          SEJA
        </span>
        <span
          style={{ fontSize: 100, fontWeight: 600, marginTop: -15, marginBottom: -15 }}
          className={styles.innerShadow}
        >
          BEM-VINDO
        </span>
        <span
          style={{ fontSize: 30, paddingTop: 10 }}
          className={styles.innerShadow}
        >
          A CIDADE DE{" "}
          <strong
            style={{ fontSize: 40 }}
            className={styles.innerShadowTeresopolis}
          >
            TERESÓPOLIS
          </strong>
        </span>
      </div>

      <div style={{ marginTop: 40, display: "flex" }}>
        <div style={{ margin: "auto", marginRight: 50 }}>
          <MdArrowBackIos
            size={60}
            color={"#4DCB8C"}
            style={{ filter: "drop-shadow(0px 0px 2px rgba(0,0,0, 0.3))" }}
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
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f"
            }
            alt="Image1"
            width={200}
            height={150}
            style={{ borderRadius: 20 }}
          ></Image>
        </div>
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f"
          }
          alt="Image1"
          width={400}
          height={300}
          style={{ borderRadius: 20, zIndex: 1 }}
        ></Image>
        <div
          style={{
            verticalAlign: "middle",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: -40,
          }}
        >
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f"
            }
            alt="Image1"
            width={200}
            height={150}
            style={{ borderRadius: 20 }}
          ></Image>
        </div>
        <div style={{ margin: "auto", marginLeft: 50 }}>
          <MdArrowForwardIos
            size={60}
            color={"#4DCB8C"}
            style={{ filter: "drop-shadow(0px 0px 2px rgba(0,0,0, 0.3))" }}
          />
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  );
};

export default Home
