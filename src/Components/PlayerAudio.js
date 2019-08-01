import React from 'react'
import AudioPlayer from 'react-modular-audio-player'

export default function PlayerAudio({src, song, artist}) {

    const audioFiles = [
        {
            src: src,
            Title: song,
            artist: artist
        }
    ]



    return (
        <div className="audio-player-two">
            <AudioPlayer 
            style= {{background:'#ccc'}}
            audioFiles={audioFiles}
            playerWidth="100%"
            iconSize="1.5rem"
            fontSize="1rem"
            sliderClass="invert-blue-grey"
            />
        </div>
    )
}
