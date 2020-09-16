import React from 'react'
import { useHistory } from 'react-router-dom';
import videos from '../../data/data'

function VideoList(){

    const history = useHistory()
    
    let handleThumbnailClick = (id) => {
        history.push(`/${id}`)
    }

    //What I had before Guille's help was the exact same thing, but without passing the parameter. 
    //without defining the "id" from the push as the same id as from the function, the function didn't know what to do

    return(
        <div className="columns is-centered">
                    {videos.map((video) => {
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
                                        {/* before, the onClick function only had one thing in between the brackets, 
                                        and that was the "handleThumbnailClick. But this click is a function, so we needed
                                        to add the anonymous function, and we also needed to pass the mapped element " */}
                                    </div>
                          </div>
                        )
                    })}   
            </div>
    )
}

export default VideoList;