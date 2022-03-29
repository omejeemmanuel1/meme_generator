import React, { useEffect } from "react";
import { useState } from "react";

export default function Meme() {

    // const [memeImage, setMemeImage] = useState("https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/72_4.webp");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))

    }, [])
    
    function getMeImage() {
        const randomNumber = Math.floor(Math.random() *  allMemes.length);
        const url = allMemes[randomNumber].url
        setMeme( prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
                }
             })
    }

        function handleChange(event) {
            const {name, value} = event.target
            setMeme( prevMeme => ({
                ...prevMeme,
                    [name] : value
            }))
        }
    return (
        <main>
            <div className="form">
                <input 
                        type="text" 
                        className="form--input"
                        placeholder="Top text"
                        name = "topText"
                        value={meme.topText}
                        onChange={handleChange}
                />
                <input 
                        type="text" 
                        className="form--input" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                />
                <button 
                className="form--button" 
                onClick={getMeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className="meme" >
                <img 
                src={meme.randomImage} 
                className="meme-image" 
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
          
        </main>
    )
}