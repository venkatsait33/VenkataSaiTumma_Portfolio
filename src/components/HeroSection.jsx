import { InfiniteMovingCards } from "../utils/Infinite-Moving-Cards";
import { skill, Skill2 } from "../utils/Skillcons";
import profilePic from "../assets/profile-pic.png";

const HeroSection = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center mx-auto mt-20 p-20">
        <div className="bg-[#F7F7F7] p-2 rounded-md">
          <picture>
            <img src={profilePic} alt="profile-pic" className="w-30 h-30" />
          </picture>{" "}
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-blink"></span>
        </div>
        <div>
          <p className=" text-[48px] font-semibold">Hi, I'm Venkata sai</p>
          <p className=" text-[48px] text-gray-500 flex flex-col font-semibold">
            <span>I press buttons and </span>
            <span>interfaces happen</span>
          </p>
        </div>
      </div>
      <div>
        <InfiniteMovingCards items={skill} direction="left" speed="slow" />
        <InfiniteMovingCards items={Skill2} direction="right" speed="slow" />
      </div>
    </div>
  );
};
export default HeroSection;
