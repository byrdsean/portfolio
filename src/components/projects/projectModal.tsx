import { type FC } from 'react'
import './ProjectModal.css'
import type ProjectListItem from "./ProjectListItem.tsx";

const ProjectModal:FC<ProjectListItem> =
({
    id,
    title,
    link,
    img: image,
    alt,
    description,
    tags
}) => {
    return (
        <div className="projectModal" data-id={id}>
            <img src={image} alt={alt} />
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            {
                tags && tags.length > 0 &&
                <ul>
                    {tags.map((tag, index) =>
                        <li key={index}>
                            <a href={link} className="tag">{tag}</a>
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}

export default ProjectModal;