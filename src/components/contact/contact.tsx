import './Contact.css'
import CallToActionTypes from '../buttons/call-to-action/callToActionTypes';
import CallToActionButton from '../buttons/call-to-action/callToActionButton';
import SocialMediaIcons from '../socialMedia/socialMediaIcons';

const Contact = () => {
    return (
        <section className="contact">
            <section className="main-content">
                <h1 id="contact">Contact</h1>
                <p>
                    Let's Talk About <span className={"accent"}>Your Next Projects!</span>
                </p>
                <div className={"mb-20"}>
                    <CallToActionButton text="Let's Connect!" iconName="envelope-white.svg" onClick={() => {}} type={CallToActionTypes.filled} />
                </div>
                <SocialMediaIcons showWhiteIcons={false}/>
            </section>
        </section>
    )
}

export default Contact;