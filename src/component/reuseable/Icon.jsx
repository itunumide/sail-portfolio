import cssIcon from "../../assets/icons/css.svg"
import githubIcon from "../../assets/icons/github.svg"
import htmlIcon from "../../assets/icons/html.svg"
import javascriptIcon from "../../assets/icons/javascript.svg"
import reactIcon from "../../assets/icons/react.svg"
import tailwindIcon from "../../assets/icons/tailwind.svg"
import vercelIcon from "../../assets/icons/vercel.svg"
import vscodeIcon from "../../assets/icons/vscode.svg"


const Icon = ({ name, width="w-8" ,iconName }) => {
  const icons = {
    css: cssIcon,
    github: githubIcon,
    html: htmlIcon,
    javascript: javascriptIcon,
    react: reactIcon,
    tailwind: tailwindIcon,
    vercel: vercelIcon,
    vscode: vscodeIcon,
  };

  return <div className="relative group items-center">
    <img src={icons[name]} alt={`${name} icon`} className={` ${width} rotate-animation m-auto cursor-pointer hover:w-full  `}/>
    <p class="absolute inset-x-0 bottom-[1] text-center text-customBlue bg-opacity-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {name}
  </p>
  </div>;
};

export default Icon;
