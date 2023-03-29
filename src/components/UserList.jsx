import UserCard from './UserCard';

const UserList = ({ users, handleDeleteUser, handleClickEdit, loadUsersToForm }) => {
  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto">
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
