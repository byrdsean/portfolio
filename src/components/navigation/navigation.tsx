import { type FC } from "react"
import "./Navigation.css"
import hamburgerIcon from "../../assets/icons/hamburger.svg"
import closeIcon from "../../assets/icons/close.svg"

interface NavigationProps {
    showNavList: boolean,
    hideNavList: () => void,
    displayNavList: () => void,
}

const Navigation:FC<NavigationProps> =
({
    showNavList,
    hideNavList,
    displayNavList
})=> {
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
                            <a href={"/portfolio"}>About Me</a>
                        </li>
                        <li>
                            <a href={"/portfolio"}>Skills and Services</a>
                        </li>
                        <li>
                            <a href={"/portfolio#projects"}>Projects</a>
                        </li>
                        <li>
                            <a href={"/portfolio#testimonials"}>Testimonials</a>
                        </li>
                        <li>
                            <a href={"/portfolio"}>Contact</a>
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