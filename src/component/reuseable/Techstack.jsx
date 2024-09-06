import Icon from "./Icon"


const Techstack = ({ icon, width, widthb="w-1/5" }) => {
  return (
    <div className={`${widthb} xs:my-2 xs:mx-1 sm:my-4`}>
    <Icon name={icon} width={width} />
    </div>
  )
}

export default Techstack