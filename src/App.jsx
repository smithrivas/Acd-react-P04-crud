import React from 'react';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import UsersForm from './components/UsersForm';

// Funciones de CRUD
import { getUsers, createUser, deleteUser, updateUser } from './services';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editing, setEditing] = useState(false);

  // Elementos del objeto
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  // Hook para guardar referencia al DOM
  // const formRef = useRef(reference);

  // Manejador del delete
  const handleDeleteUser = async (userId) => {
    // Elimina el registro
    await deleteUser(userId);
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
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setBirthday('');

    setIsFormVisible(true);
  };

  // Setea el estado para que aparezca o desaparezca el modal
  const handleClickEdit = (id) => {
    setIsFormVisible(true);
    setEditing(id);
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

    editing && (await updateUser(data, editing));
    !editing && (await createUser(data));

    // Inserta el objeto
    // await createUser(data);
    // Se actualiza el nuevo registro
    await loadUsers();
    setIsFormVisible(false);
    form.reset();
  };

  // Carga los datos de editar en el form
  const loadUsersToForm = (userData) => {
    handleClickEdit(userData.id);
    // Con $ se refiere a que es una referencia en el DOM
    // const $form = formRef.current;
    // $form.name.value = userData.name;
    console.log(userData);

    setName(userData.first_name);
    setLastName(userData.last_name);
    setEmail(userData.email);
    setPassword(userData.password);
    setBirthday(userData.birthday);
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
        loadUsersToForm={loadUsersToForm}
      />
      <Modal isVisible={isFormVisible}>
        <UsersForm
          handleSubmit={handleSubmit}
          editing={editing}
          handleCancelClickEdit={handleCancelClickEdit}
          name={name}
          lastName={lastName}
          email={email}
          password={password}
          birthday={birthday}
        />
      </Modal>
    </div>
  );
};

export default App;
