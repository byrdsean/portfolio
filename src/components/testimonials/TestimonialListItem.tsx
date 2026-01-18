interface TestimonialListItem {
    id: number;
    quote: string;
    name: string;
    role?: string;
    img?: string
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default TestimonialListItem;