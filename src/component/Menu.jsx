import menu from "../assets/icons/menu.svg";
import { useState } from 'react';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <img 
        src={menu} 
        alt="MenuIcon" 
        onClick={toggleMenu} 
        className="w-10 cursor-pointer" 
      />
      
      {isMenuOpen && (
        <nav className="absolute top-full right-0 bg-customGray border border-customGray rounded-lg shadow-lg">
          <ul className="flex flex-col items-center">
            <li className="cursor-pointer px-4 py-1 text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer px-4 text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
              <a href="/about">About</a>
            </li>
            <li className="cursor-pointer px-4 py-1 text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
              <a href="/projects">Projects</a>
            </li>
            <li className="cursor-pointer px-4  text-base hover:bg-customBlue hover:text-customGray hover:rounded-lg">
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Menu;
