const Input = ({ labelText, id, inputType = "text", placeholder, value, onChange }) => {
  return (
    <div className="flex  flex-col mt-2 mb-5 w-full "> {/* Container styles */}
      <label className="text-sm font-bold ml-1 self-start" htmlFor={id}> {/* Label styles */}
        {labelText}
      </label>
      <input
        className="rounded-md h-8 border border-customBlue p-1 bg-customGray w-full " // Input styles
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value}
      onChange={onChange}
      />
    </div>
  );
};

export default Input;
