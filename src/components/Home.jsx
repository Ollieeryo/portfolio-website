import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export const Home = () => {
  const [displayName, setDisplayName] = useState("");
  const fullName = "I am Front-end Developer";
  let index = 0;
  let increasing = true;

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayName(fullName.slice(0, index));

      if (increasing) {
        index++;
        if (index >= fullName.length) {
          increasing = false;
        }
      } else {
        index--;
        if (index <= 0) {
          increasing = true;
        }
      }
    }, 250);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-300">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Oliver Liao
        </h1>
        <div className=" h-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            {displayName}
          </h2>
        </div>

        <p className="text-white py-4 max-w-[700px]">
          I hold a Master degree from Newcastle University in the UK, majoring
          in E-business, and have developed a strong interest in website
          development and digital design. Therefore, I aspire to apply my
          creativity and skills to the position of a front-end engineer.
          <br></br>
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400 ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
