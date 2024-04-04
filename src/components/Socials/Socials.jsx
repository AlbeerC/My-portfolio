import './Socials.scss'
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";

function Socials () {

    return (
        <div className="socials">
            <ul>
                <li><a href="mailto:caminosalbertodev@gmail.com" target='blank'><FaEnvelope /></a></li>
                <li><a href="https://www.linkedin.com/in/alberto-caminos-5b3961243/" target='blank'><FaLinkedin /></a></li>
                <li><a href="https://github.com/AlbeerC" target='blank'><FaGithub /></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=2284697534" target='blank'><FaWhatsapp /></a></li>
            </ul>
        </div>
    )

}

export default Socials