import { useState, useEffect } from 'react';
import styles from './nuevoVideo.module.css';
import HeaderNuevoVideo from '../../components/HeaderNuevoVideo/HeaderNuevoVideo';
import useAddVideo from '../../hooks/useAddVideo';

const NuevoVideo = () => {
  const addVideo = useAddVideo();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const [touchedFields, setTouchedFields] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouchedFields({ ...touchedFields, [id]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      addVideo({
        title: formData.title,
        category: formData.category,
        image: formData.image,
        video: formData.video,
        color: getColorForCategory(formData.category),
        description: formData.description,
      });
      setFormData({
        title: '',
        category: '',
        image: '',
        video: '',
        description: '',
      });
      setTouchedFields({});
      setIsFormValid(false); // Resetear estado de validación
    }
  };

  const getColorForCategory = (category) => {
    switch (category) {
      case 'Front End':
        return '#6bd1ff';
      case 'Back End':
        return '#00c86d';
      case 'Innovación y Gestión':
        return '#ffba05';
      default:
        return '';
    }
  };

  useEffect(() => {
    const isValid =
      formData.title &&
      formData.category &&
      formData.image &&
      formData.video &&
      formData.description;
    setIsFormValid(isValid);
  }, [formData]);

  const getInputClass = (field) =>
    touchedFields[field] && !formData[field] ? styles['input--error'] : '';

  const getLabelClass = (field) =>
    touchedFields[field] && !formData[field] ? styles['label--error'] : '';

  const getPlaceholder = (field, placeholderText) =>
    touchedFields[field] && !formData[field]
      ? '¡Campo obligatorio!'
      : placeholderText;

  return (
    <>
      <div className={styles['nuevo-video']}>
        <header className={styles['nuevo-video__header']}>
          <h1 className={styles['nuevo-video__title']}>NUEVO VIDEO</h1>
          <p className={styles['nuevo-video__subtitle']}>
            COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
          </p>
        </header>
        <main>
          <form
            className={styles['nuevo-video__form']}
            onSubmit={handleSubmit}
            onReset={() => {
              setFormData({
                title: '',
                category: '',
                image: '',
                video: '',
                description: '',
              });
              setTouchedFields({});
              setIsFormValid(false); // Resetear estado de validación
            }}
          >
            <fieldset className={styles['nuevo-video__fieldset']}>
              <legend className={styles['nuevo-video__legend']}>
                Crear Tarjeta
              </legend>
              <div className={styles['nuevo-video__form-group']}>
                <div className={styles['nuevo-video__input-group']}>
                  <label
                    htmlFor="title"
                    className={`${styles['nuevo-video__label']} ${getLabelClass(
                      'title'
                    )}`}
                  >
                    Título
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={getPlaceholder('title', 'Ingrese el título')}
                    className={`${styles['nuevo-video__input']} ${getInputClass(
                      'title'
                    )}`}
                  />
                </div>
                <div className={styles['nuevo-video__input-group']}>
                  <label
                    htmlFor="category"
                    className={`${styles['nuevo-video__label']} ${getLabelClass(
                      'category'
                    )}`}
                  >
                    Categoría
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${styles['nuevo-video__input']} ${getInputClass(
                      'category'
                    )}`}
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="Innovación y Gestión">
                      Innovación y Gestión
                    </option>
                  </select>
                </div>
              </div>
              <div className={styles['nuevo-video__form-group']}>
                <div className={styles['nuevo-video__input-group']}>
                  <label
                    htmlFor="image"
                    className={`${styles['nuevo-video__label']} ${getLabelClass(
                      'image'
                    )}`}
                  >
                    Imagen
                  </label>
                  <input
                    type="text"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={getPlaceholder(
                      'image',
                      'Ingrese el enlace de la imagen'
                    )}
                    className={`${styles['nuevo-video__input']} ${getInputClass(
                      'image'
                    )}`}
                  />
                </div>
                <div className={styles['nuevo-video__input-group']}>
                  <label
                    htmlFor="video"
                    className={`${styles['nuevo-video__label']} ${getLabelClass(
                      'video'
                    )}`}
                  >
                    Video
                  </label>
                  <input
                    type="text"
                    id="video"
                    value={formData.video}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={getPlaceholder(
                      'video',
                      'Ingrese el enlace del video'
                    )}
                    className={`${styles['nuevo-video__input']} ${getInputClass(
                      'video'
                    )}`}
                  />
                </div>
              </div>
              <div className={styles['nuevo-video__input-group']}>
                <label
                  htmlFor="description"
                  className={`${styles['nuevo-video__label']} ${getLabelClass(
                    'description'
                  )}`}
                >
                  Descripción
                </label>
                <textarea
                  rows={10}
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={getPlaceholder(
                    'description',
                    '¿De qué se trata este video?'
                  )}
                  className={`${styles['nuevo-video__input']} ${getInputClass(
                    'description'
                  )}`}
                ></textarea>
              </div>
              <div className={styles['nuevo-video__button-group']}>
                <button
                  type="submit"
                  className={`${styles['nuevo-video__save-button']} ${
                    !isFormValid ? styles['button--disabled'] : ''
                  }`}
                  disabled={!isFormValid}
                >
                  GUARDAR
                </button>
                <button
                  type="reset"
                  className={styles['nuevo-video__clear-button']}
                >
                  LIMPIAR
                </button>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
      <HeaderNuevoVideo />
    </>
  );
};

export default NuevoVideo;
