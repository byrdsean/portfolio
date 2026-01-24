import {useParams} from "react-router-dom";

const ProjectDescription = () => {
    const { slug } = useParams()
    return <>{slug}</>
}

export default ProjectDescription;