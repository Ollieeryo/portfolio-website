import chatgpt from "../assets/chatgpt.jpg";
import twitter from "../assets/ac-twitter-main.jpg";
import shop from "../assets/alpha-shop.jpg";
import todolist from "../assets/todolist.jpg";
import movielist from "../assets/movie-list.jpg";
import cardgame from "../assets/card-game.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${chatgpt})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                ChatGPT Clone 2.0
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://chatgpt-project-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ollieeryo/chatgpt-clone-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${twitter})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Simple Twitter
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ollieeryo.github.io/AC-Twitter/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ollieeryo/AC-Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${shop})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shopping Cart
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://alpha-shop-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ollieeryo/Alpha-shop-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todolist})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo List
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ollieeryo.github.io/todokist-react-starter/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ollieeryo/todokist-react-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${movielist})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie List
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ollieeryo.github.io/Movie-List/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ollieeryo/Movie-List"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cardgame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Memory game
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ollieeryo.github.io/Memorizing-Game/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ollieeryo/Memorizing-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
