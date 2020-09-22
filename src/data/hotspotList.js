const hotspotListBatman = 
    {
        hotspotOne : {
            options : [
                {
                 name : "optionOne",
                 destination: "", 
                 hotspotTwo : {
                    options : [{

                    }]
                 }
                },
                {
                name : "option2",
                destination: "", 
                },
                {
                name : "option3",
                destination: "", 
                }
                ]
        }
    }

const hotspotListCity = 
    {
        hotspotOne : {
            options : [
                {
                 name : "opcionOne",
                 destination: "", 
                },
                {
                name : "opcion2",
                destination: "", 
                },
                {
                name : "opcion3",
                destination: "", 
                }
                ]
        }
    }

const hotspotListMinecraft = 
    {
        hotspotOne : {
            options : [
                {
                 name : "optionOne",
                 destination: "", 
                },
                {
                name : "option2",
                destination: "", 
                },
                {
                name : "option3",
                destination: "", 
                }
                ]
        }
    }

const hotspotList = {1 : hotspotListCity, 2 : hotspotListMinecraft, 3 : hotspotListBatman}

export default hotspotList;

// The reason for making hotspotList an object instead of an array, is so that we can index it what ever we want
