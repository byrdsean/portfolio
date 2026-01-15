import {type FC} from "react";
import './CallToActionButton.css'
import CallToActionTypes from "./callToActionTypes.tsx";

interface CallToActionButtonProps {
    text: string;
    type?: string;
    iconName?: string;
}

const CallToActionButton:FC<CallToActionButtonProps> = 
({
    text,
    type = CallToActionTypes.outlined,
    iconName
}) => {

    const FILLED_BUTTON_CLASS_NAME = "filled";

    const setIconPath = (icon?: string): string => {
        if (!icon) return ""
        return new URL(`../../../assets/icons/${icon}`, import.meta.url).href 
    }

    const setButtonTypeClass = (): string => {
        return (CallToActionTypes.filled === type)
            ? FILLED_BUTTON_CLASS_NAME
            : "";
    }

    const iconPath = setIconPath(iconName);

    return <button className={`ctaBtn ${setButtonTypeClass()}`}>
        {text} {iconPath && (<img src={iconPath} alt="button-icon" />)}
    </button>
}

export default CallToActionButton;