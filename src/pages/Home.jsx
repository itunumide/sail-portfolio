import Button from "../component/reuseable/Button";
import demo from "../assets/demo.jpg";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className=" flex  items-center justify-around xs:flex-col md:flex-row md:h-3/4 md:m-10 md:px-32 ">
      <div className="flex flex-col items-center  ">
        <h1 className="font-medium text-3xl my-6">
          HI, I AM ITUNU RAJI.
          <div className="relative top-2 left-0 right-0 border-t border-customBlue w-40 m-auto "></div>
        </h1>
        <p className="text-center break-words max-w-[400px]">
          I am an accounting student eager to transition into frontend
          software development.
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
            onclick={<Link to="/projects"></Link>}
          />
          <Link to="/contacts"><Button margin="mt-0 mb-4 mx-3" text="Contact"  width="w-36" /></Link>
        </div>
      </div>
      <div className="mb-4 xs:w-full sm:w-1/5 ">
        <img src={demo} alt="" className=" rounded-2xl border-solid" />
      </div>
    </div>
  );
};

export default Home;
