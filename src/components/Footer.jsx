import pic from "../assets/reference-pic.png";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center mx-auto mt-10 p-20">
      <div>
        <p className="text-base text-gray-600 text-center">GET IN TOUCH</p>
        <p className=" text-3xl font-semibold">Let's Connect</p>
      </div>
      <div>
        <div className=" bg-[#F7F7F7] p-4 flex flex-col items-center justify-center mt-4 rounded-xl h-[100px] w-[500px]">
          <p>Let's Talk</p>
          <a
            href="mailto:tvenkatsai33@gmail.com"
            className=" font-semibold text-xl"
            onClick={(e) => {
              window.location.href = "mailto:tvenkatsait@gmail.com";
              e.preventDefault(); // Prevents default behavior in case `href` doesn't work
            }}
          >
            tvenkatsai33@gmail.com
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2 ">
          <div className="flex-1 ">
            <div className=" bg-[#F7F7F7] h-[250px] p-4  mt-4 rounded-xl ">
              <div>
                <p className=" text-base flex flex-col gap-1 text-gray-600">
                  <span className=" font-semibold text-black">
                    Hi, I'm Venkata Sai
                  </span>
                  <span>I make designs and ideas </span>
                  <span>to interfaces happen</span>
                </p>
              </div>
              <div className="mt-2">
                <picture>
                  <img
                    src={pic}
                    alt=""
                    className="w-30 h-30 rounded-md"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className=" bg-[#F7F7F7] h-[250px] p-4  mt-4 rounded-xl ">
              <div className="flex flex-col gap-2">
                <p className="text-base">Follow</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/venkata-sai-tumma/"
                    target="_blank"
                    className=" font-semibold text-xl"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/venkatsait33"
                    target="_blank"
                    className=" font-semibold text-xl"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
