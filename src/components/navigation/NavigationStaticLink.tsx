import type {NavigationLink} from "./NavigationLink.tsx";

interface NavigationStaticLink {
    projects: NavigationLink,
    notFound: NavigationLink
}

export const navigationStaticLinks = {
    projects: {href: "projects", text: "Projects"},
    notFound: {href: "not-found", text: "Not Found"},
} as NavigationStaticLink;