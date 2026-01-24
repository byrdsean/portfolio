import './App.css'
import Navigation from "../components/navigation/navigation.tsx"
import Hero from "../components/hero/hero.tsx"
import Projects from "../components/projects/projects.tsx";
import Testimonials from "../components/testimonials/testimonials.tsx";
import Footer from "../components/footer/footer.tsx"
import AboutMe from '../components/aboutMe/aboutMe.tsx';
import Contact from '../components/contact/contact.tsx';

const App = ()=> {

    return (
        <>
            <Navigation />
            <section className={"mainSection"}>
                <Hero />
                <AboutMe />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </section>
        </>
    )
}

export default App
