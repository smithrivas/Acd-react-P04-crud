import React from 'react';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

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
        handleCancelClickEdit={handleCancelClickEdit}
      />
      <Modal isVisible={isFormVisible}>
        <form className="text-white" onSubmit={handleSubmit}>
          <h2 className="font-bold text-3xl mb-2">
            {editing ? 'Edit User' : 'New User'}
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="name">First Name: </label>
              <input
                className="text-black pr-1 pl-1 rounded-md mt-1 w-60"
                id="name"
                name="name"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name: </label>
              <input
                className="text-black pr-1 pl-1 rounded-md mt-1"
                id="lastName"
                name="lastName"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email: </label>
              <input
                className="text-black pr-1 pl-1 rounded-md mt-1"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password: </label>
              <input
                className="text-black pr-1 pl-1 rounded-md mt-1"
                id="password"
                name="password"
                type="password"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="birthday">Birthday: </label>
              <input
                className="text-black pr-1 pl-1 rounded-md mt-1"
                id="birthday"
                name="birthday"
                type="date"
              />
            </div>
            <div>
              <button
                onClick={handleCancelClickEdit}
                className="pr-2 pl-2 pt-1 pb-1  text-red-500 bg-white rounded-md mr-2"
              >
                Cancel
              </button>
              <button className="bg-blue-500 pr-2 pl-2 pt-1 pb-1 rounded-md">
                {editing ? 'Save changes' : 'Add User'}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
