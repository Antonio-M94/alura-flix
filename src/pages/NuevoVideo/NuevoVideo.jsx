import HeaderNuevoVideo from '../../components/HeaderNuevoVideo/HeaderNuevoVideo';
import styles from './nuevoVideo.module.css';

const NuevoVideo = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>NUEVO VIDEO</h1>
        <p className={styles.subtitle}>
          COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
        </p>
        <form className={styles.form}>
          <h2 className={styles.formTitle}>Crear Tarjeta</h2>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label htmlFor="titulo">Título</label>
              <input type="text" id="titulo" placeholder="ingrese el título" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="categoria">Categoría</label>
              <select id="categoria">
                <option value="">seleccione una categoría</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Innovacion_gestion">Innovación y Gestión</option>
              </select>
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label htmlFor="imagen">Imagen</label>
              <input
                type="text"
                id="imagen"
                placeholder="el enlace es obligatorio"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="video">Video</label>
              <input
                type="text"
                id="video"
                placeholder="ingrese el enlace del video"
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              rows={10}
              id="descripcion"
              placeholder="¿de qué se trata este video?"
            ></textarea>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.saveButton}>
              GUARDAR
            </button>
            <button type="reset" className={styles.clearButton}>
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
      <HeaderNuevoVideo />
    </>
  );
};

export default NuevoVideo;
