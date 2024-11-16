import Techstack from "../component/reuseable/Techstack";

const About = () => {
  const icons = [
    "html",
    "css",
    "javascript",
    "react",
    "github",
    "vercel",
    "tailwind",
    "vscode",
  ];

  return (
    <div className="flex flex-col items-center m-3 mb-8 sm:m-5 ">
      <div className="mb-6">
        <h3 className="font-medium text-3xl m-6">
          About
          <div className="relative top-2 left-0 right-0 h-3/4 border-t border-customBlue w-40 m-auto"></div>
        </h3>
        <p className="text-center break-words max-w-lg">
          I am an accounting student with a strong desire to transition into
          full stack software development. My background in accounting has
          sharpened my analytical and problem-solving abilities, which I am
          eager to apply in a technological context. Although I am relatively
          new to the field of software development, my passion for learning,
          combined with strong work ethic, positions me well for success. I am
          particularly interested in leveraging technology to enhance business
          processes and drive operational efficiency.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold">My Tech Stack</h3>
        <p className="text-center">
          Technologies I have been working with recently
        </p>

        <div className="flex justify-between flex-wrap w-[300px] mt-6 mx-auto">
          {icons.map((icon, index) => (
            <div key={index} className="m-3">
              <Techstack icon={icon} width="w-full" widthb="w-[3rem]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
