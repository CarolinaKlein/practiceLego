import React from 'react';
import '../Home/Home.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import VideoList from '../../components/VideoList'

function Home() {
    
    return (
      
        <div className="nick-home">
            <Navbar/>
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
            <VideoList />
            <div className="columns is-centered">
                <div className="column is-three-quarters has-text-centered">
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
