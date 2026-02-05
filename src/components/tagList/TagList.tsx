import type { FC } from 'react';
import type TagItem from "./TagItem.tsx";
import './TagList.css'

const TagList: FC<TagItem> = ({
    tags,
    showLabel = false
}) => {
    return <>
        {
            tags && tags.length > 0 &&
            <div className="tag-list">
                {showLabel && <span className={"label"}>Tags</span>}
                <ul>
                    {tags.map((tag, index) =>
                        <li key={index}>
                            <span className="tag">{tag}</span>
                        </li>
                    )}
                </ul>
            </div>
        }
    </>
}

export default TagList;