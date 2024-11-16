import ProjectImg from "./ProjectImage";
import Techstack from "./Techstack";

const ProjectCard = ({ projectText, techStack, href, git, image, title }) => {
  return (
    <div className="mb-16 flex m-auto w-full flex-col my-3 sm:w-[40vw] md:w-[25vw] border-none rounded-2xl shadow-[0px_0px_5px] shadow-customBlue">
      <div>
        <ProjectImg img={image} />
      </div>
      <div className=" flex flex-col text-left p-4">
        <h3 className="font-bold text-xl md:text-2xl">
          {title}
          <div className="relative top-0 left-0 right-0 border-t border-customBlue w-full my-2"></div>
        </h3>
        <p className="text-[1rem]">{projectText}</p>

        <div className="flex flex-row items-center  ">
          <span className="font-bold">Tech stack:</span>
          {techStack.map((tech, index) => (
            <Techstack key={index} icon={tech} widthb="w-10" />
          ))}
        </div>

        <div className="flex items-center justify-between ">

          <a href={git} className="flex items-center">
         
            <Techstack icon="github" width="w-6" widthb="w-6" />
            <span className="font-bold ml-2 hover:underline">View code</span>
          </a>
          <a href={href} className="flex items-center">
          
            <Techstack icon={"vercel"} width={"w-4"} widthb={"w-6"} />
            <span className="font-bold mx-2 hover:underline">Live preview</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
