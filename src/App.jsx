import { useContext } from "react"
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/sidebar"
import { PlayerContext } from "./context/PlayerContext"

const App = () => {
  const {audioRef,track}=useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio preload="auto" src={track.file} ref={audioRef}></audio>
    </div>
  )
}

export default App
