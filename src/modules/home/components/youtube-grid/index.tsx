import React from "react"
import Image from "next/image"

interface Video {
  id: string
  thumbnail: string
}

// TODO turn this into api calls
const videos: Video[] = [
  {
    id: "zTjdAzHRAqA",
    thumbnail: "https://img.youtube.com/vi/zTjdAzHRAqA/maxresdefault.jpg",
  },
  {
    id: "lYBg0xyd9sE",
    thumbnail: "https://img.youtube.com/vi/lYBg0xyd9sE/maxresdefault.jpg",
  },
  {
    id: "88aHd-Ii7NM",
    thumbnail: "https://img.youtube.com/vi/88aHd-Ii7NM/maxresdefault.jpg",
  },
  {
    id: "4WKnkkSCsMo",
    thumbnail: "https://img.youtube.com/vi/4WKnkkSCsMo/maxresdefault.jpg",
  },
  {
    id: "bj89tVVvyZ4",
    thumbnail: "https://img.youtube.com/vi/bj89tVVvyZ4/maxresdefault.jpg",
  },
  {
    id: "50WelnH69ME",
    thumbnail: "https://img.youtube.com/vi/50WelnH69ME/maxresdefault.jpg",
  },
]

const YouTubeVideoGrid: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="grid grid-cols-3 gap-0">
        {videos.map((video) => (
          <div key={video.id} className="aspect-video relative">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src={video.thumbnail}
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default YouTubeVideoGrid
