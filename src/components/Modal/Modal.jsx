import styles from './modal.module.css';
import cancelButton from '../../assets/cancel.png';

const Modal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cancelButton}>
        <button>
          <img src={cancelButton} alt="Cancelar" />
        </button>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Editar Card:</h1>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="title">
            Título
          </label>
          <input
            id="title"
            className={styles.input}
            type="text"
            placeholder="Ingrese el título"
          />

          <label className={styles.label} htmlFor="category">
            Categoría
          </label>
          <select id="category" className={styles.input}>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Innovacion">Innovación</option>
            <option value="Gestion">Gestión</option>
          </select>

          <label className={styles.label} htmlFor="image">
            Imagen
          </label>
          <input
            id="image"
            className={styles.input}
            type="text"
            placeholder="URL de la imagen"
          />

          <label className={styles.label} htmlFor="video">
            Video
          </label>
          <input
            id="video"
            className={styles.input}
            type="text"
            placeholder="URL del video"
          />

          <label className={styles.label} htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            className={styles.textarea}
            placeholder="Ingrese la descripción"
          ></textarea>

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Guardar
            </button>
            <button className={styles.button} type="reset">
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
