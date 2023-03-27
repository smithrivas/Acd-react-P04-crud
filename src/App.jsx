import React from 'react';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import UsersForm from './components/UsersForm';

const BASE_URL = 'https://users-crud.academlo.tech/';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  // const { register, handleSubmit, reset } = useForm();

  // Obtiene los datos de la Api
  const getUsers = async () => {
    try {
      const res = await axios.get(BASE_URL + 'users/');
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Inserta nuevos datos en la Api
  const createUser = async (userData) => {
    try {
      await axios.post(BASE_URL + 'users/', userData);
      // console.log(res.data);
      // console.log('Todo OK');
    } catch (error) {
      console.log(error);
    }
  };

  // Elimina datos de la Api
  const deleteMovie = async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/users/${userId}/`);
      // console.log('Registro eliminado');
    } catch (error) {
      console.log(error);
    }
  };

  // Manejador del delete
  const handleDeleteUser = async (userId) => {
    // Elimina el registro
    await deleteMovie(userId);
    // Se actualizan los datos en el front
    await loadUsers();
  };

  // Carga los datos en la página
  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  // Setea el estado para que aparezca o desaparezca el modal
  const handleClick = () => {
    setIsFormVisible(true);
  };

  // Setea el estado para que aparezca o desaparezca el modal
  const handleClickEdit = () => {
    setIsFormVisible(true);
    setEditing(true);
  };

  const handleCancelClickEdit = () => {
    setIsFormVisible(false);
    setEditing(false);
  };

  // manejador formulario
  const handleSubmit = async (e) => {
    // Evita que se recargue
    e.preventDefault();
    // Captura el form en una variable
    const form = e.target;
    const data = {
      first_name: form.name.value,
      last_name: form.lastName.value,
      email: form.email.value,
      password: form.password.value,
      birthday: form.birthday.value,
    };
    // form.reset();
    // Inserta el objeto
    await createUser(data);
    // Se actualiza el nuevo registro
    await loadUsers();
    setIsFormVisible(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center p-4 text-black">
      <Navbar actionAddBtn={handleClick} />
      <UserList
        users={users}
        handleDeleteUser={handleDeleteUser}
        handleClickEdit={handleClickEdit}
      />
      <Modal isVisible={isFormVisible}>
        <UsersForm
          handleSubmit={handleSubmit}
          editing={editing}
          handleCancelClickEdit={handleCancelClickEdit}
        />
      </Modal>
    </div>
  );
};

export default App;
