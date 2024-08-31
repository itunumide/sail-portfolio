import Techstack from "../component/reuseable/Techstack";

const About = () => {
  return (
    <div className="flex flex-col items-center xs:m-3 xs:mb-8 sm:m-5 ">
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
        <p>Technologies I have been working with recently</p>
      <div className="flex items-center justify-between flex-wrap w-full m-auto ">
      <Techstack icon="html"  />
        <Techstack icon="css" />
        <Techstack icon="javascript" />
         <Techstack icon="react" />
        <Techstack icon="github" />
        <Techstack icon="vercel" />
      
       
        <Techstack icon="tailwind" />
        <Techstack icon="vscode" />
      </div>
      </div>
    </div>
  );
};

export default About;
