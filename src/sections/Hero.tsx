import img from "../assets/images/hero.png"
import GlassContainer from "../components/common/GlassContainer"

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="top-container w-[100%] h-[50%]">
        Hey there
      </div>
      <div className="bottom-container w-[100%] h-[50%] flex flex-row">
        <div className="left-container h-[100%]">
          <GlassContainer />
        </div>
        <div className="center-container h-[100%] flex items-end justify-center">
          <img className="w-[300px] h-[450px] object-cover" src={img} alt="" />
        </div>
        <div className="right-container h-[100%]"></div>
      </div>
    </div>
  )
}

export default Hero