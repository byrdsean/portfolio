import './Footer.css'
import SocialMediaIcons from "../socialMedia/socialMediaIcons.tsx";
import {navigationLinks} from "../navigation/navigationLinkList.tsx";

const Footer = () => {

    const getCurrentYear = () : number => {
        return new Date().getUTCFullYear()
    }

    return (
        <section className="footer">
            <section className="main-content">
                <section className="footer-content">
                    <div className="get-in-touch">
                        <h1>Get In Touch!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <SocialMediaIcons showWhiteIcons={true}/>
                    </div>
                    <div className="navigation">
                        <h2>Navigation</h2>
                        <ul>
                            {navigationLinks.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <a href={"mailto:byrd.sean1015@gmail.com?subject=Sean Byrd's Portfolio - Let's Connect"}>byrd.sean1015@gmail.com</a>
                            </li>
                            <li>New York, NY</li>
                        </ul>
                    </div>
                </section>
                <section className="copyright">
                    <p>Copyright &copy; {getCurrentYear()} Sean Byrd</p>
                    <p>All Rights Reserved.</p>
                </section>
            </section>
        </section>
    )
}

export default Footer;