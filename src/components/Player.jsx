import { assets, songsData } from "../assets/assets"
const Player = () => {
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
            <img src={assets.play_icon} alt="playicon" className="w-4 cursor-pointer"/>
            <img src={assets.next_icon} alt="nexticon" className="w-4 cursor-pointer"/>
            <img src={assets.loop_icon} alt="loopicon" className="w-4 cursor-pointer"/>
        </div>
        <div className="flex items-center gap-5">
            <p>1:06</p>
            <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                <hr className="h-1 border-none bg-green-800 rounded-full"/>
            </div>
            <p>3:20</p>
        </div>
      </div>
    </div>
  )
}

export default Player
