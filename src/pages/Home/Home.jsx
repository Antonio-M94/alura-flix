import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HeaderMobile from '../../components/Header/HeaderMobile';

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
