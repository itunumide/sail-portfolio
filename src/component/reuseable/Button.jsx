const Button = ({ background = "bg-customBlue", width, hoverBg ="hover:bg-customGray",onClick, hoverT ="hover:text-customBlue", margin = "m-0", textColor = "text-customGray", text }) => {
  return (
    <div>
      <button
        onClick={onClick} className={`${background} ${textColor} ${margin} ${hoverBg} ${hoverT} ${width} py-1 px-1  cursor-pointer rounded-lg border border-customBlue  md:w-32  lg:w-36 `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
