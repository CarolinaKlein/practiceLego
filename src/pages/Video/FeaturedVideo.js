import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';


const FeaturedVideo = () => {

    const [videos, setVideos] = useState([]);
    const { videoID } = useParams();

    useEffect(() => {
        fetch("/src/data/data.json")
          .then((res) => res.json())
          .then((videos) => videos.filter((video) => {
            return video.id === videoID;
          }))
          .then((matched) => setVideos(matched[0]));
      }, []);
      
      
    return(
        <div>
            <p>The video and it's details will go here </p>
            {videos && videos.map((video) => (
                <div key={video.id} {...videos}>{video.id[0]}</div>
            ))}
        </div>
    )
}

export default FeaturedVideo;