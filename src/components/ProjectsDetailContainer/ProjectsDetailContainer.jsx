import { useState, useEffect } from 'react'
import ProjectsDetail from '../ProjectDetail/ProjectsDetail'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'

function ProjectsDetailContainer () {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const selectedProject = data.find((project) => project.id === parseInt(id))
                setData(selectedProject)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) { return <Loading /> }

    return (
        <>
            <ProjectsDetail data={data}/>
        </>
    )
}

export default ProjectsDetailContainer