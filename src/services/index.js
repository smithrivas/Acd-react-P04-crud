import axios from 'axios';

const BASE_URL = 'https://users-crud.academlo.tech/';

// Obtiene los datos de la Api
export const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Inserta nuevos datos en la Api
export const createUser = async (userData) => {
  try {
    await axios.post(BASE_URL + 'users/', userData);
  } catch (error) {
    console.error(error);
  }
};

// Elimina datos de la Api
export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${BASE_URL}/users/${userId}/`);
  } catch (error) {
    console.log(error);
  }
};

// Actualizar datos
export const updateUser = async (userData, id) => {
  try {
    await axios.put(`${BASE_URL}/users/${id}/`, userData);
  } catch (error) {
    console.log(error);
  }
};
