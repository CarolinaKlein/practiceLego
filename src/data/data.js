import Batman from '../assets/batman.png';
import City from '../assets/city.png';
import Minecraft from '../assets/minecraft.png'
import Thumbnail from '../assets/thumbnail.png'

const data = [
    {   
        "id": "1",
        "className" : "city",
        "firstLogo": City,
        "thumbnail": Thumbnail,
        "available": "Watch Video",
        "sample": "https://www.youtube.com/embed/jXZAbnn1kTU" 
    },
    {   
        "id": "2",
        "className" : "minecraft",
        "firstLogo": Minecraft,
        "thumbnail": Thumbnail,
        "available": "Unlock 12/6",
        "sample": "https://www.youtube.com/embed/jXZAbnn1kTU" 
    },
    {
        "id": "3",
        "className" : "batman",
        "firstLogo": Batman,
        "thumbnail": Thumbnail,
        "available": "Unlock 12/13",
        "sample": "https://www.youtube.com/embed/jXZAbnn1kTU" 
    }
]

export default data;