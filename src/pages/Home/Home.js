import React from 'react';
import '../Home/Home.scss';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Batman from '../../assets/batman.png';
import City from '../../assets/city.png';
import Minecraft from '../../assets/minecraft.png'
import Thumbnail from '../../assets/thumbnail.png'

function Home() {

    let videoList = [
        {
            firstLogo: City,
            thumbnail: Thumbnail,
            available: "Watch Video"
        },
        {
            firstLogo: Minecraft,
            thumbnail: Thumbnail,
            available: "Unlock 12/6"
        },
        {
            firstLogo: Batman,
            thumbnail: Thumbnail,
            available: "Unlock 12/13"
        }
    ]

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
            <div className="columns is-centered">
                    {videoList.map((video) => {
                        return (
                            <div className="column is-flex is-one-quarter has-text-centered" key={video}>
                                <div className="nick-home-cards">
                                        <div>
                                            <img src={video.firstLogo}/>
                                            <img src={video.secondLogo}/>
                                        </div>
                                        <div>
                                            <img src={video.thumbnail}></img>
                                        </div>
                                        <button>{video.available}</button>
                                    </div>
                          </div>
                        )
                    })}   
            </div>
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
