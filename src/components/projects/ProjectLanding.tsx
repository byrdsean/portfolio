import useProjects from "./useProjects.tsx";
import {useEffect, useState} from "react";
import ProjectModal from "./ProjectModal.tsx";
import CallToActionButton from "../buttons/call-to-action/CallToActionButton.tsx";

const ProjectLanding = () => {
    const NUMBER_OF_PROJECTS_TO_LOAD = 6

    const {projects, isLoading} = useProjects();
    const [numberOfProjectsDisplayed, setNumberOfProjectsDisplayed] = useState(0);

    const shouldShowLoadMore = (): boolean => {
        return projects.length > numberOfProjectsDisplayed;
    }

    const loadMore = () => {
        if (projects.length > numberOfProjectsDisplayed) {
            const calculatedNumberForDisplay = numberOfProjectsDisplayed + NUMBER_OF_PROJECTS_TO_LOAD
            setNumberOfProjectsDisplayed(calculatedNumberForDisplay);
        }
    }

    useEffect(() => {
        if (!isLoading && projects.length > 0) {
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
                {shouldShowLoadMore() && (
                    <div className="loadMoreContainer">
                        <CallToActionButton text="Load More" onClick={() => {
                            loadMore()
                        }}/>
                    </div>
                )}
            </section>
        </section>
    );
}

export default ProjectLanding;