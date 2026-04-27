import './Gallery.css';
import { useState } from 'react';

const images = [
    {
        id: 0,
        url: 'https://imgs.search.brave.com/tO0E7N9XRkoPcdlk8al5ZlcOMU8pYdhms6enPA2W2ak/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYy/NTEyODYzMi9waG90/by9tb3N0LWNvbW1v/bi1hbGxlcmd5LWZv/b2Qtc2hvdC1mcm9t/LWFib3ZlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz12YmJr/TlZScEh2LVg0c0lL/SnphSzF5WVJDbXpF/LUNnbnVXRTk4d2xO/X3ZVPQ',
        description: 'A delicious meal including giant prawns?',
    },
    {
        id: 1,
        url: 'https://imgs.search.brave.com/Xi3RmWrCaFSQLCB81pHaBo3s5bNnP7qwc7VMb1rGO0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/MDQ3MTMyNS9waG90/by9pc2FuLWZvb2Qt/b2YtdGhhaWxhbmQt/dGhhdC1oYXMtYmVl/bi13aWRlbHktcG9w/dWxhci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9SXR4SlNm/N1JjR3BibzNaLUdr/SFVsR0pNdUs4Yk9Y/VGoxcXdzV1Q0Q1ll/WT0',
        description: 'A meal that involves chicen, and maybe a boiled egg?',
    },
    {
        id: 2,
        url: 'https://imgs.search.brave.com/J2xEY2EKBZTj25FF5m2KB1pPKcBV3e9MfAC2ogSTh2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MTI5NDc5NS9waG90/by9zcGljeS10aGFp/LWZyaWVkLXBvcmsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTFYRWMzSXRHSVFM/ZjFpeFVGVnVOS0Fv/d1JhNHNSRk0zUlRG/ODRBcWQ2VkE9',
        description: 'Chicken and broccoli?',
    },
    {
        id: 3,
        url: 'https://imgs.search.brave.com/OGzDFNbaYSPFg4W7vbXpDbay6P1RECfEPiDO6c30bEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MzA0MTMyMC9waG90/by9ib3dsLXdpdGgt/aGVhbHRoeS1mb29k/LWZyZXNoLXZlZ2V0/YWJsZXMtYmVlZi1h/bmQtcmljZS1pbi1h/LWJpZy1wbGF0ZS1z/dW5ueS1kYXktc2Vy/dmluZy1hLW1lYWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVER1F2b0RmZkhp/azBHNzBxR0kycTYy/WTFIVVBYQ1NmRE9W/aGk0LVJZRnM9',
        description: 'rice and broccoli?',
    },
    {
        id: 4,
        url: 'https://imgs.search.brave.com/Y_TBsgioDZkV3GlDTd2Bn3W-22eqVxPT7FvuZN1UY0g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg3/Njc2Njg3L3Bob3Rv/L2ZyZXNoLWZvb2Qt/aW4tZ2FyYmFnZS1j/YW4tdG8taWxsdXN0/cmF0ZS13YXN0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/RXV4YzBnR2hhbEN6/U0o5aU9TZDZrTllY/NXZ6Q0N6Wm12M1Ny/Mzl4RDJ0az0',
        description: 'Milk, egg carton, lettuce, banana, ham, tomato',
    },
];

function Gallery() {
    const [index, setIndex] = useState(0);
    function nextOnClick() {
        if (index == images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    function prevOnClick() {
        if (index == 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    }
    return (
        <div>
            <div className="gallery-container">
                <button
                    className="control-button"
                    onClick={prevOnClick}
                    
                >
                    Previous
                </button>
                <img className="galleryImage" src={images[index].url} />
                <button
                    className="control-button"
                    onClick={() => nextOnClick()}
                    
                >
                    Next
                </button>
            </div>

            <p className="galleryDescription">{images[index].description}</p>
        </div>
    );
}

export default Gallery;
