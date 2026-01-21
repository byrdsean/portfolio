import {useState} from "react"
import "./Navigation.css"
import hamburgerIcon from "../../assets/icons/hamburger.svg"
import closeIcon from "../../assets/icons/close.svg"
import {navigationLinks} from "./navigationLinkList.tsx";

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
                    <a href="/portfolio/">Sean Byrd</a>
                </div>
                <div className={`links ${showNavList ? "show" : ""}`}>
                    <div className="close-navigation" onClick={hideNavList}>
                        <img src={closeIcon} alt="Close Navigation Links" />
                    </div>
                    <ul className="link-list">
                        {navigationLinks.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} onClick={hideNavList}>{link.text}</a>
                            </li>
                        ))}
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