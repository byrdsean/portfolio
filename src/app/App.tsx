import {useState} from "react";
import './App.css'
import Navigation from "../components/navigation/navigation.tsx"
import Hero from "../components/hero/hero.tsx"
import Projects from "../components/projects/projects.tsx";
import Testimonials from "../components/testimonials/testimonials.tsx";
import Footer from "../components/footer/footer.tsx"

const App = ()=> {

    const [showNavList, setShowNavList] = useState(false)

    const displayNavList = ()=> {
        setShowNavList(true);
    }

    const hideNavList = () => {
        setShowNavList(false);
    }

    return (
        <>
            <Navigation showNavList={showNavList} displayNavList={displayNavList} hideNavList={hideNavList} />
            <section className={`mainSection ${showNavList ? "displayNav" : ""}`}>
                <Hero />
                <Projects />
                <Testimonials />
                <Footer />
            </section>
        </>
    )
}

export default App
