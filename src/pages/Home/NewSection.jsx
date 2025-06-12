
export function NewSectionL({ title, image, alt, text }) {
    const showImage = !!(image && alt);

    return (
        <section className="home-section">
            <div className="home-section__container">
                
                <div className="home-section__content">
                    <div className="home-content__container">
                        {title && <h1 className="home-content-title">{title}</h1>}
                        {text && <p className="home-content-text">{text}</p>}
                    </div>
                </div>

                <div className="home-section__image">
                    {showImage && <img src={image} alt={alt} />}
                </div>

            </div>
        </section>
    )
}

export function NewSectionR({ }) {
    return (
        <section className="home-section">
            <div className="home-section__container">
                test 2
            </div>
        </section>
    )
}
