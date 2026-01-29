import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import useProjects from "./useProjects.tsx";

const ProjectDescription = () => {
    const { url } = useParams()
    const { projects, isLoading } = useProjects();
    const [content, setContent] = useState<string>("");
    const navigate = useNavigate();

    const isProjectUrl = useCallback((projectUrl: string) : boolean => {
        return projectUrl.trim().toLowerCase() === url?.trim().toLowerCase()
    }, [url])

    const loadProject = useCallback(() => {
        if (projects?.length == 0 || !url) return;

        const project = projects.find(project => isProjectUrl(project.url));
        if (!project) {
            navigate("/not-found", { replace: true });
            return;
        }

        const projectUrl = new URL(`../../assets/projects/${project.source}`, import.meta.url).href;
        fetch(projectUrl)
            .then(data => data.text())
            .then(text => setContent(text))
            .catch(error => console.error(`Error retrieving project data: ${error}`, error))
    }, [navigate, url, projects, isProjectUrl]);

    useEffect(() => {
        if (!isLoading) {
            loadProject();
        }
    }, [isLoading, loadProject]);

    return <Markdown remarkPlugins={[remarkGfm]}>
        {content}
    </Markdown>
}

export default ProjectDescription;