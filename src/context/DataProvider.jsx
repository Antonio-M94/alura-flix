/* eslint-disable react/prop-types */
import { useReducer, useEffect, useState, useCallback } from 'react';
import { fetchVideos, createVideo, updateVideo, deleteVideo } from '../api/api';
import DataContext from './DataContext';

const initialState = {
  videos: [],
  loading: false,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_VIDEOS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_VIDEOS_SUCCESS':
      return { ...state, loading: false, videos: action.payload };
    case 'FETCH_VIDEOS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_VIDEO_SUCCESS':
      return { ...state, videos: [...state.videos, action.payload] };
    case 'UPDATE_VIDEO_SUCCESS':
      return {
        ...state,
        videos: state.videos.map((video) =>
          video.id === action.payload.id ? action.payload : video
        ),
      };
    case 'DELETE_VIDEO_SUCCESS':
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.payload),
      };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [deletedId, setDeletedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Función para obtener los videos
  const fetchData = useCallback(async (signal) => {
    dispatch({ type: 'FETCH_VIDEOS_REQUEST' });
    try {
      const data = await fetchVideos(signal);
      dispatch({ type: 'FETCH_VIDEOS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_VIDEOS_FAILURE', payload: error.message });
    }
  }, []);

  // Función para crear un nuevo video
  const createData = async (video) => {
    try {
      const newVideo = await createVideo(video);
      dispatch({ type: 'CREATE_VIDEO_SUCCESS', payload: newVideo });
    } catch (error) {
      console.error('Error creating video:', error);
    }
  };

  // Función para actualizar un video existente
  const updateData = async (video) => {
    try {
      const updatedVideo = await updateVideo(video);
      dispatch({ type: 'UPDATE_VIDEO_SUCCESS', payload: updatedVideo });
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  // Función para eliminar un video
  const deleteData = async (id) => {
    try {
      await deleteVideo(id);
      setDeletedId(id); // Marcamos el ID del video eliminado para actualizar el estado local
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  // Función para abrir el modal de edición
  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal de edición
  const closeModal = () => {
    setCurrentVideo(null);
    setIsModalOpen(false);
  };

  // Efecto para actualizar automáticamente la lista de videos cuando se elimina uno
  useEffect(() => {
    if (deletedId) {
      dispatch({ type: 'DELETE_VIDEO_SUCCESS', payload: deletedId });
    }
  }, [deletedId]);

  // Efecto para cargar los videos al cargar el componente o cuando se actualiza el contexto
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Proporcionar el estado y las funciones a través del contexto
  return (
    <DataContext.Provider
      value={{
        videos: state.videos,
        loading: state.loading,
        error: state.error,
        fetchData,
        createData,
        updateData,
        deleteData,
        isModalOpen,
        currentVideo,
        openModal,
        closeModal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
