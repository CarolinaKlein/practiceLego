import React from 'react'

function HotspotPath(props){

    // the following line is "importing"(retrieving) the options from a specific hotspot, from a specific video. from a const in FeaturedVideo.js via videoID
    const hotspotList = props.hotspotList


    return(
        <>
            {hotspotList.map((option) => {
                return (
                <div>{option.name}</div>
                )
            })}
        </>
    )
}

export default HotspotPath;

// This will be imported into the Featured Video page like so:
// <HotspotPath hotspot={currentHotspote} totalHotspot={hotspotList.length} />

// if you export with "default", you can give it the name you want, but it creates more problems

// We want to render jsx 

// map is js and doesn't have anything to do with jsx, it takes an array and it returns another one

// the "hotspotList" will come from the component from which we are importing this component

// props is an object with all the options that are passed on to the featured video 

//we are importing an array from "featuredVideo.js" ==> const hotspotList = hotspotListAll[videoID].hotspotOne.options

// "const hotspotList = props.hotspotList" <- magic of react
// This relates to state management
// Without props, a function without arguments, 