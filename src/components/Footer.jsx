import pic from "../assets/reference-pic.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 mx-auto mt-10 ">
      <div>
        <p className="text-base text-center text-gray-600">GET IN TOUCH</p>
        <p className="text-3xl font-semibold ">Let's Connect</p>
      </div>
      <div>
        <div className=" bg-[#F7F7F7] p-4 flex flex-col items-center justify-center mt-4 rounded-xl h-[100px] w-[500px]">
          <p>Let's Talk</p>
          <a
            href="mailto:tvenkatsai33@gmail.com"
            className="text-xl font-semibold "
            onClick={(e) => {
              window.location.href = "mailto:tvenkatsait@gmail.com";
              e.preventDefault(); // Prevents default behavior in case `href` doesn't work
            }}
          >
            tummavenkatasai33@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 max-sm:flex-col md:flex-wrap ">
          <div className="flex-1 ">
            <div className=" bg-[#F7F7F7] h-[250px] p-4  mt-4 rounded-xl ">
              <div>
                <p className="flex flex-col gap-1 text-base text-gray-600 ">
                  <span className="text-xl font-semibold text-black ">
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
                    className="rounded-md w-30 h-30"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="flex-1 max-sm:w-[300px]">
            <div className=" bg-[#F7F7F7] h-[250px] p-4  mt-4 rounded-xl ">
              <div className="p-4">
                <p className="text-base text-gray-600">View</p>
                <a
                  href="https://drive.google.com/file/d/12ekCZWEzvP576WjTV8v0Ub0hDxlpRl4m/view?usp=sharing"
                  alt="Tumma Venkata Sai Resume"
                  target="_blank"
                  className="text-xl font-semibold"
                >
                  Resume
                </a>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="text-base">Follow</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/venkata-sai-tumma/"
                    target="_blank"
                    className="text-xl font-semibold "
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://github.com/venkatsait33"
                    target="_blank"
                    className="text-xl font-semibold "
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
