import './ProjectDescription.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {useCallback, useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom";
import useProjects from "./useProjects.tsx";
import TagList from "../tagList/TagList.tsx";
import spinner from "../../assets/icons/spinner.svg"
import type ProjectListItem from './ProjectListItem.tsx';
import {type NavigationLink, navigationLinks} from "../navigation/navigationLinkList.tsx";

const ProjectDescription = () => {
    const {url} = useParams()
    const navigate = useNavigate();

    const {projects: projectList, isLoading: isLoadingProjects} = useProjects();
    const [project, setProject] = useState<ProjectListItem | undefined>();

    const [isLoading, setIsLoading] = useState(true);
    const [content, setContent] = useState<string>("");

    const [projectLink, setProjectLink] = useState<NavigationLink | undefined>();

    const getProjectLink = useCallback(() => {
        setProjectLink(navigationLinks.links.find(link => link.text === "Projects"));
    }, []);

    const isProjectUrl = useCallback((projectUrl: string): boolean => {
        return projectUrl.trim().toLowerCase() === url?.trim().toLowerCase()
    }, [url])

    const setTimeoutBeforeShowingContent = () => {
        setTimeout(() => {
            setIsLoading(false)
        }, 250);
    }

    const loadProject = useCallback(() => {
        if (projectList?.length == 0 || !url) return;

        const project = projectList.find(project => isProjectUrl(project.url));
        if (!project) {
            navigate("/not-found", {replace: true});
            return;
        }

        const projectUrl = new URL(`../../assets/projects/${project.source}`, import.meta.url).href;
        fetch(projectUrl)
            .then(data => data.text())
            .then(text => setContent(text))
            .catch(error => console.error(`Error retrieving project data: ${error}`, error))
            .finally(() => {
                setProject(project);
                setTimeoutBeforeShowingContent()
            });
    }, [navigate, url, projectList, isProjectUrl]);

    useEffect(() => {
        if (!isLoadingProjects) {
            loadProject();
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        getProjectLink();
    }, [isLoadingProjects, getProjectLink, loadProject]);

    return (
        <section className="project-description">
            <section className="main-content">
                {isLoading && <img src={spinner} alt={"Loading..."} className="spinner"/>}
                {!isLoading && <>
                    <>
                        {projectLink && (
                            <section className="nav-links">
                                &lt; <a href={projectLink.href}>Back to {projectLink.text}</a>
                            </section>
                        )}
                        <section className="header">
                            {project && <h1>{project.title}</h1>}
                        </section>
                        <section className={"article"}>
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </Markdown>
                        </section>
                    </>
                    <TagList tags={project?.tags} showLabel={true} />
                </>}
            </section>
        </section>
    )
}

export default ProjectDescription;