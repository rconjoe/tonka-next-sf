import YouTubeShortsCarousel from "../shorts-carousel"

const shorts = ["9F77rLr0aqU", "uveg2OAxmBk"]

const Hero = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <YouTubeShortsCarousel shorts={shorts} />
    </div>
  )
}

export default Hero
