import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home.tsx"
import Navigation from "../components/navigation/navigation.tsx"
import Footer from "../components/footer/footer.tsx"
import ProjectDescription from "../components/projects/projectDescription.tsx";
import NotFound from "../components/notFound/NotFound.tsx";

const App = ()=> {

    return (
        <>
            <Navigation />
            <section className={"mainSection"}>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/projects/:slug"} element={<ProjectDescription />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </section>
            <Footer />
        </>
    )
}

export default App
