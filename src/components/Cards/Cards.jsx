import styles from './cards.module.css';
import deleteIcon from '../../assets/delete.png';
import editIcon from '../../assets/edit.png';
const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.tag}>Front End</div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <img
              className={styles.itemImage}
              src="https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_960_720.jpg"
              alt="test1"
            />
            <div className={styles.itemButtons}>
              <button className={styles.deleteButton}>
                <img src={deleteIcon} alt="Borrar" />
                <p>Borrar</p>
              </button>
              <button className={styles.editButton}>
                <img src={editIcon} alt="" />
                <p>Editar</p>
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.itemImage}
              src="https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_960_720.jpg"
              alt="test1"
            />
            <div className={styles.itemButtons}>
              <button className={styles.deleteButton}>
                <img src={deleteIcon} alt="Borrar" />
                <p>Borrar</p>
              </button>
              <button className={styles.editButton}>
                <img src={editIcon} alt="" />
                <p>Editar</p>
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.itemImage}
              src="https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_960_720.jpg"
              alt="test1"
            />
            <div className={styles.itemButtons}>
              <button className={styles.deleteButton}>
                <img src={deleteIcon} alt="Borrar" />
                <p>Borrar</p>
              </button>
              <button className={styles.editButton}>
                <img src={editIcon} alt="" />
                <p>Editar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.tag}>Front End</div>
        <div className={styles.itemContainer}>
          <div className={styles.item}>
            <img
              className={styles.itemImage}
              src="https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_960_720.jpg"
              alt="test1"
            />
            <div className={styles.itemButtons}>
              <button className={styles.deleteButton}>
                <img src={deleteIcon} alt="Borrar" />
                <p>Borrar</p>
              </button>
              <button className={styles.editButton}>
                <img src={editIcon} alt="" />
                <p>Editar</p>
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.itemImage}
              src="https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_960_720.jpg"
              alt="test1"
            />
            <div className={styles.itemButtons}>
              <button className={styles.deleteButton}>
                <img src={deleteIcon} alt="Borrar" />
                <p>Borrar</p>
              </button>
              <button className={styles.editButton}>
                <img src={editIcon} alt="" />
                <p>Editar</p>
              </button>
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.itemImage}
              src="https://cdn.pixabay.com/photo/2023/10/20/14/25/ai-generated-8329596_960_720.jpg"
              alt="test1"
            />
            <div className={styles.itemButtons}>
              <button className={styles.deleteButton}>
                <img src={deleteIcon} alt="Borrar" />
                <p>Borrar</p>
              </button>
              <button className={styles.editButton}>
                <img src={editIcon} alt="" />
                <p>Editar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
