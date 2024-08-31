import ProjectCard from "../component/reuseable/ProjectCard"

const Projects = () => {
  return (
    <div className="flex flex-col items-center xs:mt-2 md:mt-4 ">
      <h3 className=" relative font-medium text-3xl m-6 ">Projects<div className="relative top-2 left-0 right-0 border-t border-customBlue w-40 m-auto"></div>
      </h3>
      <div className="flex justify-around xs:w-full  xs:flex-col md:flex-wrap md:flex-row">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects
{/* <h3 class="relative">
  Contact
  <div class="absolute top-0 bottom-0 right-0 border-r border-gray-300 w-1"></div>
</h3> */}