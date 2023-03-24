import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

const BASE_URL = 'https://users-crud.academlo.tech/';

const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setIsFormVisible(true);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-center items-center p-10 text-white">
      <Navbar actionAddBtn={handleClick} />
      <UserList users={users} />
      <Modal isVisible={isFormVisible}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <h2 className="font-bold text-3xl">New User</h2>
          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="name">First Name: </label>
              <input
                className="text-black"
                id="name"
                type="text"
                {...register('first_name')}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name: </label>
              <input
                className="text-black"
                id="lastName"
                type="text"
                {...register('last_name')}
              />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                className="text-black"
                id="email"
                type="email"
                {...register('email')}
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                className="text-black"
                id="password"
                type="password"
                {...register('password')}
              />
            </div>
            <div>
              <label htmlFor="birthday">Birthday: </label>
              <input
                className="text-black"
                id="birthday"
                type="date"
                {...register('birthday')}
              />
            </div>
            <div>
              <button className="bg-blue-500 pr-2 pl-2 pt-1 pb-1 rounded-md">
                Add new user
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
