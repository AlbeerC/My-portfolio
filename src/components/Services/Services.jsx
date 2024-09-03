import './Services.scss'
import { IoDesktopSharp } from "react-icons/io5";
import { FaUser, FaExchangeAlt, FaRecycle } from "react-icons/fa";

function Services () {

    return (
        <section className="services">
            <div className="service">
                <IoDesktopSharp />
                <h3>Aplicaciones Modernas</h3>
                <p>Uso de las últimas tecnologías para asegurar que la web o app sea rápida, segura y funcional y fácil de usar</p>
            </div>
            <div className="service">
                <FaUser />
                <h3>Experiencia de Usuario</h3>
                <p>Mejora de la experiencia del usuario a través de interfaces intuitivas y amigables. Enfoque en la usabilidad y diseño responsivo</p>
            </div>
            <div className="service">
                <FaExchangeAlt />
                <h3>Integración de APIs y servicios</h3>
                <p>Integración de servicios y herramientas externas para obtener datos relevantes o funcionalidades adicionales.</p>
            </div>
            <div className="service">
                <FaRecycle />
                <h3>Componentes Reutilizables</h3>
                <p>Creación de componentes modulares y reutilizables en React y Next.js para agilizar el desarrollo y mantener la consistencia en el diseño.</p>
            </div>
        </section>
    )
}

export default Services