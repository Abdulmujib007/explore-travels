const Footer = () => {
  return (
    <div className="  bg-plore-primGreen">
      <img className=" w-full" src="/img/image pattern 02 (2).png" alt="" />
      <div className="px-6 pb-8 laptop:pb-24">
        <p className="pt-7 laptop:pt-32 text-plore-white font-bold text-4xl laptop:text-5xl  text-center">
          Join our travel community!
        </p>
        <p className="text-plore-white  text-lg laptop:text-2xl font-bold pt-4 pb-12 text-center">
          Get weekly tips to plan your next escape <br></br> right in your inbox
        </p>
        <section className="flex flex-col laptop:flex-row laptop:justify-center laptop:gap-6 items-center gap-6">
          <div className="p-6 bg-plore-white">
            <input
              className="outline-none"
              type="text"
              placeholder="Your email address"
              name=""
              id=""
            />
          </div>
          <button className="px-[21px] py-5 bg-plore-secGreen outline-none font-semibold text-2xl italic text-plore-white">
            Subscribe
          </button>
        </section>

        <div className="pt-12  px-4 laptop:px-32 flex flex-col text- text-plore-white font-semibold text-lg laptop:text-2xl ">
          <section className="py-12 border-y-[1px] border-y-plore-white flex flex-col items-start gap-4 laptop:flex-row laptop:justify-between">
            <img className="laptop:w-fit w-40" src="/img/Logo (2).png" alt="" />
            <div className="flex flex-col gap-4 laptop:flex-row laptop:gap-5">
              <p>About us</p>
              <p>Services</p>
              <p>Blogs</p>
              <p>Destinations</p>
            </div>
          </section>
          <section className="pt-12 flex flex-col gap-4 items-start laptop:flex-row laptop:justify-between">
            <p className="text-xl">&copy; 9ja explore.made by MJ</p>
            <div className="flex flex-col gap-4 laptop:flex-row laptop:gap-5">
              <p>Instagram</p>
              <p>Youtube</p>
              <p>linkedln</p>
            </div>
          </section>
        </div>
      </div>
      <img className="w-full" src="/img/image pattern (1).png" alt="" />
    </div>
  );
};
export default Footer;
