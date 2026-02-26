import Card from "./Card";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const CardTitles = () => {
  return (
    <div className=" flex flex-col justify-center items-center mx-auto mt-20 p-20">
      <div className=" flex flex-wrap gap-2">
        <Card />
        <div className="flex gap-2 flex-col">
          <div className=" bg-[#F7F7F7] p-4 rounded-xl h-[200px] w-[400px]">
            <div className="flex flex-col">
              <span className=" text-[12px]">Based in</span>
              <span className=" text-2xl font-semibold">Hyderabad</span>
            </div>
            <div className="flex gap-2 m-4 text-[40px] justify-between items-center p-2">
              <CiLocationOn />
              <CiLocationOn />
              <FaLocationDot className="text-blue-600 font-semibold" />
              <CiLocationOn />
              <CiLocationOn />
            </div>
          </div>

          <div className="bg-[#F7F7F7] p-2 rounded-xl h-[290px] w-[400px]">
            <span className="font-semibold text-2xl ml-2 mb-4">Coding</span>
            <div className="mockup-code bg-white mt-2 text-[#7B7B7B] w-full">
              <pre>
                <code className="text-[#7B7B7B]">
                  {`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hi, I'm Venkata sai</title>
  </head>
  <body>
  </body>
 </html>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <div className=" bg-[#F7F7F7] p-4 rounded-xl h-[200px] w-[300px]">
          <div className="flex justify-between flex-col h-full">
            <p className="badge badge-lg ">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-blink"></span>
              <span className=" text-xl p-2">What i do</span>
            </p>
            <p className=" text-2xl flex flex-col">
              <span className=" font-semibold">Focused on fast</span>
              <span className=" font-semibold">builds, clean code,</span>
              <span className=" text-gray-500">and smart design </span>
            </p>
          </div>
        </div>
        <div className=" bg-[#F7F7F7] p-4 rounded-xl w-full md:h-[200px] md:w-[500px]">
          <div className="flex justify-between flex-col h-full">
            <p className="badge badge-lg ">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-blink"></span>
              <span className=" text-xl p-2">What i do</span>
            </p>
            <p className=" text-2xl flex flex-col ">
              <span className=" text-gray-500">Exploring </span>
              <span className=" font-semibold">Next.js & MERN</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardTitles;
