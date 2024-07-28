import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiSend} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://api.whatsapp.com/send/?phone=919361879529&text&type=phone_number&app_absent=0" className="home__social-icon" target="_blank">
                <FiSend />
            </a>
            <a href="https://github.com/thamimofficial" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/thamim106/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;