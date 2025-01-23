import { useState } from "react";

const NavLink = () => {
  return (
    <>
      <p>
        <a href="#about">about</a>
      </p>
      <p>
        <a href="#destination">destination</a>
      </p>
      <p>
        <a href="#testimonial">blog</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-screen bg-plore-white flex justify-between items-center laptop:px-32 laptop:py-11 mobile:p-9 border-b-[1px] border-plore-darkGreen flex-col laptop:flex-row">
      <main className="flex justify-between items-center w-full">
        <a href="#home">
          <img
            className="mobile:w-32 laptop:w-fit"
            src="/img/Logo.png"
            alt=""
          />
        </a>
        <section className="mobile:hidden laptop:flex laptop:gap-6 text-plore-primGreen text-lg">
          <NavLink />
        </section>
        <section className="laptop:hidden" onClick={toggleVisibility}>
          {!isOpen ? (
            <img
              className="hover:cursor-pointer"
              src="/img/material-symbols_menu.png"
              alt=""
            />
          ) : (
            <img
              className="w-7 hover:cursor-pointer"
              alt="close"
              src="/img/close-line.svg"
            />
          )}
        </section>
      </main>
      <section className="laptop:hidden text-plore-primGreen text-lg w-full flex flex-col gap-3 justify-start mt-5">
        {isOpen && <NavLink />}
      </section>
    </nav>
  );
};
export default Navbar;
