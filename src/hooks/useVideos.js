import { useContext } from 'react';
import DataContext from '../context/DataContext';

const useVideos = () => {
  const { videos, fetchData } = useContext(DataContext);

  return { videos, fetchData };
};

export default useVideos;
