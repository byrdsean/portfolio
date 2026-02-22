import './Projects.css'
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import ProjectModal from "./projectModal.tsx";
import CallToActionButton from '../buttons/call-to-action/callToActionButton.tsx';
import useProjects from "./useProjects.tsx";
import {navigationStaticLinks} from "../navigation/NavigationStaticLink.tsx";

const Projects = () => {
    const NUMBER_OF_PROJECTS_TO_LOAD = 3

    const navigate = useNavigate();
    const { projects, isLoading } = useProjects();
    const [numberOfProjectsDisplayed, setNumberOfProjectsDisplayed] = useState(0);

    const showAllProjects = () => {
        navigate(navigationStaticLinks.projects.href, {replace: true});
    }

    useEffect(() => {
        if(!isLoading && projects.length > 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setNumberOfProjectsDisplayed(NUMBER_OF_PROJECTS_TO_LOAD);
        }
    }, [projects, isLoading]);

    return (
        <section className="projects">
            <section className="main-content">
                <h1 id="projects">Projects</h1>
                <div className="dashboard">
                    {projects
                        .slice(0, numberOfProjectsDisplayed)
                        .map((project, index) => <ProjectModal key={index} {...project} />)}
                </div>
                <div className="loadMoreContainer">
                    <CallToActionButton text="All Projects" onClick={() => {showAllProjects()}} />
                </div>
            </section>
        </section>
    );
}

export default Projects;