import type {FC, JSX} from 'react';
import './ProjectModal.css'
import type ProjectListItem from "./ProjectListItem.tsx";
import TagList from "../tagList/TagList.tsx";
import {navigationStaticLinks} from "../navigation/NavigationStaticLink.tsx";

const ProjectModal:FC<ProjectListItem> =
({
    id,
    title,
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

        return `${baseUrl}${navigationStaticLinks.projects.href}/${unParsedUrl}`;
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
            <TagList tags={tags} />
        </div>
    )
}

export default ProjectModal;