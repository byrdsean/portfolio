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
                            <a href="/">About Me</a>
                        </li>
                        <li>
                            <a href="/">Skills and Services</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
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