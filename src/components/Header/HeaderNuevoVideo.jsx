import styles from './headerNuevoVideo.module.css';
import homeIcon from '../../assets/homeIcon-nuevo-video.png';
import addIcon from '../../assets/addIcon-nuevo-video.png';

const HeaderNuevoVideo = () => {
  return (
    <header className={styles.container}>
      <button className={styles.homeButton}>
        <img src={homeIcon} alt="Add" />
      </button>
      <button className={styles.addButton}>
        <img src={addIcon} alt="Home" />
        <p>Nuevo Video</p>
      </button>
    </header>
  );
};

export default HeaderNuevoVideo;
