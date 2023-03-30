const Alert = ({ children, type }) => {
  return (
    <>
      {type === 'success' ? (
        <div
          className={
            'bg-green-500 pl-2 pr-2 font-bold text-center mt-3 mb-3 w-fit mx-auto text-white'
          }
        >
          {children}
        </div>
      ) : (
        <div className={'bg-red-500 pl-2 pr-2 font-bold text-center text-white'}>
          {children}
        </div>
      )}
    </>
  );
};

export default Alert;
