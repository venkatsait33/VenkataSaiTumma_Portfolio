import pic from "../assets/reference-pic.png";
const Card = () => {
  return (
    <div>
      <div className=" bg-[#F7F7F7] p-4 rounded-xl h-[500px] w-[400px]">
        <p className=" text-[32px] font-semibold flex justify-between flex-col p-4">
          <span className="  ">Full-stack</span>
          <span>
            <span className="">developer</span> with a
          </span>
          <span className=" text-[#7B7B7B]">love for clean ui</span>
          <span className="text-[#7B7B7B]">and faster apps</span>
        </p>
        <div className="flex justify-center items-center">
          <picture>
            <img
              src={pic}
              alt=""
              className="h-60 w-60 rounded-md"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
export default Card;
