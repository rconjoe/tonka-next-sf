import YouTubeShortsCarousel from "../shorts-carousel"
import YouTubeVideoGrid from "../youtube-grid"

const shorts = ["9F77rLr0aqU", "uveg2OAxmBk"]

const Hero = () => {
  return (
    <div className="relative w-full h-full bg-gray-900 text-white flex items-center justify-center">
      {/* Show for mobile */}
      <div className="block md:hidden w-full h-full">
        <YouTubeShortsCarousel shorts={shorts} />
      </div>

      {/* Show for desktop */}
      <div className="hidden md:block w-full h-full">
        <YouTubeVideoGrid />
      </div>
    </div>
  )
}

export default Hero

// <div className="text-white flex items-center justify-center">
//   <YouTubeShortsCarousel shorts={shorts} />
// </div>
