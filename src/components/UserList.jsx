import UserCard from './UserCard';

const UserList = ({ users, handleDeleteUser, handleClickEdit, loadUsersToForm }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          handleDeleteUser={handleDeleteUser}
          handleClickEdit={handleClickEdit}
          loadUsersToForm={loadUsersToForm}
        />
      ))}
    </section>
  );
};

export default UserList;
