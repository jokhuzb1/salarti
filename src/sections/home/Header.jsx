import head from "/images/flowers/head.png";
import dots from "/images/dots.png";
import play from "/images/helpers/play.png";
import CustomButton from "../../components/helpers/CustomButton";
import Spinner from "../../components/helpers/spinnerImg/Spinner";
import { Suspense } from "react";
const Header = () => {
  return (
    <div className="bg-[#F4F7F8] w-full lg:h-[80vh] flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <div className="flex  flex-col gap-10">
          <span className="fade-in-text uppercase font-medium tracking-widest text-primary">
            decorate your home
          </span>
          <h2 className="slideUp text-primary text-6xl underline underline-offset-1 ">
            Feel your home
          </h2>
          <h2 className="animate-fade-up text-6xl">
            With a modern degin <br /> space
          </h2>
          <div className="animate-fade-up flex justift-center items-center gap-5">
            <CustomButton title="Discover" />
            <span className="flex justify-center items-center gap-5">
              <div className="bg-primary p-3 w-fit rounded-full ">
                <img src={play} alt="icon play" loading="lazy" />
              </div>
              <p className="underline ">Watch video</p>
            </span>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2 flex items-center ">
        <Suspense fallback={<Spinner />}>
          <img src={head} alt="main flower" className="object-cover" />
          <img src={dots} alt="dots" className="absolute left-0 right-0" />
        </Suspense>
      </div>
    </div>
  );
};

export default Header;
