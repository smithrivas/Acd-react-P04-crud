const Navbar = ({ actionAddBtn }) => {
  return (
    <nav className="w-full flex flex-row justify-between items-center mb-5">
      <h1 className=" text-3xl font-bold mb-4">Users</h1>
      <button
        onClick={actionAddBtn}
        className="text-white bg-blue-800 hover:bg-blue-900 pr-2 pl-2 pt-1 pb-1 rounded mb-4 "
      >
        <span>
          <i className="bx bx-add-to-queue"></i> Add new user
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
