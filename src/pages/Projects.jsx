import ProjectCard from "../component/reuseable/ProjectCard"



const Projects = () => {
  const projects = [
    {
      href: 'https://social-media-dashboard-seven-silk.vercel.app',
      title: 'Social Media Dashboard',
      image: 'socialimg',
      techStack: ['html', 'javascript', 'react', 'tailwind'],
      projectText: 'The Social Media Dashboard provides users with a comprehensive overview of key metrics like followers and interactions, consolidating analytics from multiple platforms into one easy-to-use, visually appealing, and responsive interface.',
      git:'https://github.com/itunumide/social-media-dashboard',
      vercel:'https://social-media-dashboard-seven-silk.vercel.app',
    },
    {
      href: 'https://form-page-raji-itunu-idowus-projects.vercel.app',
      title: 'Form Page',
      image: 'formimg',
      techStack: ['html', 'javascript', 'react', 'css'],
      projectText: 'This Form Page is a user-friendly contact form built using React, which allows users to input their name, email, and address. It features a simple yet responsive design implemented using styled-components for CSS-in-JS styling.',
      git:'https://github.com/itunumide/form-page',

    },
     {
      href: 'https://itunu-i-raji.vercel.app',
      title: 'Personal Portfolio',
      image: 'portfolioimg',
      techStack: ['html', 'css', 'javascript', 'tailwind'],
      projectText: 'A personal portfolio website showcasing my frontend development skills, including projects, technologies I work with, and contact information. It highlights my expertise in React, JavaScript, HTML, CSS, and other key technologies.',
      git:'https://github.com/itunumide/portfolio-website',
    },
  ];
  return (
    <div className="flex flex-col items-center mt-2 md:mt-4 m-auto ">
      <h3 className=" relative font-medium text-3xl m-6 ">Projects<div className="relative top-2 left-0 right-0 border-t border-customBlue w-40 m-auto"></div>
      </h3>
      <div className="flex justify-around flex-nowrap flex-col sm:flex-row w-[98%] m-auto md:mt-4 sm:flex-wrap sm:w-[90%]">
      {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            href={project.href}
            image={project.image}
            title={project.title}
            techStack={project.techStack}
            projectText={project.projectText}
            git={project.git}
    
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
