import type {NavigationLink} from "./NavigationLink.tsx";

interface NavigationLinkList {
    links: NavigationLink[];
}

const setBaseUrl = (url: string): string => {
    return !url ? url : `${import.meta.env.BASE_URL}${url}`;
}

export const navigationLinks = {
    links: [
        {href: setBaseUrl("#about-me"), text: "About Me"},
        {href: setBaseUrl("projects"), text: "Projects"},
        {href: setBaseUrl("#testimonials"), text: "Testimonials"},
        {href: setBaseUrl("#contact"), text: "Contact"},
    ]
} as NavigationLinkList;