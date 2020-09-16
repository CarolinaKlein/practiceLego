import React from 'react'
import Batman from '../assets/batman.png';
import City from '../assets/city.png';
import Minecraft from '../assets/minecraft.png'
import Thumbnail from '../assets/thumbnail.png'
import { useHistory } from 'react-router-dom';


function VideoList(){

    let videoList = [
        {   
            id: 1,
            firstLogo: City,
            thumbnail: Thumbnail,
            available: "Watch Video",
            sample: <iframe width="560" height="315" src="https://www.youtube.com/embed/jXZAbnn1kTU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        },
        {   
            id: 2,
            firstLogo: Minecraft,
            thumbnail: Thumbnail,
            available: "Unlock 12/6",
            sample: "https://www.youtube.com/watch?v=c_dG_HxHMVI"
        },
        {
            id: 3,
            firstLogo: Batman,
            thumbnail: Thumbnail,
            available: "Unlock 12/13",
            sample: "https://www.youtube.com/watch?v=c_dG_HxHMVI"
        }
    ]

    const history = useHistory()

    let handleThumbnailClick = (id) => {
        history.push(`/${id}`)
    }

    return(
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
                                        <button onClick={() => handleThumbnailClick(video.id)}>{video.available}</button>
                                    </div>
                          </div>
                        )
                    })}   
            </div>
    )
}

export default VideoList;