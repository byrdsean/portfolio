interface NavigationLink {
    href: string;
    text: string;
}

interface NavigationLinkList {
    links: NavigationLink[];
}

export const navigationLinks = {
    links: [
        { href: "#about-me", text: "About Me" },
        { href: "#skills-and-services", text: "Skills & Services" },
        { href: "#projects", text: "Projects" },
        { href: "#testimonials", text: "Testimonials" },
        { href: "#contact", text: "Contact" },
    ]
} as NavigationLinkList;