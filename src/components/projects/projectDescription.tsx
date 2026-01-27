import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import type ProjectListItem from "./ProjectListItem.tsx";

const ProjectDescription = () => {
    const { url } = useParams()

    const [projectList, setProjectList] = useState<ProjectListItem[]>([]);
    const [content, setContent] = useState<string>("");

    const getProjectList = () => {
        const projectJson = new URL("/data/projects.json", import.meta.url).href;
        fetch(projectJson)
            .then(response => {
                if (!response.ok) {
                    console.error(`Retrieving project list failed with response: ${response}`);
                    throw new Error(`Retrieving project list failed with status ${response.status}`);
                }
                return response.json();
            })
            .catch(error => console.error(`Failed to load project list: ${error}`))
            .then(projects => setProjectList(projects["projects"]))
    }

    const loadProject = useCallback(() => {
        if (projectList?.length == 0 || !url) return;

        const project = projectList.find(project => project.url === url);
        if (!project) return;

        const projectUrl = new URL(`../../assets/projects/${project.source}`, import.meta.url).href;
        fetch(projectUrl)
            .then(data => data.text())
            .then(text => setContent(text))
    }, [url, projectList]);

    useEffect(() => {
        loadProject();
    }, [loadProject]);

    useEffect(() =>{
        getProjectList();
    }, []);

    return <Markdown remarkPlugins={[remarkGfm]}>
        {content}
    </Markdown>
}

export default ProjectDescription;