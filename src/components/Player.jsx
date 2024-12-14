import { useContext } from "react"
import { assets, songsData } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"
const Player = () => {

  const {seekBar,seekBg,isPlaying,play,pause}=useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img src={songsData[0].image} alt="songimage" className="w-12"/>
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
            <img src={assets.shuffle_icon} alt="shuffleicon" className="w-4 cursor-pointer"/>
            <img src={assets.prev_icon} alt="previcon" className="w-4 cursor-pointer"/>
            {
              isPlaying?
                <img src={assets.pause_icon} alt="pauseicon" className="w-4 cursor-pointer" onClick={pause}/>:
                  <img src={assets.play_icon} alt="playicon" className="w-4 cursor-pointer" onClick={play}/>
            }
            <img src={assets.next_icon} alt="nexticon" className="w-4 cursor-pointer"/>
            <img src={assets.loop_icon} alt="loopicon" className="w-4 cursor-pointer"/>
        </div>
        <div className="flex items-center gap-5">
            <p>1:06</p>
            <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr ref={seekBar} className="h-1 w-0 border-none bg-green-800 rounded-full"/>
            </div>
            <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img src={assets.plays_icon} alt="playsicon" className="w-4"/>
        <img src={assets.mic_icon} alt="micicon" className="w-4"/>
        <img src={assets.queue_icon} alt="queueicon" className="w-4"/>
        <img src={assets.speaker_icon} alt="speakericon" className="w-4"/>
        <img src={assets.volume_icon} alt="volumeicon" className="w-4"/>
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img src={assets.mini_player_icon} alt="miniplayericon" className="w-4"/>
        <img src={assets.zoom_icon} alt="zoomicon" className="w-4"/>
      </div>
    </div>
  )
}

export default Player
