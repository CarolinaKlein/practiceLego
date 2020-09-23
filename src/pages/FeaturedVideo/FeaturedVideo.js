import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { useParams } from 'react-router';
import videos from '../../data/data'
import Sample from '../../assets/video.mp4'
import './FeaturedVideo.scss'
import '../../components/HotspotPath/HotspotPath'
import HotspotPath from '../../components/HotspotPath/HotspotPath';
import hotspotListAll from '../../data/hotspotList'

const FeaturedVideo = () => {

    const [hotspotReached, setHotspotReached] = useState(false)

    const [currentVideo, setCurrentVideo] = useState(Sample)

    const { videoID } = useParams();

    const individualVideo = videos.find((video) => video.id === videoID)

    const hotspotList = hotspotListAll[videoID].hotspotOne.options // this will take us to the first layer in the hotspot list data file

    function onProgressVideo({playedSeconds}){
        // { played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 } <--- From the documentation
        // console.log(playedSeconds)

        if (playedSeconds > 5) setHotspotReached(true);
    }

    function updateVideoSource(newSource){

        setCurrentVideo(newSource);
        setHotspotReached(false); 
        
    }

    return(
        <>
        <div>
            <p>The video and it's details will go here </p>
            <img src={individualVideo.firstLogo}/>
            <p>{individualVideo.id}</p>
            {/* <iframe width='560' height='315' src={individualVideo.sample} frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe> */}
        </div>
        <div className="video-theater-view">
        <ReactPlayer 
            url={currentVideo} 
            playing={!hotspotReached}  // set to "true" while the hotspot isn't reached (the default is false (aka paused), hence the negation)
            onProgress={onProgressVideo}

        // height="800px"
        // width="500px" 
        />
        { 
            hotspotReached ? 

          (  <div className="parent-superposition">
                <HotspotPath hotspotList={hotspotList} onClickHotspot={updateVideoSource} />
            </div>) :

            (
             <>
            </>
            )
        
        }

        </div>
        </>
       
    )
}

export default FeaturedVideo;

// " <HotspotPath hotspotList={hotspotList}/>" 
// The first hotspotList is a prop linked to the prop objects in the hotspotPath component
// the first hotspotList is the name of the key
// and the second hotspotList is the const aka (local variable), 

// callback props: function that react player will call from inside. The value inside the curlies will be a 
// function. 
