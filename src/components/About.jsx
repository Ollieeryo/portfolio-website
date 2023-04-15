const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            Hi, I am Oliver, nice to meet you. Please take a look around.
          </div>
          <div>
            I have six months of experience in front-end development and one year of experience in website design and online marketing.<br></br>
            
            Also, I am proficient in using React.js for front-end development and API integration, and I have experience in independent development as well as collaboration with back-end developers.<br></br>

            Additionally, I have self-taught Next.js and TypeScript, and have applied them in personal development projects. I am currently actively seeking a front-end engineer position.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
