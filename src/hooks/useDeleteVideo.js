import { useContext } from 'react';
import DataContext from '../context/DataContext';

const useDeleteVideo = () => {
  const { deleteData } = useContext(DataContext);

  return deleteData;
};

export default useDeleteVideo;
