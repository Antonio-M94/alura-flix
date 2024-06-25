import styles from './headerMobile.module.css';
import homeIcon from '../../assets/homeIcon.png';
import addIcon from '../../assets/addIcon.png';

const HeaderMobile = () => {
  return (
    <header className={styles.container}>
      <button className={styles.homeButton}>
        <img src={homeIcon} alt="Home" />
        <p>Home</p>
      </button>
      <button className={styles.addButton}>
        <img src={addIcon} alt="Add" />
      </button>
    </header>
  );
};

export default HeaderMobile;
