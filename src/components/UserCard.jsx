const UserCard = ({ user, handleDeleteUser, handleClickEdit, loadUsersToForm }) => {
  return (
    <article className="p-3 border-2 border-gray-200 hover:border-blue-500 rounded-md w-64">
      <h2 className="font-bold mb-2">
        {user.first_name} {user.last_name}
      </h2>
      <ul>
        <li className="text-gray-400">Mail</li>
        <li>{user.email}</li>
        <li className="text-gray-400">Birthday</li>
        <li>
          <i className="font-bold bx bx-cake"></i> {user.birthday}
        </li>
        <div className="flex flex-row justify-end gap-2 mt-3">
          <button className="bg-red-500 hover:bg-red-600 pr-2 pl-2 rounded text-white">
            <i className="bx bx-trash" onClick={() => handleDeleteUser(user.id)}></i>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 pr-2 pl-2 rounded text-white">
            <i className="bx bxs-edit" onClick={() => loadUsersToForm(user)}></i>
          </button>
        </div>
      </ul>
    </article>
  );
};

export default UserCard;
