import React, { useEffect, useState } from 'react';
import homeData from "../../data/homeData.json";
import Slider from './components/Slider';
import Section from "../../components/section/Section";
import Comments from "./components/Comments";
import Intro from './components/Intro';
import Leni from './components/Leni';
import Diode from './components/Diode';
import Hydra from './components/Hydra';
import Institute from './components/Institute';
import useTitle from '../../hooks/useTitle';

function Page() {
    const data = homeData;
    useTitle("Accueil - Rituals Of Java");

    return (
        <main className="home-page">
            <div className="home-page__container">

                <Slider />

                <section className="intro">
                    <Intro className='intro' data={data[0]} />
                </section>

                <section className="leni">
                    <Leni className='leni' data={data[1]} />
                </section>

                <section className="profosma">
                    <Diode className="profosma" data={data[2]} />
                </section>

                <section className="nano">
                    <Hydra className="nano" data={data[3]} />
                </section>

                <section className="diode">
                    <Diode className="diode" data={data[4]} />
                </section>

                <section className="hydra">
                    <Hydra className="hydra" data={data[5]} />
                </section>

                <section className="institute">
                    <Institute className="institute" data={data[6]} />
                </section>

                {/* <div className="comment-section">
                    <Comments />
                </div> */}

            </div>
        </main>
    )
}

export default Page