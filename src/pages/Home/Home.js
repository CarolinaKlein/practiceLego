import React from 'react';
import '../Home/Home.scss';
import VideoList from '../../components/VideoList/VideoList'
import Logo from '../../assets/logo.png'
import Apple from '../../assets/apple-appstore.png'
import Google from '../../assets/google-play.png'
import Amazon from '../../assets/amazon-appstore.png'
import Screw from '../../assets/screw.png'

function Home() {
    
    return (
      
        <div className="nick-home">
            <div className="columns is-centered">
                <div className="column is-half has-text-centered">
                    {/* <img src={Logo} />  */}
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-half has-text-centered nick-home-intro">
                    <h1 className="nick-home-title is-size-4 has-text-weight-bold">
                      Aptentaciti sociosqu!
                    </h1>
                    <p className="nick-home-description has-text-weight-semibold">
                    Litora torquent per conubia nostra, per inceptos himenaeos. Donec vel erat maximus, lacinia arcu vel, interdum turpis. Vivamus a eleifend nisi.
                    </p>
                </div>
            </div>
            <VideoList />

            <div className="nick-home-outro">
                <div className="nick-home-screws">
                    <img src={Screw} className="left-screw"/>
                    <img src={Screw} className="right-screw"/>
                </div>
                <div className="outro-body">
                    <div className="columns">
                        <div className="column">
                            <div className="nick-home-outro-logo">
                                <img src={Logo} className="outro-logo"/>
                            </div>
                        </div>

                        <div>
                            <div className="column has-text-centered is-size-4 has-text-weight-semibold">
                                <p>Don't have the LEGO® Life App yet?</p>
                                <p>Get a parent's permission to Download it for FREE!</p>
                            </div>
                            <div className="column">
                                <div className="appstore-links">
                                    <a href="https://apps.apple.com/us/app/lego-life/id1140466898"><img src={Apple}/></a>
                                    <a href="https://play.google.com/store/apps/details?id=com.lego.common.legolife&hl=en"><img src={Google}/></a>
                                    <a href="https://www.amazon.com/LEGO%C2%AE-Life-Create-share-discover/dp/B01N4RZJTS"><img src={Amazon}/></a>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <img src={Logo} className="outro-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Home;
