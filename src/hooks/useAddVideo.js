import { useContext } from 'react';
import DataContext from '../context/DataContext';

const useAddVideo = () => {
  const { createData } = useContext(DataContext);

  return createData;
};

export default useAddVideo;
