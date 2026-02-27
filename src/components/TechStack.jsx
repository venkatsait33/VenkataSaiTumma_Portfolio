import react from "../assets/skill-icons/react-icon.svg";
import mongodb from "../assets/skill-icons/monogodb-icon.svg";
import express from "../assets/skill-icons/express-icon.svg";
import js from "../assets/skill-icons/js-icon.svg";
import github from "../assets/skill-icons/git-icon.svg";
import html from "../assets/skill-icons/html&css.png";
const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 mx-auto mt-20 ">
      <div className="flex justify-start">
        <div>
          <p className="text-xl">TECH STACK</p>
          <p className="text-2xl font-semibold">What I Use</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        <div>
          <p className="">Frontend</p>
          <div>
            <div className="flex items-center gap-2 border-b-2 border-t-2 border-[#F7F7F7] mb-2 p-2">
              <img src={react} alt="react" className="w-12 h-12 rounded-md" />
              <p className="flex flex-col">
                <span className="font-semibold ">React</span>
                <span className="text-gray-600 ">
                  For building fast,interactive UIs
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 border-b-2  border-[#F7F7F7] mb-2 p-2">
              <img src={js} alt="js" className="w-12 h-12 rounded-md" />
              <p className="flex flex-col">
                <span className="font-semibold ">JavaScript</span>
                <span className="text-gray-600 ">
                  Adding interaction to web page
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 p-2">
              <img
                src={html}
                alt="Html & CSS"
                className="w-12 h-12 rounded-md"
              />
              <p className="flex flex-col">
                <span className="font-semibold ">Html & CSS</span>
                <span className="text-gray-600 ">Building web pages</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Backend</p>
          <div className="flex items-center gap-2 border-b-2 border-t-2 border-[#F7F7F7] mb-2 p-2">
            <img src={js} alt="Nodejs" className="w-12 h-12 rounded-md" />
            <p className="flex flex-col">
              <span className="font-semibold ">Node.js</span>
              <span className="text-gray-600 ">
                Javascript runtime for servers
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 border-b-2  border-[#F7F7F7] mb-2 p-2">
            <img src={express} alt="express" className="w-12 h-12 rounded-md" />
            <p className="flex flex-col">
              <span className="font-semibold ">Express</span>{" "}
              <span className="text-gray-600 ">Minimal framework for APIs</span>
            </p>
          </div>
          <div className="flex items-center gap-2 p-2 mb-2">
            <img src={mongodb} alt="mongodb" className="w-12 h-12 rounded-md" />
            <p className="flex flex-col">
              <span className="font-semibold ">MongoDB</span>{" "}
              <span className="text-gray-600 ">
                Flexible NoSQL database system
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>Tools </p>
          <div className="flex items-center gap-2 border-t-2 border-[#F7F7F7] mb-2 p-2">
            <img src={github} alt="" className="w-12 h-12 rounded-md" />
            <p className="flex flex-col">
              <span className="font-semibold ">Git & GitHub</span>
              <span className="text-gray-600 ">
                Version control and collaboration
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechStack;
