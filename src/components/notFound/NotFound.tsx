import "./NotFound.css"

const NotFound = () => {
    return (
        <section className="not-found">
            <section className="not-found-content">
                <h1>404</h1>
                <p>Oops! This page does not exist!</p>
                <a href={import.meta.env.BASE_URL}>Go Back to Home</a>
            </section>
        </section>
    )
}

export default NotFound;