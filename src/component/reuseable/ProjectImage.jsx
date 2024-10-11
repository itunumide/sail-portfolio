import social from "../../assets/projects img/socialMediaDashboard.png";
import hero from "../../assets/projects img/heropage.png";
import form from "../../assets/projects img/formpage.png";

const ProjectImg = ({img}) => {
 
    const images = {
        socialimg: social,
        formimg: form,
        heroimg: hero
       
      };
    
      return <img src={images[img]} alt={`${img} image`} className="rounded-t-2xl m-auto w-full object-center h-72 " />;
    
}

export default ProjectImg