import { Link } from 'react-router-dom';
import styles from './headerMobile.module.css';
import homeIcon from '../../assets/homeIcon.png';
import addIcon from '../../assets/addIcon.png';

const HeaderMobile = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeLink}>
        <button className={styles.homeButton}>
          <img src={homeIcon} alt="Home" className={styles.homeIcon} />
          <span className={styles.homeText}>Home</span>
        </button>
      </Link>
      <Link to="/nuevo-video" className={styles.addLink}>
        <button className={styles.addButton}>
          <img src={addIcon} alt="Add" className={styles.addIcon} />
        </button>
      </Link>
    </header>
  );
};

export default HeaderMobile;
