const API_URL = 'http://localhost:3000/videos';

export const fetchVideos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue satisfactoria');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los videos:', error);
    throw error;
  }
};

export const createVideo = async (video) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue satisfactoria');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear el video:', error);
    throw error;
  }
};

export const updateVideo = async (video) => {
  try {
    const response = await fetch(`${API_URL}/${video.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue satisfactoria');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al actualizar el video:', error);
    throw error;
  }
};

export const deleteVideo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue satisfactoria');
    }
    console.log('Video eliminado exitosamente');
  } catch (error) {
    console.error('Error al eliminar el video:', error);
    throw error;
  }
};
