import './Projects.css'
import ProjectModal from "./projectModal.tsx";
import type ProjectListItem from "./ProjectListItem.tsx";

const Projects = () => {

    const tagList: ProjectListItem[] = [
        { text: "HTML", link: "/portfolio" },
        { text: "Javascript", link: "/portfolio" },
        { text: "CSS", link: "/portfolio" },
        { text: "Kotlin", link: "/portfolio" },
        { text: "C Sharp", link: "/portfolio" },
    ]

    return (
        <section className="projects">
            <section className="main-content">
                <h1>Projects</h1>
                <div className="dashboard">
                    <ProjectModal
                        title={"Project Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                        imagePath={"https://placehold.co/260x260"}
                        imageAlt="test"
                        tags={tagList}
                    />
                    <ProjectModal
                        title={"Project Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                        imagePath={"https://placehold.co/260x260"}
                        imageAlt="test"
                    />
                    <ProjectModal
                        title={"Project Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                        imagePath={"https://placehold.co/260x260"}
                        imageAlt="test"
                        tags={tagList}
                    />
                    <ProjectModal
                        title={"Project Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                        imagePath={"https://placehold.co/260x260"}
                        imageAlt="test"
                        tags={tagList}
                    />
                    <ProjectModal
                        title={"Project Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                        imagePath={"https://placehold.co/260x260"}
                        imageAlt="test"
                    />
                    <ProjectModal
                        title={"Project Title - Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                        imagePath={"https://placehold.co/260x260"}
                        imageAlt="test"
                        tags={tagList}
                    />
                </div>
            </section>
        </section>
    );
}

export default Projects;