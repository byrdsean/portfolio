import { useEffect, useState} from 'react';
import type ProjectListItem from "./ProjectListItem.tsx"

const useProjects = () => {
    const [projects, setProjects] = useState<ProjectListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const relativePath = `${import.meta.env.BASE_URL}data/projects.json`;
        const dataUrl = new URL(relativePath, import.meta.url).href;

        fetch(dataUrl)
            .then(response => {
                if (!response.ok) {
                    console.error(`Retrieving project list failed with response: ${response}`);
                    throw new Error(`Retrieving project list failed with status ${response.status}`);
                }
                return response.json();
            })
            .catch(error => console.error(`Failed to load project list: ${error}`))
            .then(projects => setProjects(projects["projects"]))
            .finally(() => setIsLoading(false));
    }, [])

    return { projects, isLoading };
}

export default useProjects;