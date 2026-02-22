import Hero from "../hero/Hero.tsx";
import AboutMe from "../aboutMe/AboutMe.tsx";
import Projects from "../projects/Projects.tsx";
import Testimonials from "../testimonials/Testimonials.tsx";
import Contact from "../contact/Contact.tsx";

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutMe/>
            <Projects/>
            <Testimonials/>
            <Contact/>
        </>
    )
}

export default Home;