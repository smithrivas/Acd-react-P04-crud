import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
};

export default UserList;
