import { useState } from 'react';
import Alert from './Alert';

const UsersForm = ({
  handleSubmit,
  editing,
  handleCancelClickEdit,
  name,
  lastName,
  email,
  password,
  birthday,
  setName,
  setLastName,
  setEmail,
  setPassword,
  setBirthday,
  message,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [typePassword, setTypePassword] = useState('password');

  const handleShowPassword = () => {
    if (typePassword === 'text') {
      setTypePassword('password');
    } else {
      setTypePassword('text');
    }
    setShowPassword(!showPassword);
  };

  return (
    <form className="text-white" onSubmit={handleSubmit}>
      <h2 className="font-bold text-3xl mb-2">{editing ? 'Edit User' : 'New User'}</h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">First Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="text-black pr-1 pl-1 rounded-md mt-1 w-80"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name: </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="text-black pr-1 pl-1 rounded-md mt-1"
            id="lastName"
            name="lastName"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="text-black pr-1 pl-1 rounded-md mt-1"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="text-black pr-1 pl-1 rounded-md mt-1"
            id="password"
            name="password"
            type={typePassword}
          />
          <button
            type="button"
            className="text-blue-200 hover:text-blue-400 text-end"
            onClick={handleShowPassword}
          >
            {typePassword === 'text' ? 'Hide Password' : 'Show Password'}{' '}
            <i class="bx bx-low-vision"></i>
          </button>
        </div>
        <div className="flex flex-col">
          <label htmlFor="birthday">Birthday: </label>
          <input
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            className="text-black pr-1 pl-1 rounded-md mt-1"
            id="birthday"
            name="birthday"
            type="date"
          />
        </div>
        {message && <Alert type={'fail'}>{message}</Alert>}
        <div>
          <button
            onClick={handleCancelClickEdit}
            className="pr-2 pl-2 pt-1 pb-1  text-red-500 hover:text-white bg-white hover:bg-red-500 rounded-md mr-2"
          >
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 pr-2 pl-2 pt-1 pb-1 rounded-md">
            {editing ? 'Save changes' : 'Add User'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UsersForm;
