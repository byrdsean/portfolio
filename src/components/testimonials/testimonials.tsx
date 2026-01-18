/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from 'react';
import './Testimonials.css'
import TestimonialModal from './testimonialModal';
import type TestimonialListItem from './TestimonialListItem';

const Testimonials = () => {

    const [rawTestimonialList, setRawTestimonialList] = useState<TestimonialListItem[]>([]);
    const [testimonialList, setTestimonialList] = useState<TestimonialListItem[]>([]);

    const shouldShowTestimonialList = (): boolean => {
        return testimonialList.length > 0;
    }

    const loadTestimonials = useCallback(() => {
        const dataUrl = new URL('/data/testimonials.json', import.meta.url).href;
        fetch(dataUrl)
            .then(response => {
                if (!response.ok) {
                    console.error(`Retrieving testimonial list failed with response: ${response}`);
                    throw new Error(`Retrieving testimonial list failed with status ${response.status}`);
                }
                return response.json();
            })
            .catch(error => console.error(`Failed to load project list: ${error}`))
            .then(testimonials => setRawTestimonialList(testimonials["testimonials"]))
    }, [])

    useEffect(() => {
        const validTestimonials = rawTestimonialList
            .filter(testimonial => !!testimonial.quote && !!testimonial.name);
        setTestimonialList(validTestimonials);
    }, [rawTestimonialList]);

    useEffect(() => {
        loadTestimonials();
    }, [loadTestimonials]);

    return (
        <section className="testimonials">
            <section className="main-content">
                <h1 id="testimonials">Testimonials</h1>
                {shouldShowTestimonialList() && (
                    <div className="dashboard">
                        {testimonialList.map((testimonial, index) => <TestimonialModal key={index} {...testimonial} />)}
                    </div>
                )}
            </section>
        </section>
    )
}

export default Testimonials;