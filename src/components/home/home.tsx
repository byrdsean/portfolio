import Hero from "../hero/hero.tsx";
import AboutMe from "../aboutMe/aboutMe.tsx";
import Projects from "../projects/projects.tsx";
import Testimonials from "../testimonials/testimonials.tsx";
import Contact from "../contact/contact.tsx";

const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <Projects />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home;