import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import useProjects from "./useProjects.tsx";
import spinner from "../../assets/icons/spinner.svg"

const ProjectDescription = () => {
    const { url } = useParams()
    const { projects, isLoading: isLoadingProjects } = useProjects();
    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState<string>("");
    const navigate = useNavigate();

    const isProjectUrl = useCallback((projectUrl: string) : boolean => {
        return projectUrl.trim().toLowerCase() === url?.trim().toLowerCase()
    }, [url])

    const loadProject = useCallback(() => {
        if (projects?.length == 0 || !url) return;

        const project = projects.find(project => isProjectUrl(project.url));
        if (!project) {
            navigate("/not-found");
            return;
        }

        const projectUrl = new URL(`../../assets/projects/${project.source}`, import.meta.url).href;
        fetch(projectUrl)
            .then(data => data.text())
            .then(text => setContent(text))
            .catch(error => console.error(`Error retrieving project data: ${error}`, error))
            .finally(() => setIsLoading(false));
    }, [navigate, url, projects, isProjectUrl]);

    useEffect(() => {
        if (!isLoadingProjects) {
            loadProject();
        }
    }, [isLoadingProjects, loadProject]);

    return <>
        {isLoading && <img src={spinner} alt={"Loading..."} /> }
        {!isLoading && <Markdown remarkPlugins={[remarkGfm]}>
            {content}
        </Markdown>}
    </>
}

export default ProjectDescription;