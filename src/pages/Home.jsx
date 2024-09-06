import Button from "../component/reuseable/Button";
import demo from "../assets/itunu.png";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };
  const handleContactsClick = () => {
    navigate('/contacts');
  };
  return (
    <div className=" flex  items-center justify-around xs:flex-col md:flex-row md:h-3/4 md:m-10 md:px-32 ">
      <div className="flex flex-col items-center  ">
        <h1 className="font-medium text-3xl my-6">
          HI, I AM ITUNU RAJI.
          <div className="relative top-2 left-0 right-0 border-t border-customBlue w-40 m-auto "></div>
        </h1>
        <p className="text-center break-words max-w-[400px]">
          A frontend developer.
        </p>
        <div className="flex mt-4 xs:flex-col sm:flex-row">
          <Button
            margin="mt-0 mb-4 mx-3"
            background="bg-customGray"
            hoverBg="hover:bg-customBlue"
            hoverT="hover:text-customGray"
            textColor="text-customBlue"
            text="Projects"
            width="w-36"
            onClick={handleProjectsClick}
            
          />
          <Button margin="mt-0 mb-4 mx-3" onClick={handleContactsClick} text="Contact"  width="w-36" />
        </div>
      </div>
      {/* <div className="mb-4 xs:w-full sm:w-1/5  ">
        <img src={demo} alt="" className=" rounded-full bg-customBlue  " />
      </div> */}
    </div>
  );
};

export default Home;
