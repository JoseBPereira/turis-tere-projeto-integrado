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

      <Images></Images>
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
