import {useState} from "react"
import "./Navigation.css"
import hamburgerIcon from "../../assets/icons/hamburger.svg"
import closeIcon from "../../assets/icons/close.svg"

const Navigation = ()=> {

    const [showNavList, setShowNavList] = useState(false)

    const displayNavList = ()=> {
        setShowNavList(true);
    }

    const hideNavList = () => {
        setShowNavList(false);
    }

    return (
        <section className="navigation-container">
            <div className="navigation">
                <div className="logo">
                    <a href="/">Sean Byrd</a>
                </div>
                <div className={`links ${showNavList ? "show" : ""}`}>
                    <div className="close-navigation" onClick={hideNavList}>
                        <img src={closeIcon} alt="Close Navigation Links" />
                    </div>
                    <ul className="link-list">
                        <li>
                            <a href={"#about-me"} onClick={hideNavList}>About Me</a>
                        </li>
                        <li>
                            <a href={"#skills-and-services"} onClick={hideNavList}>Skills and Services</a>
                        </li>
                        <li>
                            <a href={"#projects"} onClick={hideNavList}>Projects</a>
                        </li>
                        <li>
                            <a href={"#testimonials"} onClick={hideNavList}>Testimonials</a>
                        </li>
                        <li>
                            <a href={"#contact"} onClick={hideNavList}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="hamburger-menu" onClick={displayNavList}>
                    <img src={hamburgerIcon} alt="Navigation Menu" />
                </div>
            </div>
        </section>
    )
}

export default Navigation;