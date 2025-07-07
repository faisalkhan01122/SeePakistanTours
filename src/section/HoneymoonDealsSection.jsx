import React from "react";

const HoneymoonDealsSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://seepakistantours.com/wp-content/uploads/2022/11/Cherry-blossom-Hunza-480x300.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md animate-fadeIn">
            💞 Honeymoon Deals
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-light animate-fadeIn delay-200">
            Escape into the breathtaking beauty of Pakistan with our tailor-made
            honeymoon packages. Explore Hunza, Skardu, Swat, and more — where
            romance meets adventure.
          </p>
          <div className="mt-6 animate-fadeIn delay-400">
            <a
              href="/honeymoon-deals"
              className="inline-block px-6 py-3 bg-primary-500 hover:bg-primary-600 text-black font-semibold rounded-full shadow-lg transition"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoneymoonDealsSection;
