import type {FC, JSX} from 'react';
import './ProjectModal.css'
import type ProjectListItem from "./ProjectListItem.tsx";

const ProjectModal:FC<ProjectListItem> =
({
    id,
    title,
    link,
    img: image,
    alt,
    url,
    description,
    tags
}) => {

    const parseUrl = (unParsedUrl : string): string => {
        if (!unParsedUrl) return unParsedUrl;

        const baseUrl = import.meta.env.BASE_URL.toLowerCase();

        if (unParsedUrl.indexOf(baseUrl) === 0) {
            throw new Error(`Invalid project url provided: ${unParsedUrl}`);
        }

        return `${baseUrl}projects/${unParsedUrl}`;
    }

    const wrapLinkToProjectDescription = (children: JSX.Element) : JSX.Element => {
        return !url ? children : <a href={parseUrl(url)}>{children}</a>;
    }

    return (
        <div className="projectModal" data-id={id}>
            {wrapLinkToProjectDescription(
                <img src={image} alt={alt} />
            )}

            {wrapLinkToProjectDescription(
                <h2>{title}</h2>
            )}

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