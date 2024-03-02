/* eslint-disable react/prop-types */
import CustomButton from "../components/helpers/CustomButton";
import frame from "/images/flowers/frame.png";
const Card = ({ reverse = true, image, title, underlined, p }) => {
  return (
    <div className="relative flex justify-between my-10 p-2 lg:p-10 overflow-hidden ">
      <div
        className={`flex ${
          reverse
            ? "flex-col-reverse lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        } w-full lg:w-[70%] mx-auto`}
      >
        <div className="lg:w-2/5">
          <img
            src={image}
            alt="flower image"
            className="object-contain mx-auto my-10 max-h-[500px] md:max-h-fit"
          />
        </div>
        <div className="lg:w-3/5 flex flex-col justify-center text-center lg:text-start items-center">
          <h2 className="text-5xl">{title}</h2>
          <h2 className="text-5xl my-5 text-primary underline underline-offset-5">
            {underlined}
          </h2>
          <p className="my-10 leading-loose">{p} </p>
          <CustomButton title="Read More" />
        </div>
      </div>
      <img
        src={frame}
        alt="frame"
        className={`absolute object-contain ${
          reverse ? "-right-2" : "-left-2 rotate-90"
        } bottom-10 -z-10`}
      />
    </div>
  );
};

export default Card;
