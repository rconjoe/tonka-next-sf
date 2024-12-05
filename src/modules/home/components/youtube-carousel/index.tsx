"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "@medusajs/icons"

const YouTubeCarousel = () => {
  const videos = [
    "https://www.youtube.com/embed/50WelnH69ME", // Replace with your video URLs
    "https://www.youtube.com/embed/88aHd-Ii7NM",
    "https://www.youtube.com/embed/lYBg0xyd9sE",
    "https://www.youtube.com/embed/7DZnm60bfl0",
    "https://www.youtube.com/embed/Eca6eVs2YcA",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-gray-800 rounded-lg">
      <div className="flex items-center justify-center h-64">
        <iframe
          className="w-full h-full"
          src={videos[currentIndex]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-gray-700 rounded-full p-2"
        onClick={goToPrevious}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-gray-700 rounded-full p-2"
        onClick={goToNext}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default YouTubeCarousel
