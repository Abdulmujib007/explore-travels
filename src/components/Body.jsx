import { useInView } from "react-intersection-observer";

const exploreSection = (ref,inView) => {
  return (
    <div
      ref={ref}
      className={`${inView === true ? 'inView':'emptyDiv'} mobile:px-3 laptop:px-0`}
    >
      { (
        <>
          <section  className="
          flex laptop:flex-row mobile:flex-col mobile:gap-3 laptop:justify-between laptop:pl-28" >
            <div className="flex flex-col laptop:gap-8 pt-28 ">
              <p className="font-bold text-6xl font-mono text-plore-darkGreen laptop:block mobile:hidden ">
                Explore <br></br> the beauty <br></br> of Nigeria{" "}
              </p>
              <p className="laptop:hidden mobile:block font-bold text-5xl text-center pb-10">
                Explore the <br></br> beauty of <br></br>Nigeria
              </p>
              <div className="flex laptop:flex-row mobile:flex-col items-center  gap-3 h-fit">
                <div className="  flex items-center pr-3 pl-2 py-3 border-[1px] border-plore-primGreen">
                  <input
                    className="outline-none placeholder:italic laptop:placeholder:text-xl laptop:text-xl text-plore-primGreen placeholder:text-plore-primGreen"
                    placeholder="search destinations"
                    type="text"
                  />
                </div>
                <button className="w-fit h-fit p-5 py-3 text-2xl text-plore-white bg-plore-primGreen">
                  Explore
                </button>
              </div>
              <p className=" laptop:text-xl mobile:text-sm inline-block mobile:pt-8 mobile:pb-12 laptop:pt-0 mobile:text-nowrap ">
                Still deciding where to go?{" "}
                <span className="text-plore-darkGreen ">
                  Explore destinations
                </span>
              </p>
            </div>
            <img src="/img/Frame 35.png" alt="" />
          </section>
          <div className="flex flex-col items-center pt-6 laptop:pb-32 pb-16 gap-4">
            <section className="flex laptop:gap-6 gap-3">
              <div className="laptop:p-4 p-2 rounded-full border-[1px] border-plore-primGreen">
                {" "}
                <img src="/img/teenyicons_arrow-up-solid.png" alt="" />
              </div>
              <div className="laptop:p-4 p-2   rounded-full border-[1px] border-plore-primGreen">
                {" "}
                <img src="/img/teenyicons_arrow-up-solid (1).png" alt="" />
              </div>
            </section>
            <img
              className="mobile:w-10 laptop:w-fit"
              src="/img/carousel.png"
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};
const destinationSection = (ref,inView) => {
  return (
    <div
      id="destination"
      ref={ref}
      className={` ${
        inView === true ? "inView" : "emptyDiv"
      } mt-5 laptop:mt-15 bg-plore-accent2 mb-16 pb-7 laptop:mb-28 laptop:pb-12`}
    >
      {
        <>
          <p className="font-sans font-semibold text-center text-4xl pt-2 laptop:pt-3">
            Featured Destinations
          </p>
          <div className="pt-12 laptop:pt-14 laptop:px-32 laptop:pb-16 pb-12 px-6 flex flex-col gap-10 laptop:gap-16 laptop:flex-row ">
            <div className="flex flex-col">
              <img src="/img/image 95 (2).png" alt="" />
              <div className="flex flex-col gap-5 py-6 pl-4 bg-plore-white rounded-b-xl">
                <section className="flex gap-2">
                  <img src="/img/mdi_location.png" alt="" />
                  <p className="font-medium text-plore-secGreen text-xl">
                    Cross River
                  </p>
                </section>
                <p className="font-extrabold text-2xl text-plore-darkGreen font-sans inline-block">
                  Obudu Mountain Resort
                </p>
                <p className="font-medium text-3xl font-sans text-plore-primGreen">
                  #100,000
                </p>
                <section className="flex gap-2 items-center">
                  <p className="font-medium text-base text-plore-secGreen">
                    View More
                  </p>
                  <img className="h-3" src="/img/Vector.png" alt="" />
                </section>
              </div>
            </div>
            <div className="flex flex-col">
              <img src="/img/image 95 (1).png" alt="" />
              <div className="flex flex-col gap-5 py-6 pl-4 bg-plore-white rounded-b-xl">
                <section className="flex gap-2">
                  <img src="/img/mdi_location.png" alt="" />
                  <p className="font-medium text-plore-secGreen text-xl">
                    Niger State
                  </p>
                </section>
                <p className="font-extrabold text-2xl text-plore-darkGreen font-sans inline-block">
                  Kanji Dam
                </p>
                <p className="font-medium text-3xl font-sans text-plore-primGreen">
                  #200,000
                </p>
                <section className="flex gap-2 items-center">
                  <p className="font-medium text-base text-plore-secGreen">
                    View More
                  </p>
                  <img className="h-3" src="/img/Vector.png" alt="" />
                </section>
              </div>
            </div>
            <div className="flex flex-col">
              <img src="/img/image 95.png" alt="" />
              <div className="flex flex-col gap-5 py-6 pl-4 bg-plore-white rounded-b-xl">
                <section className="flex gap-2">
                  <img src="/img/mdi_location.png" alt="" />
                  <p className="font-medium text-plore-secGreen text-xl">
                    Ekiti State
                  </p>
                </section>
                <p className="font-extrabold text-2xl text-plore-darkGreen font-sans inline-block">
                  Ikogosi Spring Resort
                </p>
                <p className="font-medium text-3xl font-sans text-plore-primGreen">
                  #300,000
                </p>
                <section className="flex gap-2 items-center">
                  <p className="font-medium text-base text-plore-secGreen">
                    View More
                  </p>
                  <img className="h-3" src="/img/Vector.png" alt="" />
                </section>
              </div>
            </div>
          </div>
          <div className="flex justify-center mx-3">
            <button className="p-5 w-fit text-plore-white bg-plore-primGreen font-semibold italic text-2xl">
              Discover more destinations
            </button>
          </div>
        </>
      }
    </div>
  );
};
const retreatSection = (ref,inView) => {
  return (
    <div
      id="about"
      ref={ref}
      className={`${inView === true ? "inView" : "emptyDiv"}`}
    >
      {
        <>
          <p className="text-center px-6 py-63 laptop:pt-0 font-semibold text-4xl laptop:text-5xl laptop:py-20 laptop:text-left laptop:px-32">
            How would you like to explore?
          </p>
          <div className="flex flex-col laptop:flex-row laptop:justify-center laptop:gap-56 pt-16 laptop:pt-0 gap-10 px-6  laptop:px-32 pb-10 laptop:pb-14">
            <section className="flex flex-col items-center laptop:items-start laptop:gap-10 gap-8  text-plore-gray font-semibold text-2xl ">
              <span>Solo trips</span>
              <span className="text-nowrap">Group trips</span>
              <span className="w-full text-center pb-6  border-b-[1px] border-b-plore-secGreen text-plore-secGreen laptop:border-l-plore-secGreen laptop:border-l-[1px] laptop:pb-0 laptop:border-b-0 laptop:pl-4">
                Retreats
              </span>
            </section>
            <section className="flex flex-col gap-10 laptop:gap-10">
              <p className="font-semibold laptop:text-2xl text-lg text-[#355255]">
                What better way to improve your organisation’s culture than to
                have a retreat. Have fun and experience an adventure beyond the
                confines of the office.
              </p>
              <div className="flex justify-center laptop:justify-start">
                <div className=" w-fit flex gap-2 py-3 px-4 bg-plore-secGreen items-center ">
                  <button className=" text-plore-white text-lg font-medium">
                    Plan a Retreat
                  </button>
                  <img className="h-3" src="/img/Vector (1).png" alt="" />
                </div>
              </div>
            </section>
          </div>
          <div className="px-6 pb-16 laptop:flex laptop:justify-end laptop:px-0 laptop:pb-20">
            <img src="/img/Rectangle 5782.png" alt="" />
          </div>
          <img
            className="laptop:block mobile:hidden"
            src="/img/Email.png"
            alt=""
          />
          <img
            className="laptop:hidden mobile:block w-full"
            src="/img/Email (1).png"
            alt=""
          />
        </>
      }
    </div>
  );
};
const testimonialSection = (ref,inView) => {
  return (
    <div
      id="testimonial"
      ref={ref}
      className={` ${
        inView === true ? "inView" : "emptyDiv"
      } pt-16 laptop:pt-20 laptop:px-40 px-6`}
    >
      {
        <>
          <div className="flex flex-col laptop:flex-row">
            <section className="py-10 laptop:py-14 laptop:px-12 px-5 bg-plore-darkGreen rounded-t-lg flex flex-col gap-6">
              <p className="text-plore-white font-bold text-3xl laptop:text-4xl pb-5 laptop:pb-7 ">
                Testimonials
              </p>
              <p className="text-2xl laptop:text-3xl text-plore-white">
                I found a reason to live
              </p>
              <p className="font-medium text-base pb-5 text-plore-white laptop:text-xl">
                I few months back, i was considering suscide. Live felt
                unbearable and lonely. I was opportuned to come across a group
                trip to Obudu Resort, i made new friends and found a community
                of people. Now we are planning a new group trip soon.
              </p>
              <div className="flex gap-6 ">
                <div className="p-4 rounded-full border-[1px] border-plore-white  ">
                  <img src="/img/Vector (2).png" alt="" />
                </div>
                <div className="p-4 rounded-full border-[1px] border-plore-white  ">
                  <img src="/img/Vector (3).png" alt="" />
                </div>
              </div>
            </section>
            <img className="w-full" src="/img/Frame 33.png" alt="" />
          </div>
          <div className="flex justify-center pt-12 pb-16 laptop:pb-20">
            <img src="/img/carousel.png" alt="" />
          </div>
        </>
      }
    </div>
  );
};
const Body = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div>
      {exploreSection(ref1,inView1)}
      {destinationSection(ref2,inView2)}
      {retreatSection(ref3,inView3)}
      {testimonialSection(ref4,inView4)}
    </div>
  ); 
};
export default Body;
