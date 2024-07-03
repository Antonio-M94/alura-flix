/* eslint-disable react/prop-types */
import styles from './itemCard.module.css';
import deleteIcon from '../../../assets/delete.png';
import editIcon from '../../../assets/edit.png';
import { useState, useContext } from 'react';
import useDeleteVideo from '../../../hooks/useDeleteVideo';
import DataContext from '../../../context/DataContext';

const ItemCard = ({
  color,
  category,
  image,
  video,
  id,
  description,
  title,
}) => {
  const openVideo = () => {
    window.open(video, '_blank');
  };

  const normalizeCategory = (category) => {
    return category
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
  };

  const categoryClass = normalizeCategory(category);
  const deleteVideoHook = useDeleteVideo();
  const { openModal } = useContext(DataContext);

  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      console.log(`Attempting to delete video with ID: ${id}`);
      await deleteVideoHook(id);
      setDeleted(true);
      console.log('Video eliminado exitosamente');
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  if (deleted) {
    return null;
  }

  return (
    <div
      className={`${styles['card-item']} ${
        styles['card-item--' + categoryClass]
      }`}
      style={{ borderColor: color }}
    >
      <img
        className={styles['card-item__image']}
        src={image}
        alt={`Thumbnail ${id}`}
        onClick={openVideo}
      />
      <div
        className={styles['card-item__buttons']}
        data-category={categoryClass}
      >
        <button
          className={`${styles.button} ${styles['button--delete']}`}
          onClick={handleDelete}
        >
          <img src={deleteIcon} alt="Eliminar" />
          <span>Borrar</span>
        </button>
        <button
          className={`${styles.button} ${styles['button--edit']}`}
          onClick={() =>
            openModal({ id, title, category, image, video, color, description })
          }
        >
          <img src={editIcon} alt="Editar" />
          <span>Editar</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
