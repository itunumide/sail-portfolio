import ProjectImg from "./ProjectImg";
import Techstack from "./Techstack";


const ProjectCard = ({ projectText, techStack, href,git,image, title }) => {

  return (
    <div className="mb-16  my-3 xs:w-full md:w-5/12">
      <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
          <ProjectImg img={image}/>
        </a>
      </div>
      <div className=" flex flex-col text-left ">
        <h3 className="font-bold text-2xl">
        {title}
          <div className="relative top-0 left-0 right-0 border-t border-customBlue w-full my-2"></div>
        </h3>
        <p >{projectText}</p>
        
        <div className="flex space-x-2 mb-4">
          {techStack.map((tech, index) => (
            <Techstack key={index} icon={tech} widthb="w-10" />
          ))}
        </div>
          
        
        <div className="flex items-center ">
        <a href={git}><Techstack icon="github" width="w-8" widthb="w-10"/></a>
        <a href={href}><Techstack icon="vercel" width="w-6" widthb="w-10"/></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
