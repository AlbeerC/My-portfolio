import './Contact.scss'
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact () {

    return (
        <section className="contact" id='contact'>
            <h2 className='section-title'>Contactame</h2>
            <h3>Transformando ideas en realidad: comencemos a colaborar.</h3>
            <div className="cards">
                <div className="card">
                    <a href="https://www.linkedin.com/in/alberto-caminos/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                        <h4>Linkedin</h4>
                        <p>/alberto-caminos</p>
                    </a>
                </div>
                <div className="card">
                    <a href="mailto:caminosalbertodev@gmail.com" target="_blank" rel="noreferrer">
                        <FaEnvelope />
                        <h4>E-mail</h4>
                        <p>caminosalbertodev@gmail.com</p>
                    </a>
                </div>
                <div className="card">
                    <a href="https://wa.me/542284697534" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                        <h4>Whatsapp</h4>
                        <p>+54 2284697534</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact