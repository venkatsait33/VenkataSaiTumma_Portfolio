import ieopd from "../assets/ieopd.png";
import teamhub from "../assets/teamhub.png";
import workspace from "../assets/workspace.png";
import ScrollStack, { ScrollStackItem } from "../utils/ScrollStack";
import canelStreet from "../assets/canelStreet.png";

const ProjectList = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center mx-auto p-4 ">
        <p>PROJECTS</p>
        <span className=" text-4xl font-semibold">Latest Projects</span>
      </div>
      <div className="">
        <ScrollStack
          itemScale={0.08}
          itemDistance={150}
          baseScale={0.85}
          rotationAmount={1}
        >
          <ScrollStackItem>
            {" "}
            <div className=" bg-[#F7F7F7]  rounded-md ">
              <div className="flex justify-between max-sm:flex-col gap-4">
                <div className="p-4 flex  justify-between items-center flex-col">
                  <div className=" font-semibold text-2xl">
                    <p>Intelligent Enterprise Operations & Decision Platform</p>
                  </div>
                  <p className=" text-gray-700">
                    A unified platform to manage workflows, ensure compliance,
                    and drive data-backed decisions across your organization.
                  </p>
                  {/* <button className="btn btn-lg bg-[#005063] text-white  rounded-md">
                    Read More
                  </button> */}
                </div>
                <div className="md:pl-4 p-4 mt-8">
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7434151448902295552?compact=1"
                    height="399"
                    width="800"
                    frameborder="0"
                    allowfullscreen=""
                    title="Embedded post"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className=" bg-[#F7F7F7] p-4  rounded-md ">
              <div className="flex justify-between max-sm:flex-col p-4">
                <div className="p-4 flex justify-between items-center flex-col">
                  <div className=" font-semibold text-2xl">
                    <p>Teamhub Employee Portal</p>
                  </div>
                  <p className=" text-gray-700">
                    A comprehensive employee portal for managing employee data,
                    attendance, and performance.
                  </p>
                  <a
                    href="https://teamhub-gamma.vercel.app/"
                    target="_blank"
                    className="btn btn-lg bg-[#C75100] text-white  rounded-md"
                  >
                    Live Page
                  </a>
                </div>

                <div className="pl-4 mt-8">
                  <picture>
                    <img
                      src={teamhub}
                      alt="Teamhub Employee Portal"
                      loading="lazy"
                      className=" aspect-video rounded-l-md "
                    />
                  </picture>
                </div>
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className=" bg-[#F7F7F7] p-4  rounded-md ">
              <div className="flex justify-between max-sm:flex-col p-4">
                <div className="p-4 flex justify-between items-center flex-col">
                  <div className=" font-semibold text-2xl">
                    <p>WorkSpace for Offices</p>
                  </div>
                  <p className=" text-gray-700">
                    workspace for offices is a platform that helps businesses
                    manage their office space, including scheduling,
                    maintenance, and inventory management.
                  </p>
                  <a
                    href="https://workspace-beige-alpha.vercel.app/"
                    target="_blank"
                    className="btn btn-lg bg-black  text-white  "
                  >
                    Live Page
                  </a>
                </div>

                <div className="pl-4 mt-8">
                  <picture>
                    <img
                      src={workspace}
                      alt="Workspace Portal"
                      loading="lazy"
                      className=" aspect-video rounded-l-md "
                    />
                  </picture>
                </div>
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className=" bg-[#F7F7F7] p-4  rounded-md ">
              <div className="flex justify-between max-sm:flex-col p-4">
                <div className="p-4 flex justify-between items-center flex-col">
                  <div className=" font-semibold text-2xl">
                    <p>Canal Street</p>
                  </div>
                  <p className=" text-gray-700">
                    a fully responsive and dynamic replica of
                    CanalStreet.market.com This project showcases the power of
                    ReactJS, TailwindCSS, Framer Motion, and React Icons to
                    create a seamless, interactive, and visually stunning
                  </p>
                  <a
                    href="https://canal-street-clone.vercel.app/"
                    target="_blank"
                    className="btn btn-lg btn-accent  text-white  "
                  >
                    Live Page
                  </a>
                </div>

                <div className="pl-4 mt-8">
                  <picture>
                    <img
                      src={canelStreet}
                      alt="canelStreet Portal"
                      loading="lazy"
                      className=" aspect-video rounded-l-md "
                    />
                  </picture>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
};
export default ProjectList;
