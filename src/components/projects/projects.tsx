import { useCallback, useEffect, useState } from 'react';
import './Projects.css'
import ProjectModal from "./projectModal.tsx";
import type ProjectListItem from "./ProjectListItem.tsx";
import CallToActionButton from '../buttons/call-to-action/callToActionButton.tsx';

const Projects = () => {
    const NUMBER_OF_PROJECTS_TO_LOAD = 6

    const [numberOfProjectsDisplayed, setNumberOfProjectsDisplayed] = useState(0);
    const [projectList, setProjectList] = useState<ProjectListItem[]>([]);

    const shouldShowLoadMore = (): boolean => {
        return projectList.length > numberOfProjectsDisplayed;
    }

    const loadMore = () => {
        if(projectList.length > numberOfProjectsDisplayed) {
            const calculatedNumberForDisplay = numberOfProjectsDisplayed + NUMBER_OF_PROJECTS_TO_LOAD
            setNumberOfProjectsDisplayed(calculatedNumberForDisplay);
        }
    }

    const loadProjects = useCallback(() => {
        const dataUrl = new URL('/data/projects.json', import.meta.url).href;
        fetch(dataUrl)
            .then(response => {
                if (!response.ok) {
                    console.error(`Retrieving project list failed with response: ${response}`);
                    throw new Error(`Retrieving project list failed with status ${response.status}`);
                }
                return response.json();
            })
            .catch(error => console.error(`Failed to load project list: ${error}`))
            .then(projects => setProjectList(projects["projects"]))
    }, [])

    useEffect(() => {
        if (projectList.length > 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setNumberOfProjectsDisplayed(NUMBER_OF_PROJECTS_TO_LOAD);
        }
    }, [projectList]);

    useEffect(() => {
        loadProjects();
    }, [loadProjects]);

    return (
        <section className="projects">
            <section className="main-content">
                <h1 id="projects">Projects</h1>
                <div className="dashboard">
                    {projectList
                        .slice(0, numberOfProjectsDisplayed)
                        .map((project, index) => <ProjectModal key={index} {...project} />)}
                </div>
                {shouldShowLoadMore() && (
                    <div className="loadMoreContainer">
                        <CallToActionButton text="Load More" onClick={() => {loadMore()}} />
                    </div>
                )}
            </section>
        </section>
    );
}

export default Projects;