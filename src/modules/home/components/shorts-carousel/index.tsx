"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "@medusajs/icons"

const YouTubeShortsCarousel = ({ shorts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shorts.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === shorts.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative w-full max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden">
      {/* Video Display */}
      <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${shorts[currentIndex]}`}
          title={`YouTube Short ${currentIndex + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Navigation Buttons */}
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

export default YouTubeShortsCarousel
