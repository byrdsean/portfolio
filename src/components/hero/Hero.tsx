import './Hero.css'
import CallToActionButton from '../buttons/call-to-action/CallToActionButton.tsx'
import CallToActionTypes from "../buttons/call-to-action/CallToActionTypes.tsx"
import {Constants} from "../../constants/Constants.tsx";
import profile from "../../assets/images/profiles/seanbyrd.jpg";

const Hero = () => {

    const SWE_START_DATE = new Date(2012, 1, 28);

    const openResume = () => {
        window.open(Constants.resumeLink, "_blank")
    }

    const openMailTo = () => {
        window.location.href = Constants.mailto;
    }

    const getYearsSinceSWEStart = (): number => {
        // eslint-disable-next-line react-hooks/purity
        const dateDifference = Date.now() - SWE_START_DATE.getTime();

        // Approximate milliseconds in a year: 1000 * 60 * 60 * 24 * 365.25
        // (365.25 days per year for better average accuracy)
        const millisecondsInAYear = 31557600000;

        return Math.ceil(dateDifference / millisecondsInAYear);
    }
    return (
        <section className="hero">
            <section className="main-content">
                <div className="profile-copy">
                    <p className="greeting">Hello, I'm</p>
                    <h1>Sean Christopher Byrd</h1>
                    <p className="subtitle">Software Engineer</p>
                    <p className="description">
                        Proven impact and results driven software engineer with over {getYearsSinceSWEStart()} years
                        experience working with stakeholders to build scalable, maintainable, and profitable business
                        solutions.
                    </p>
                    <div className="cta-group">
                        <CallToActionButton text="Let's Connect!" iconName="envelope-white.svg" onClick={openMailTo}
                                            type={CallToActionTypes.filled}/>
                        <CallToActionButton text="View Resume" iconName="document-text.svg" onClick={openResume}/>
                    </div>
                </div>
                <div className="profile-img">
                    <img src={profile} alt="Sean Byrd Profile"/>
                </div>
            </section>
        </section>
    )
}

export default Hero;