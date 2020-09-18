import React from 'react';
import { useParams } from 'react-router';
import VideoNavbar from '../../components/VideoNavbar/VideoNavbar'
import videos from '../../data/data'


const FeaturedVideo = () => {

    const { videoID } = useParams();

    const individualVideo = videos.find((video) => video.id === videoID)
    
    console.log(individualVideo)

    return(
        <>
         <VideoNavbar />
        <div>
            <p>The video and it's details will go here </p>
            <img src={individualVideo.firstLogo}/>
            <p>{individualVideo.id}</p>
            <iframe width='560' height='315' src={individualVideo.sample} frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
        </div>
        </>
       
    )
}

export default FeaturedVideo;