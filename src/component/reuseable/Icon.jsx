import cssIcon from "../../assets/icons/css.svg"
import githubIcon from "../../assets/icons/github.svg"
import htmlIcon from "../../assets/icons/html.svg"
import javascriptIcon from "../../assets/icons/javascript.svg"
import reactIcon from "../../assets/icons/react.svg"
import tailwindIcon from "../../assets/icons/tailwind.svg"
import vercelIcon from "../../assets/icons/vercel.svg"
import vscodeIcon from "../../assets/icons/vscode.svg"


const Icon = ({ name, width="w-8" }) => {
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

  return <img src={icons[name]} alt={`${name} icon`} className={` ${width}  m-auto cursor-pointer `}/>;
};

export default Icon;
