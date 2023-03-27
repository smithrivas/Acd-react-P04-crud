import UserCard from './UserCard';

const UserList = ({ users, handleDeleteUser, handleClickEdit }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleDeleteUser={handleDeleteUser}
          handleClickEdit={handleClickEdit}
        />
      ))}
    </section>
  );
};

export default UserList;
