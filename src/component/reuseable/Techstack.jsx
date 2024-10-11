import Icon from "./Icon"


const Techstack = ({ icon, width, widthb="w-1/5" }) => {
  return (
    <div className={`${widthb} my-2 sm:my-4 `}>
    <Icon name={icon} width={width} />
    </div>
  )
}

export default Techstack