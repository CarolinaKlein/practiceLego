import React from 'react';
import '../Home/Home.scss';
import VideoList from '../../components/VideoList/VideoList'
import Logo from '../../assets/logo.png'

function Home() {
    
    return (
      
        <div className="nick-home">
            <img src={Logo} />
            <div className="columns is-centered">
                <div className="column is-half has-text-centered nick-home-intro">
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
        </div>
    );
}
export default Home;
