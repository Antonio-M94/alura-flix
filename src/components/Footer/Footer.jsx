import styles from './Footer.module.css';
import logoAlura from '../../assets/logo-alura.png';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <img src={logoAlura} alt="Logo Alura" className={styles.logo} />
    </footer>
  );
};

export default Footer;
