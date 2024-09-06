import gmailIcon from "../../assets/icons/gmail.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="flex items-end justify-end">
      <a href="https://www.linkedin.com/in/itunu-raji"><img src={linkedinIcon} alt="LinkedIn" className=" w-6 mb-4 mx-3 cursor-pointer"/></a>
      <a href=""><img src={gmailIcon} alt="Gmail" className="w-6 mb-4 mx-3 cursor-pointer"/></a>
   <a href="https://www.instagram.com/stunningitunu"> <img src={instagramIcon} alt="Instagram" className="w-6 mb-4 mx-3 mr-6 cursor-pointer" /></a>
    </div>
  )
}

export default Footer
