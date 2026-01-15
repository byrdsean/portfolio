import './App.css'
import Navigation from "../components/navigation/navigation.tsx"
import Hero from "../components/hero/hero.tsx"
import {useState} from "react";

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
            </section>
        </>
    )
}

export default App
