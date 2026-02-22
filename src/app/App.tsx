import './App.css'
import { useCallback, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/home/home.tsx"
import Navigation from "../components/navigation/navigation.tsx"
import Footer from "../components/footer/footer.tsx"
import ProjectDescription from "../components/projects/projectDescription.tsx";
import NotFound from "../components/notFound/NotFound.tsx";
import ProjectLanding from "../components/projects/ProjectLanding.tsx";

const App = ()=> {

    const SCROLL_TIMEOUT_MILLISECONDS = 200;

    const { hash } = useLocation();

    const scrollToHash = useCallback(() => {
        const hashId = hash?.replace('#', '');
        if (!hashId) return;

        const scrollElement = document.getElementById(hashId);
        if (!scrollElement) return;

        setTimeout(() => {
            scrollElement.scrollIntoView();
        }, SCROLL_TIMEOUT_MILLISECONDS);
    }, [hash]);

    useEffect(() => {
        scrollToHash();
    }, [hash, scrollToHash]);

    return (
        <>
            <Navigation />
            <section className={"mainSection"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/projects/:url"} element={<ProjectDescription />} />
                    <Route path={"/projects"} element={<ProjectLanding />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </section>
            <Footer />
        </>
    )
}

export default App
