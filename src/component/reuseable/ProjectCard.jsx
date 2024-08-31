

const ProjectCard = () => {
  return (
    <div className=" h-2/5 rounded-lg border border-customBlue my-3 xs:w-full md:w-5/12">
      <div>
        <img src="" alt="" />
      </div>
      <div className=" flex flex-col text-left ">
        <h3>Project Title<div className="relative top-0 left-0 right-0 border-t border-customBlue w-full my-2"></div></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut delectus sint maxime perferendis libero laboriosam illum inventore incidunt dolores perspiciatis ut tempore adipisci pariatur, fuga consequatur. Voluptatem, nostrum ad.</p>
        <div className="flex  "><h3>CSS  .</h3>
        <h3>JAVASCRIPT  .</h3>
        <h3>HTML  .</h3>
        <h3>REACT  .</h3></div>
        <div className="flex"><h3>git hub  .</h3>
        <h3>vercel</h3></div>
      </div>
    </div>
  )
}

export default ProjectCard
