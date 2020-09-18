import React from 'react';
import {useParams} from 'react-router';
import { useHistory } from 'react-router-dom';
import data from '../../data/data'
import Logo from '../../assets/logo.png'

function VideoNavbar(){

    const { videoID } = useParams();

    const history = useHistory()

    let handleClick = (id) => {
        history.push(`/${id}`)
    }
    
    return(
        
        <div>
            <div>
                <img src={Logo}/>
            </div>
            <div>
                { data
                .filter((item) => item.id !== videoID)
                .map((item) => <img src={item.firstLogo} key={item.id} onClick={() => handleClick(item.id)} /> )
                }
            </div>
        </div>
    ) 
}

export default VideoNavbar;


// maps need keys bc react wants to keep track of every item on the list, so that in case the list is updated, 
//react will update the UI

// the reason why we have assigned an ".id" to "item" for the key on the map function, is because keys are objects, 
//and objects don't make good keys