import styles from './banner.module.css';
import bannerImage from '../../assets/banner.png';
import playerImage from '../../assets/player.png';

const Banner = () => {
  return (
    <>
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
      <section className={styles.container}>
        <div className={styles.card}>
          <div className={styles.tag}>Front End</div>
          <h2 className={styles.title}>Challenge React</h2>
          <p className={styles.description}>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <img src={playerImage} alt="Player" className={styles.playerImage} />
      </section>
    </>
  );
};

export default Banner;
