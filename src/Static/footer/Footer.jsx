import gmailIcon from "../../assets/icons/gmail.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="flex items-end justify-end">
      <img src={linkedinIcon} alt="LinkedIn" className=" w-6 mb-4 mx-3 cursor-pointer"/>
      <img src={gmailIcon} alt="Gmail" className="w-6 mb-4 mx-3 cursor-pointer"/>
    <img src={instagramIcon} alt="Instagram" className="w-6 mb-4 mx-3 mr-6 cursor-pointer" />
    </div>
  )
}

export default Footer
