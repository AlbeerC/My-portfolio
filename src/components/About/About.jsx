import './About.scss'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa'
import { SiTypescript, SiFirebase, SiTailwindcss } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";

function About () {

    return (
        <section className="about" id='aboutme'>
            <h2 className='section-title'>Sobre mi</h2>
            <p>Mi nombre es Alberto Caminos, tengo 21 años y soy de Buenos Aires, Argentina. Estudio hace más de un año Desarrollo Frontend. Busco constantemente la mejor experiencia del usuario, enfocándome en cada detalle para lograr soluciones intuitivas y efectivas. Actualmente estoy cursando la carrera Desarrollador Web Full Stack brindada por la Cámara de Empresas del Polo Informático de Tandil</p>
            <article className='technologies'>
                <h3>Tecnologías que uso</h3>
                <div className='list'>
                    <div className="tec">
                        <FaHtml5 />
                        <p>html5</p>
                    </div>
                    <div className="tec">
                        <FaCss3Alt />
                        <p>css3</p>
                    </div>
                    <div className="tec">
                        <IoLogoJavascript />
                        <p>javascript</p>
                    </div>
                    <div className="tec">
                        <FaReact />
                        <p>react js</p>
                    </div>
                    <div className="tec">
                        <SiTypescript />
                        <p>typescript</p>
                    </div>
                    <div className="tec">
                        <FaGitAlt />
                        <p>git</p>
                    </div>
                    <div className="tec">
                        <LuFigma />
                        <p>figma</p>
                    </div>
                    <div className="tec">
                        <FaSass />
                        <p>sass</p>
                    </div>
                    <div className="tec">
                        <SiFirebase />
                        <p>firebase</p>
                    </div>
                    <div className="tec">
                        <SiTailwindcss />
                        <p>tailwind</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About