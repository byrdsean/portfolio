import { useState } from "react"
import "./Navigation.css"
import hamburgerIcon from "../assets/hamburger.svg"
import closeIcon from "../assets/close.svg"

function Navigation() {

    const [showNavList, setShowNavList] = useState(false)
    
    function displayNavList() {
        setShowNavList(true);
    }

    function hideNavList() {
        setShowNavList(false);
    }

    return (
        <section className="container">
            <div className="navigation">
                <div className="logo">
                    <a href="/portfolio">Sean Byrd</a>
                </div>
                <div className={`links ${showNavList ? "show" : ""}`}>
                    <div className="close-navigation" onClick={hideNavList}>
                        <img src={closeIcon} alt="Close Navigation Links" />
                    </div>
                    <ul className="link-list">
                        <li>
                            <a href="/portfolio">About Me</a>
                        </li>
                        <li>
                            <a href="/portfolio">Skills and Services</a>
                        </li>
                        <li>
                            <a href="/portfolio">Projects</a>
                        </li>
                        <li>
                            <a href="/portfolio">Testimonials</a>
                        </li>
                        <li>
                            <a href="/portfolio">Contact</a>
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