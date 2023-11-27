import './About.scss'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";

function About () {

    return (
        <section className="about" id='about'>
            <h2 className='section-title'>Sobre mi</h2>
            <p>Mi nombre es Alberto Caminos, tengo 20 años y soy de Buenos Aires, Argentina. Estudio hace más de un año Desarrollo Frontend y estoy en constante aprendizaje, ya sea nuevas tecnologías o reforzar las que utilizo.</p>
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
                        <SiNextdotjs />
                        <p>next js</p>
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