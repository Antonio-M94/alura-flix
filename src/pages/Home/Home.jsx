import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Cards />
    </div>
  );
};

export default Home;
