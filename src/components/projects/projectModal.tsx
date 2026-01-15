import { type FC } from 'react'
import './ProjectModal.css'
import type ProjectListItem from "./ProjectListItem.tsx";

interface ProjectModalProps {
    title: string,
    imagePath: string,
    imageAlt: string,
    tags?: ProjectListItem[]
}

const ProjectModal:FC<ProjectModalProps> =
({
    title,
    imagePath,
    imageAlt,
    tags
}) => {
    return <div className="projectModal">
        <img src={imagePath} alt={imageAlt} />
        <h2>{title}</h2>
        {
            tags && tags.length > 0 &&
            <ul>
                {tags.map((tag,index) =>
                    <li key={index}>
                        <a href={tag.link} className="tag">{tag.text}</a>
                    </li>
                )}
            </ul>
        }
    </div>
}

export default ProjectModal;