import React from 'react';
import '../Home/Home.scss'
import Footer from '../../components/Footer'

function Home() {

    const videos = [1, 2, 3]

    return (
        <div className="nick-home">
            <div className="columns is-centered">
                <div className="column is-half has-text-centered">
                    <h1 className="nick-home-title">
                      Aptentaciti sociosqu!
                    </h1>
                    <p className="nick-home-description">
                    Litora torquent per conubia nostra, per inceptos himenaeos. Donec vel erat maximus, lacinia arcu vel, interdum turpis. Vivamus a eleifend nisi.
                    </p>
                </div>
            </div>
            <div className="columns is-centered">
                    {videos.map((video) => {
                        return (
                            <div className="column is-one-quarter has-text-centered" key={video}>
                                <div className="nick-home-cards">
                                        <div>
                                            <img src={video.firstLogo}/>
                                            <img src={video.secondLogo}/>
                                        </div>
                                        <img src={video.thumbnail}></img>
                                        <button>Watch Video</button>
                                    </div>
                          </div>
                        )
                    })}   
            </div>
            <div className="columns is-centered">
                <div className="column  is-three-quarters has-text-centered">
                    <div className="nick-home-outro">
                    <h2>Aptentaciti sociosqu!</h2>
                    <button>VISIT LEGO</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;
