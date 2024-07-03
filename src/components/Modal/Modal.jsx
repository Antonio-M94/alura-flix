/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from 'react';
import styles from './modal.module.css';
import cancelButton from '../../assets/cancel.png';
import useUpdateVideo from '../../hooks/useUpdateVideo';
import DataContext from '../../context/DataContext';

// Define los colores por categoría
const categoryColors = {
  'Front End': '#6bd1ff',
  'Back End': '#00c86d',
  'Innovación y Gestión': '#ffba05',
};

const Modal = ({ video }) => {
  const { closeModal } = useContext(DataContext);
  const updateVideo = useUpdateVideo(); // Obtén la función de actualización desde el hook
  const [currentVideo, setCurrentVideo] = useState(video);
  const [isValid, setIsValid] = useState(true);

  // Actualizar el video actual cuando cambia el prop
  useEffect(() => {
    setCurrentVideo(video);
    checkFormValidity(video); // Valida el formulario cuando el video cambie
  }, [video]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentVideo((prevVideo) => {
      const updatedVideo = {
        ...prevVideo,
        [name]: value,
      };
      checkFormValidity(updatedVideo);
      return updatedVideo;
    });
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.classList.add(styles.error);
    } else {
      e.target.classList.remove(styles.error);
    }
  };

  const checkFormValidity = (videoToValidate = currentVideo) => {
    const { title, category, image, video, description } = videoToValidate;
    setIsValid(!!(title && category && image && video && description));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedVideo = {
      ...currentVideo, // Usa el video actualizado desde el estado local
      color: categoryColors[currentVideo.category], // Actualiza el color basado en la categoría seleccionada
    };
    updateVideo(updatedVideo); // Llama a la función de actualización con los datos actualizados
    closeModal(); // Cierra el modal después de guardar
  };

  const handleReset = () => {
    setCurrentVideo({
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
    setIsValid(false);
  };

  return (
    <div className={styles['modal-overlay']}>
      <div
        className={styles['modal']}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <header className={styles['modal__header']}>
          <button onClick={closeModal} aria-label="Cerrar">
            <img src={cancelButton} alt="Cancelar" />
          </button>
        </header>
        <main className={styles['modal__main']}>
          <h1 id="modal-title" className={styles['modal__title']}>
            Editar Card:
          </h1>
          <form className={styles['modal__form']} onSubmit={handleSubmit}>
            <label className={styles['modal__label']} htmlFor="title">
              Título
            </label>
            <input
              id="title"
              name="title"
              className={styles['modal__input']}
              type="text"
              placeholder="Ingrese el título"
              value={currentVideo.title}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />

            <label className={styles['modal__label']} htmlFor="category">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              className={styles['modal__input']}
              value={currentVideo.category}
              onChange={(e) => {
                handleInputChange(e);
                handleBlur(e);
              }}
              onBlur={handleBlur}
            >
              <option value="">Seleccione una categoría</option>
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>

            <label className={styles['modal__label']} htmlFor="image">
              Imagen
            </label>
            <input
              id="image"
              name="image"
              className={styles['modal__input']}
              type="text"
              placeholder="URL de la imagen"
              value={currentVideo.image}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />

            <label className={styles['modal__label']} htmlFor="video">
              Video
            </label>
            <input
              id="video"
              name="video"
              className={styles['modal__input']}
              type="text"
              placeholder="URL del video"
              value={currentVideo.video}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />

            <label className={styles['modal__label']} htmlFor="description">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className={styles['modal__textarea']}
              placeholder="Ingrese la descripción"
              value={currentVideo.description}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>

            <div className={styles['modal__button-container']}>
              <button
                className={`${styles['modal__button']} ${
                  !isValid && styles['modal__button--disabled']
                }`}
                type="submit"
                disabled={!isValid}
              >
                Guardar
              </button>
              <button
                className={styles['modal__button']}
                type="button"
                onClick={handleReset}
              >
                Limpiar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Modal;
