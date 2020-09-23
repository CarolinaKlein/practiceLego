import React, { useState } from 'react';
import {useParams} from 'react-router';
import { useHistory } from 'react-router-dom';
import data from '../../data/data'
import Logo from '../../assets/logo.png'
import './Navbar.scss'

function Navbar(){

    const [expanded, setExpanded] = useState(true)

    const { videoID } = useParams();

    const history = useHistory()

    const eventHandler = () => history.push("/")

    const handleNavLogoClick = (id) => {
        history.push(`/${id}`)
    }

    const expandBurgerMenu = () => {
        setExpanded(true)
      }
    
    return(
        <>
        {expanded === true ? (

        <div>
            <div className="nick-navbar" onClick={expandBurgerMenu}>
                <div className="burger-line"></div>
            </div>
        </div>
        
        
        ) : (
           
            <div className="nick-navbar">
            <div>
                <img onClick={eventHandler} src={Logo}/>
            </div>
            <div className="nick-menu-items">
                { data
                .filter((item) => item.id !== videoID)
                .map((item) => <img className={item.className} src={item.firstLogo} key={item.id} onClick={() => handleNavLogoClick(item.id)} /> )
                }
            </div>
        </div>
       
        )
}       
        </>
    ) 
}

export default Navbar;


// maps need keys bc react wants to keep track of every item on the list, so that in case the list is updated, 
//react will update the UI

// the reason why we have assigned an ".id" to "item" for the key on the map function, is because keys are objects, 
//and objects don't make good keys

// on the map function, we are using syntaxis sugar by removing "item", and putting "className, firstLogo, and id" between curlies
// more info on:  https://javascript.info/destructuring-assignment#object-destructuring