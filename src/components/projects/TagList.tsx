import type { FC } from 'react';
import type TagItem from "./TagItem.tsx";
import './TagList.css'

const TagList: FC<TagItem> = ({
    tags,
    showLabel = false
}) => {
    const buildTagLink = (tag: string): string => {
        return tag;
    }

    return <>
        {
            tags && tags.length > 0 &&
            <div className="tag-list">
                {showLabel && <span>Tags</span>}
                <ul>
                    {tags.map((tag, index) =>
                        <li key={index}>
                            <a href={buildTagLink(tag)} className="tag">{tag}</a>
                        </li>
                    )}
                </ul>
            </div>
        }
    </>
}

export default TagList;