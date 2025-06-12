import React from 'react';
import useTitle from '../../hooks/useTitle';

function Page() {
    useTitle("Média - Rituals Of Java");

    return (
        <main className="media-page">
            <section className="media-page-hero">
                <h1>Nos média</h1>
            </section>

            <section className="media-page-video">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/W-o_rKEypD0?autoplay=1&mute=1"
                        title="ASMR / Le massage le plus délicat transmis à la deuxième génération depuis 1981"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </section>
        </main>
    )
}

export default Page

