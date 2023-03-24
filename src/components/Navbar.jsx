const Navbar = ({ actionAddBtn }) => {
  return (
    <nav className="w-full flex flex-row justify-around items-center mb-5">
      <h1 className="text-3xl font-bold">Users</h1>
      <button
        onClick={actionAddBtn}
        className="bg-blue-500 pr-2 pl-2 pt-1 pb-1 rounded-md"
      >
        <i className="bx bx-add-to-queue"></i>
        <span>Add new user</span>
      </button>
    </nav>
  );
};

export default Navbar;
