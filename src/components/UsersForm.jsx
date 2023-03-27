const UsersForm = ({ handleSubmit, editing, handleCancelClickEdit }) => {
  return (
    <form className="text-white" onSubmit={handleSubmit}>
      <h2 className="font-bold text-3xl mb-2">{editing ? 'Edit User' : 'New User'}</h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">First Name: </label>
          <input
            className="text-black pr-1 pl-1 rounded-md mt-1 w-60"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name: </label>
          <input
            className="text-black pr-1 pl-1 rounded-md mt-1"
            id="lastName"
            name="lastName"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            className="text-black pr-1 pl-1 rounded-md mt-1"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            className="text-black pr-1 pl-1 rounded-md mt-1"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="birthday">Birthday: </label>
          <input
            className="text-black pr-1 pl-1 rounded-md mt-1"
            id="birthday"
            name="birthday"
            type="date"
          />
        </div>
        <div>
          <button
            onClick={handleCancelClickEdit}
            className="pr-2 pl-2 pt-1 pb-1  text-red-500 bg-white rounded-md mr-2"
          >
            Cancel
          </button>
          <button className="bg-blue-500 pr-2 pl-2 pt-1 pb-1 rounded-md">
            {editing ? 'Save changes' : 'Add User'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UsersForm;
