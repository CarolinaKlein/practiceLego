import React from 'react'

function HotspotPath({hotspot, totalHotspots}){

    const currentHotspot = () => {

        let hotspotItineration = []

        for (let i=0; i <= totalHotspots -1; i ++){
            
            // the logic that I am missing
        }
        return hotspotItineration
    }

    return (
        <div>
            {currentHotspot()}
        </div>
    )
}

export default HotspotPath;

// This will be imported into the Featured Video page like so:
// <HotspotPath hotspot={currentHotspote} totalHotspot={hotspotList.length} />