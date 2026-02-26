import css3 from "../assets/icons/css3.png";
import firebase from "../assets/icons/firebase.png";
import github from "../assets/icons/github.png";
import html5 from "../assets/icons/html-5.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import tailwind from "../assets/icons/tailwind.png";
import dasiui from '../assets/icons/dasiui.png';

const skill = [
  {
    icon: react,
    name: "React JS",
  },
  {
    icon: js,
    name: "JavaScript",
  },
  {
    icon: html5,
    name: "HTML5",
  },
  {
    icon: css3,
    name: "CSS3",
  },
  {
    icon: tailwind,
    name: "Tailwind CSS",
  },
  {
    icon: github,
    name: "Github",
  },
  {
    icon: firebase,
    name: "Firebase",
  }, {
    icon: redux,
    name: "Redux",
  }, {
    icon: dasiui,
    name: "DaisyUI",
  }
];


const Skills = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2 m-2 mockup-code ">
        <p className="mb-2 text-xl tracking-widest text-center text-purple-200 uppercase max-sm:text-sm">
          Coding Skills & tools
        </p>
        <ul className="grid grid-cols-5 max-[560px]:grid-cols-2 gap-3 mx-auto">
          {skill.map((item) => (
            <li key={item.name} className="">
              <pre
                className="flex gap-2 p-2 w-[150px] text-2xl font-semibold  shadow-2xl card place-items-center "
                data-prefix=""
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="object-contain w-10 h-10 rounded-full max-sm:w-8 max-sm:h-8"
                />
                <p className="ml-2 text-lg font-semibold max-sm:text-sm">
                  {item.name}
                </p>
              </pre>
            </li>
          ))}
        </ul>
        <p className="text-xl tracking-widest text-center text-purple-200 uppercase">

        </p>

      </div>
    </div>
  );
};

export default Skills;
