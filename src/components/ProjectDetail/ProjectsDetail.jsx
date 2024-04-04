import './ProjectsDetail.scss'
import { Link } from 'react-router-dom'

function ProjectsList ( {data} ) {

    return (
        <section className="project">
            <div className="top">
                <img src={data.img} alt={data.title} />
                <div className="texts">
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                    <Link to={data.url}>Ver deploy</Link>
                </div>
            </div>
            <div className="bottom">
                <h4>Un poco sobre el proyecto:</h4>
                <p>{data.description}</p>
            </div>
        </section>
    )
}

export default ProjectsList