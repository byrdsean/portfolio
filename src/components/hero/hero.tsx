import './Hero.css'
import CallToActionButton from '../buttons/call-to-action/callToActionButton.tsx'
import CallToActionTypes from "../buttons/call-to-action/callToActionTypes.tsx"

const Hero = () => {
    return (
        <section className="hero">
            <section className="main-content">
                <div className="profile-copy">
                    <p className="greeting">Hello, I'm</p>
                    <h1>Sean Christopher Byrd</h1>
                    <p className="subtitle">Software Engineer</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="cta-group">
                        <CallToActionButton text="Let's Connect!" iconName="envelope-white.svg" type={CallToActionTypes.filled} />
                        <CallToActionButton text="View Resume" iconName="document-text.svg" />
                    </div>
                </div>
                <div className="profile-img">
                    <img src="https://placehold.co/640x640" alt="Sean Byrd Profile" />
                </div>
            </section>
        </section>
    )
}

export default Hero;