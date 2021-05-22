import Image1 from '../assets/Image1.png';
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";


const dataToDisplay = [
    
    {
        img: Image1,
        categoryName: 'capsules',
        fieldsToDisplay: ['type', 'status']
    },
    {
        img: Image2,
        categoryName: 'crew',
        fieldsToDisplay: ['name', 'agency']
    },
    {
        img: Image3,
        categoryName: 'rockets',
        fieldsToDisplay: ['name', 'first_flight']
    },
    {
        img: Image4,
        categoryName: 'starlink',
        fieldsToDisplay: ['version', 'id']
    }
]

export default dataToDisplay;