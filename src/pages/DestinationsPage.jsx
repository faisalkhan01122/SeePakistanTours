import React from 'react'
import BestDestinations from '../section/BestDestinations'

const DestinationsPage = () => {
  return (
    <div>
      <div className="relative w-full h-[100vh] overflow-hidden">
  <img
    src="https://seepakistantours.com/wp-content/uploads/2022/04/Destinations-Main-Banner.jpg"
    alt="Destinations"
    className="object-cover w-full h-full"
  />
  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex flex-col justify-center items-start px-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
      Explore Top Destinations in Pakistan
    </h1>
    <p className="text-lg md:text-xl text-white/90 max-w-xl">
      Discover breathtaking landscapes, majestic valleys, and hidden gems across Pakistan’s northern beauty in 2025.
    </p>
    <a
      href="#destinations"
      className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
    >
      View Destinations
    </a>
  </div> */}
</div>

      <BestDestinations/>
    </div>
  )
}

export default DestinationsPage