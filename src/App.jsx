import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderNuevoVideo from './components/Header/HeaderNuevoVideo';
// import HeaderMobile from './components/Header/HeaderMobile';
// import Home from './pages/Home/Home';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <NuevoVideo />
      {/* <HeaderMobile /> */}
      <HeaderNuevoVideo />
      <Footer />
    </>
  );
}

export default App;
