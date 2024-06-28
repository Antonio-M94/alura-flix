import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';
import HeaderMobile from '../../components/Header/HeaderMobile';

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <Banner />
      <Cards />
    </div>
  );
};

export default Home;
