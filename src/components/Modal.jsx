const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className="backdrop-blur-sm flex flex-row justify-center items-center absolute inset-0 bg-[rgba(0,0,0,0.8)]">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
