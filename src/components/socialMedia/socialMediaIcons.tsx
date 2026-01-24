import './SocialMediaIcons.css'
import { type FC, useEffect, useState } from 'react';
import type Icons from "./Icons.tsx";

import linkedInIconWhite from "../../assets/icons/linkedin-white.svg";
import githubIconWhite from "../../assets/icons/github-white.svg";
import codepenIconWhite from "../../assets/icons/codepen-white.svg";
import envelopeIconWhite from "../../assets/icons/envelope-white-filled.svg";

import linkedInIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import codepenIcon from "../../assets/icons/codepen.svg";
import envelopeIcon from "../../assets/icons/envelope.svg";

interface SocialMediaIconsProps {
    showWhiteIcons: boolean;
}

const SocialMediaIcons:FC<SocialMediaIconsProps> = ({
    showWhiteIcons
}) => {

    const [icons, setIcons] = useState<Icons>({
        linkedIn: linkedInIcon,
        github: githubIcon,
        codepen: codepenIcon,
        email: envelopeIcon
    })

    useEffect(() => {
        const newIcons = {
            linkedIn: showWhiteIcons ? linkedInIconWhite : linkedInIcon,
            github: showWhiteIcons ? githubIconWhite : githubIcon,
            codepen: showWhiteIcons ? codepenIconWhite : codepenIcon,
            email: showWhiteIcons ? envelopeIconWhite : envelopeIcon
        } as Icons;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIcons(newIcons)
    }, [showWhiteIcons]);

    return (
        <div className="socialMediaIcons">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/seanbyrd/" target="_blank">
                        <img src={icons.linkedIn} alt="LinkedIn Icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/byrdsean" target="_blank">
                        <img src={icons.github} alt="Github Icon" />
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/byrdsean" target="_blank">
                        <img src={icons.codepen} alt="Codepen Icon" />
                    </a>
                </li>
                <li>
                    <a href="mailto:byrd.sean1015@gmail.com?subject=Sean Byrd's Portfolio - Let's Connect">
                        <img src={icons.email} alt="Email Icon" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMediaIcons;