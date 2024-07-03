import { Link } from 'react-router-dom';
import styles from './headerNuevoVideo.module.css';
import homeIcon from '../../assets/homeIcon-nuevo-video.png';
import addIcon from '../../assets/addIcon-nuevo-video.png';

const HeaderNuevoVideo = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeLink}>
        <button className={styles.homeButton}>
          <img src={homeIcon} alt="Home" className={styles.homeIcon} />
        </button>
      </Link>
      <Link to="/nuevo-video" className={styles.addLink}>
        <button className={styles.addButton}>
          <img src={addIcon} alt="Add" className={styles.addIcon} />
          <span className={styles.addText}>Nuevo Video</span>
        </button>
      </Link>
    </header>
  );
};

export default HeaderNuevoVideo;
