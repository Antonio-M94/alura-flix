import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logoAlura from '../../assets/logo-alura.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src={logoAlura} alt="Logo Alura" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          Home
        </Link>
        <Link to="/nuevo-video" className={styles.navItem}>
          Nuevo Video
        </Link>
      </nav>
    </header>
  );
};

export default Header;
