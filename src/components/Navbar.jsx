const Navbar = () => {
  return (
    <div className="w-screen fixed bg-plore-white flex justify-between items-center laptop:px-32 laptop:py-11 mobile:p-9 border-b-[1px] border-plore-darkGreen">
      <section>
        <img className="mobile:w-32 laptop:w-fit" src="/img/Logo.png" alt="" />
      </section>
      <section className="mobile:hidden laptop:flex laptop:gap-6 text-plore-primGreen text-lg">
        <p>about</p>
        <p>destination</p>
        <p>blog</p>
        <p>contact</p>
      </section>
      <img className="laptop:hidden mobile:block" src="/img/material-symbols_menu.png" alt="" />
    </div>
  );
};
export default Navbar;
