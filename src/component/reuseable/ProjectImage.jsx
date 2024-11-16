import social from "../../assets/projects img/socialMediaDashboard.png";
import portfolio from "../../assets/projects img/portfolio.png";
import form from "../../assets/projects img/formpage.png";

const ProjectImg = ({img}) => {
 
    const images = {
        socialimg: social,
        formimg: form,
        portfolioimg: portfolio
       
      };
    
      return <img src={images[img]} alt={`${img} image`} className="rounded-t-2xl m-auto w-full object-fit h-72 " />;
    
}

export default ProjectImg