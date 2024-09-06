import Menu from "../../component/Menu";
import Button from "../../component/reuseable/Button";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleContactsClick = () => {
    navigate('/contacts');
  };
  return (
    <div className="flex justify-between items-center h-16 p-3 w-full m-auto font-bold">
      <h3>ITUNUMIDE</h3>
      <div className=" md:hidden xs:block">
        <Menu />
      </div>
      <div className=" justify-between items-center xs:hidden md:inline-flex w-1/3  md:w-2/4 lg:w-2/5">
        <Link to="/">
          <nav className="cursor-pointer px-2.5 py-1.5 text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
            Home
          </nav>
        </Link>
        <Link to="/about">
          <nav className="cursor-pointer px-2.5 py-1.5 text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
            About
          </nav>
        </Link>
        <Link to="/projects">
          <nav className="cursor-pointer px-2.5 py-1.5 text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
            Projects
          </nav>
        </Link>
        <Button text="Contacts" onClick={handleContactsClick}/>
      </div>
    </div>
  );
};

export default Header;
