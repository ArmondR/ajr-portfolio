import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Footer() {
    
    return (
        <section className="footer">
            	<div className="icons text-6xl">
	
  {/* <a href="tel:6093849808">
    <FontAwesomeIcon 
    icon={faPhone}
    className="iconsImage" />
  </a> */}
	
  {/* <a href="mailto:ajr.rodriguez095@gmail.com">
    <FontAwesomeIcon 
    icon={faEnvelope}
    className="iconsImage" />
  </a> */}
	
  <a href="https://github.com/ArmondR">
    <FontAwesomeIcon 
    icon={faGithub}
    className="iconsImage" />
    {/* <span>ArmondR</span> */}
  </a>
 
  <a href="https://www.linkedin.com/in/armond-rodriguez-b482b195/">
    <FontAwesomeIcon 
    icon={faLinkedin} 
    className="iconsImage" />
  </a>
	</div>
        </section>
    )
}

export default Footer;