import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// import VideoList from '../../components/VideoList';

// const vivdeoList = data.videos

function Video(){

    // const [individualVideo, setIndividualVideo] = useState({})
    // let {videoID} = useParams();

    return(
        <div>
            <Navbar/>
                <div>
                    The video will be here
                </div>
            <Footer/>
        </div>
    )
}

export default Video;