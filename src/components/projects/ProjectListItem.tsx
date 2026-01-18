interface ProjectListItem {
    id: number;
    title: string;
    link: string;
    img: string;
    alt: string;
    description?: string;
    tags?: string[]
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default ProjectListItem;