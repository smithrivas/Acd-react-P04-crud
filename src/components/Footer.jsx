const Footer = () => {
  return (
    <footer className="text-black bg-white mx-auto text-center mt-10 border-t-2">
      <p className="mt-4">
        <a target="_blank" href="https://github.com/smithrivas">
          <i className="bx bxl-github text-2xl"></i>
        </a>{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/brayan-smith-rivas-bustos55b321104/"
        >
          <i className="bx bxl-linkedin-square text-2xl"></i>
        </a>
      </p>
      <p className="info-footer text-lg">
        Web Developer: <i class="bx bx-terminal font-bold"></i>
        <a target="_blank" href="https://github.com/smithrivas" className="font-bold">
          Brayan Smith Rivas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
