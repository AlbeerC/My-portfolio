import './About.scss'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaSass } from 'react-icons/fa'
import { SiTypescript, SiFirebase, SiTailwindcss, SiReact } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io";

function About () {

    return (
        <section className="about" id='aboutme'>
            <h2 className='section-title'>Sobre mi</h2>
            <p className='about-text'>Mi nombre es Alberto Caminos. Soy un desarrollador web Argentino de 21 años. Me especializo en el área del front-end creando  webs y aplicaciones que no solo funcionan bien, sino que también ofrecen una experiencia de usuario intuitiva y agradable.
            Además, estoy mejorando mis habilidades en algoritmos y estructuras de datos, buscando optimizar el rendimiento y eficiencia de las soluciones que desarrollo, especialmente en proyectos complejos donde estos conocimientos son clave.</p>
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
                        <SiReact />
                        <p>Native</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About