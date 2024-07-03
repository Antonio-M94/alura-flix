import { useContext } from 'react';
import DataContext from '../context/DataContext';

const useUpdateVideo = () => {
  const { updateData } = useContext(DataContext);

  return updateData;
};

export default useUpdateVideo;
