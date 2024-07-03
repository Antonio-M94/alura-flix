import { useEffect, useContext } from 'react';
import styles from './cards.module.css';
import ItemCard from './ItemCard/ItemCard';
import DataContext from '../../context/DataContext';
import Modal from '../Modal/Modal';

const Cards = () => {
  const { videos, fetchData, isModalOpen, currentVideo, closeModal } =
    useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Asegúrate de que fetchData esté memoizado o no cambie en cada renderizado

  return (
    <div className={styles['cards-container']}>
      <div className={styles['cards-section']}>
        <div className={`${styles['cards-tag']}`} data-category="Front End">
          Front End
        </div>
        <div className={styles['cards-item-container']}>
          {videos
            .filter((video) => video.category === 'Front End')
            .map((video) => (
              <ItemCard
                key={video.id}
                color={video.color}
                category={video.category}
                image={video.image}
                video={video.video}
                id={video.id}
                title={video.title}
                description={video.description}
              />
            ))}
        </div>
      </div>

      <div className={styles['cards-section']}>
        <div className={`${styles['cards-tag']}`} data-category="Back End">
          Back End
        </div>
        <div className={styles['cards-item-container']}>
          {videos
            .filter((video) => video.category === 'Back End')
            .map((video) => (
              <ItemCard
                key={video.id}
                color={video.color}
                category={video.category}
                image={video.image}
                video={video.video}
                id={video.id}
                title={video.title}
                description={video.description}
              />
            ))}
        </div>
      </div>

      <div className={styles['cards-section']}>
        <div
          className={`${styles['cards-tag']}`}
          data-category="Innovación y Gestión"
        >
          Innovación y Gestión
        </div>
        <div className={styles['cards-item-container']}>
          {videos
            .filter((video) => video.category === 'Innovación y Gestión')
            .map((video) => (
              <ItemCard
                key={video.id}
                color={video.color}
                category={video.category}
                image={video.image}
                video={video.video}
                id={video.id}
                title={video.title}
                description={video.description}
              />
            ))}
        </div>
      </div>

      {isModalOpen && <Modal video={currentVideo} onClose={closeModal} />}
    </div>
  );
};

export default Cards;
