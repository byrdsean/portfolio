import "./Navigation.css"
import hamburgerIcon from "../../src/assets/hamburger.svg"
import closeIcon from "../../src/assets/close.svg"

function Navigation() {
    return (
        <section className="container">
            <div className="navigation">
                <div className="logo">Sean Byrd</div>
                <div className="links">
                    <div className="close-navigation">
                        <img src={closeIcon} alt="Close Navigation Links" />
                    </div>
                    <ul className="link-list">
                        <li>About Me</li>
                        <li>Skills and Services</li>
                        <li>Projects</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <img src={hamburgerIcon} alt="Navigation Menu" />
                </div>
            </div>
        </section>
    )
}

export default Navigation;