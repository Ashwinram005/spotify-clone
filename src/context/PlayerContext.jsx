import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext=createContext();

const PlayerContextProvider=(props)=>{
    const audioRef=useRef();
    const seekBg=useRef();
    const seekBar=useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time,setTime]=useState({
        currentTime:{
            seconds:0,
            minutes:0
        },
        totalTime:{
            seconds:0,
            minutes:0
        }
    })

    const play=()=>{
        audioRef.current.play();
        setIsPlaying(true);
    }

    const pause=()=>{
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const contextValue={
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        isPlaying,setIsPlaying,
        time,setTime,
        play,pause
    }

    return (
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;