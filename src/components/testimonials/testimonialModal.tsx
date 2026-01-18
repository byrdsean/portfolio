import {type FC} from 'react'
import './TestimonialModal.css'
import type TestimonialListItem from './TestimonialListItem';

const TestimonialModal:FC<TestimonialListItem> = ({
    id,
    quote,
    name,
    role,
    img: image
}) => {
    const getProfilePicAlt = () => {
        return !name ? "profile picture" : `${name}'s profile picture`;
    }

    return (
        <div className="testimonialModal" data-id={id}>
            <p className="quote">{quote}</p>
            <div className="attestant">
                <div className="profile">
                    <h2>{name}</h2>
                    {role && <p className="subtitle">{role}</p>}
                </div>
                {image && <img src={image} alt={getProfilePicAlt()} className="profilePic" />}
            </div>
        </div>
    )
}

export default TestimonialModal;