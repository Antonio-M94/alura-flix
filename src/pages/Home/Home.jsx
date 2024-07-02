import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Cards />
      <HeaderMobile />
    </div>
  );
};

export default Home;
