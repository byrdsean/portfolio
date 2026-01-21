import './App.css'
import Navigation from "../components/navigation/navigation.tsx"
import Hero from "../components/hero/hero.tsx"
import Projects from "../components/projects/projects.tsx";
import Testimonials from "../components/testimonials/testimonials.tsx";
import Footer from "../components/footer/footer.tsx"

const App = ()=> {

    return (
        <>
            <Navigation />
            <section className={"mainSection"}>
                <Hero />
                <Projects />
                <Testimonials />
                <Footer />
            </section>
        </>
    )
}

export default App
