import { NextPageWithLayout } from './_app';
import AppLayout from '../components/AppLayout';
import styles from '../styles/home.module.css';
import Images from '../components/Images';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.containerBody}>
      <div className={styles.containerText}>
        <span style={{ fontSize: 40 }} className={styles.innerShadow}>
          SEJA
        </span>
        <span
          style={{
            fontSize: 100,
            fontWeight: 600,
            marginTop: -15,
            marginBottom: -15,
          }}
          className={styles.innerShadow}
        >
          BEM-VINDO
        </span>
        <span
          style={{ fontSize: 30, paddingTop: 10 }}
          className={styles.innerShadow}
        >
          À CIDADE DE{" "}
          <strong
            style={{ fontSize: 40 }}
            className={styles.innerShadowTeresopolis}
          >
            TERESÓPOLIS
          </strong>
        </span>
      </div>

      <Images
        arrayImages={
          ["https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/estatua-teresa-cristina-teresopolis-rj-39.jpg.webp?alt=media&token=046c1302-d7b5-4457-891a-98e2248dd0e6",
          "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/teresopolis-rj.jpg?alt=media&token=630a03d1-1f6e-40ed-9a04-cdebb8991e1f",
          "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/resort-e-parque-de-diversoes-teresopolis.jpg?alt=media&token=3d586580-6d65-4c2e-a313-77f5dae5bb3d",
          "https://firebasestorage.googleapis.com/v0/b/turistere.appspot.com/o/shutterstock_443796448.jpg?alt=media&token=76ec5bfa-693b-42b5-9ed4-03ea40dc39c2"]
        }
      ></Images>
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
