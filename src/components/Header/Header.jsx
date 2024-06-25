import styles from './header.module.css';
import logoAlura from '../../assets/logo-alura.png';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logoAlura} alt="Logo Alura" className={styles.logo} />
      <nav className={styles.navContainer}>
        <button className={styles.home}>home</button>
        <button className={styles.nuevoVideo}>nuevo video</button>
      </nav>
    </header>
  );
};

export default Header;
