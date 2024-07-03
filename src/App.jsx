import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
