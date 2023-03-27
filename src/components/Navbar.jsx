const Navbar = ({ actionAddBtn }) => {
  return (
    <nav className="w-full flex flex-row justify-around items-center mb-5 border-b-2 border-gray-300">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <button
        onClick={actionAddBtn}
        className="text-white bg-blue-500 pr-2 pl-2 pt-1 pb-1 rounded-md mb-4"
      >
        <i className="bx bx-add-to-queue"></i>
        <span> Add new user</span>
      </button>
    </nav>
  );
};

export default Navbar;
