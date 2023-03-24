const UserCard = ({ user }) => {
  return (
    <article>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <ul>
        <li>
          <span>Mail: </span>
          {user.email}
        </li>
        <li>
          <span>Birthday: </span>
          {user.birthday}
        </li>
        <div className="flex flex-row gap-2">
          <button className="bg-red-500 pr-2 pl-2 rounded-md">
            <i className="bx bx-trash"></i>
          </button>
          <button className="bg-yellow-500 pr-2 pl-2 rounded-md">
            <i className="bx bxs-edit"></i>
          </button>
        </div>
      </ul>
    </article>
  );
};

export default UserCard;
