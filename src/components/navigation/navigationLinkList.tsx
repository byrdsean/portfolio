interface NavigationLink {
    href: string;
    text: string;
}

interface NavigationLinkList {
    links: NavigationLink[];
}

export const navigationLinks = {
    links: [
        { href: `${import.meta.env.BASE_URL}#about-me`, text: "About Me" },
        { href: `${import.meta.env.BASE_URL}#projects`, text: "Projects" },
        { href: `${import.meta.env.BASE_URL}#testimonials`, text: "Testimonials" },
        { href: `${import.meta.env.BASE_URL}#contact`, text: "Contact" },
    ]
} as NavigationLinkList;