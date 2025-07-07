import img from "../assets/images/hero.png"
import GlassContainer from "../components/common/GlassContainer"
import HeroBanner from "../components/HeroBanner"

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="top-container w-screen h-[50%] flex items-center justify-center">
        <HeroBanner />
      </div>
      <div className="bottom-container w-screen h-[65%] flex flex-row">
        <div className="left-container h-[100%] w-[30%] flex justify-center relative">
          <GlassContainer className="absolute right-0 top-[60px] w-[300px] h-[200px]" />
        </div>
        <div className="center-container w-[40%] h-[100%] flex items-end justify-center">
          <img className="w-[300px] h-[450px] object-cover" src={img} alt="" />
        </div>
        <div className="right-container h-[100%] w-[30%] flex justify-center relative">
          <GlassContainer className="absolute left-0 top-[140px] w-[300px] h-[200px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero