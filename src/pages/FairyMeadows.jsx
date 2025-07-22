import { motion } from "framer-motion";
import { useState } from "react";

const FairyMeadowsContent = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const tourPackages = [
    {
      title: "Fairy Meadows & Hunza Valley Tour (BY AIR)",
      duration: "7 Days 6 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Hunza-by-air-7-Days-tour-580x240.jpg",
    },
    {
      title: "Fairy Meadows, Hunza & Skardu Valley Tour (BY AIR)",
      duration: "10 Days 9 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Skardu-Hunza-by-air-9-Days-tour-580x240.jpg",
    },
    {
      title: "Fairy Meadows, Skardu Valley & Hunza Valley Tour",
      duration: "12 Days 11 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Skardu-Hunza-12-Days-tour-580x240.jpg",
    },
    {
      title: "Fairy Meadows, Skardu Valley & Hunza Valley Tour",
      duration: "15 Day 14 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Skardu-Hunza-15-Days-tour-580x240.jpg",
    },
    {
      title: "Fairy Meadows, Naran & Shogran Summer Tour",
      duration: "6 Days 5 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Naran-Shogran-6-days-tour-580x240.jpg",
    },
    {
      title: "Fairy Meadows, Hunza & Khunjerab Pass Tour",
      duration: "8 Days 7 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/03/Fairy-meadows-Hunza-8-Days-Tour-580x240.jpg",
    },
  ];

  const attractions = [
    {
      name: "Fairy Meadows Village",
      description:
        "The main camping area with breathtaking views of Nanga Parbat",
    },
    {
      name: "Rama Lake",
      feature: "High-altitude lake surrounded by snow-capped peaks",
    },
    {
      name: "Beyal Camp",
      elevation: "3,700 m (12,100 ft)",
      activity: "Trekking base camp",
    },
    {
      name: "Nanga Parbat Viewpoint",
      highlight: "Closest view of the 'Killer Mountain'",
    },
    {
      name: "Nanga Parbat Base Camp",
      difficulty: "Challenging trek",
      elevation: "4,000 m (13,100 ft)",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative h-[100vh] overflow-hidden">
        <img
          src="https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Fairy-Meadows.jpg"
          alt="Fairy Meadows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Fairy Meadows tour 2025
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Explore The Beauty Of The Mighty Nanga Parbat In Fairy Meadows
              Tours 2025
            </p>
          </motion.div>
        </div>
      </div>
      {/* Introduction Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Discover The Beauty Of The Mighty Nanga Parbat In Fairy Meadows Tours
          2025
        </motion.h2>

        <motion.p className="text-gray-600 mb-4 leading-relaxed">
          If heaven can be found on Earth, then there is nothing wrong to say
          about{" "}
          <strong className="text-primary-600">Fairy Meadows Pakistan</strong>,
          A Paradise for travelers on earth. Fairy Meadows tour is a destination
          in the shadows of beautiful might Nanga Parbat (8,126m), formally
          known as The Killer Mountain.
        </motion.p>

        <motion.p className="text-gray-600 mb-6 leading-relaxed">
          In our{" "}
          <strong className="text-primary-600">
            Zufta Tarvel Packages 2025
          </strong>
          , we offer some of the most mesmerizing Fairy Meadows tour packages to
          explore this natural wonder. The journey to Fairy Meadows is as
          thrilling as the destination itself, featuring what's often called the
          most dangerous road in the world.
        </motion.p>

        <motion.div className="bg-primary-400 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quick Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-primary-600 font-medium">Elevation</div>
              <div className="text-gray-700">3,300 m (10,800 ft)</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-primary-600 font-medium">Best Season</div>
              <div className="text-gray-700">May to September</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-primary-600 font-medium">
                Distance from Islamabad
              </div>
              <div className="text-gray-700">~12 hours</div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Tour Packages Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Fairy Meadows Tour Packages 2025
        </h2>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tourPackages.map((tour, index) => (
            <motion.div
              key={index}
              variants={listItem}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-primary-600 font-medium mb-2">
                  {tour.duration}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {tour.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Weather Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("weather")}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Fairy Meadows Weather & Temperature
          </h2>
          <motion.div
            animate={{ rotate: expandedSection === "weather" ? 180 : 0 }}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expandedSection === "weather" ? "auto" : 0,
            opacity: expandedSection === "weather" ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong className="text-primary-600">
                Fairy Meadows Pakistan weather
              </strong>{" "}
              remains cold with pleasant views in the Summer season. However, in
              winters Fairy Meadows is covered in Snow and difficult to reach.
              The road to Fairy Meadows is considered one of the most dangerous
              in the world, requiring an adventurous and thrilling Jeep ride
              followed by 3-4 hours of trekking through dense alpine forest.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-primbg-primary-400 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Summer (May-September)
                </h3>
                <div className="flex items-center mb-2">
                  <div className="text-3xl mr-3">☀️</div>
                  <div>
                    <div className="text-gray-700">
                      Temperature: 10°C to 25°C
                    </div>
                    <div className="text-gray-600 text-sm">
                      Ideal for trekking and camping
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  The meadows are lush green with wildflowers, offering perfect
                  conditions for hiking and photography. Daytime temperatures
                  are pleasant, while nights can be chilly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primbg-primary-400 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Winter (October-April)
                </h3>
                <div className="flex items-center mb-2">
                  <div className="text-3xl mr-3">❄️</div>
                  <div>
                    <div className="text-gray-700">
                      Temperature: -10°C to 15°C
                    </div>
                    <div className="text-gray-600 text-sm">
                      Heavy snowfall, access difficult
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  The area is blanketed in snow, creating a magical winter
                  landscape. Access is limited due to road conditions, making it
                  primarily a destination for experienced winter trekkers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Attractions Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("attractions")}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Top Attractions in Fairy Meadows
          </h2>
          <motion.div
            animate={{ rotate: expandedSection === "attractions" ? 180 : 0 }}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expandedSection === "attractions" ? "auto" : 0,
            opacity: expandedSection === "attractions" ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fairy Meadows tours are mostly famous for trekkers and hikers, but
              offer breathtaking experiences for all nature lovers. Here are the
              must-visit spots:
            </p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {attractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  variants={listItem}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {attraction.name}
                  </h4>
                  {attraction.elevation && (
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      {attraction.elevation}
                    </div>
                  )}
                  {attraction.description && (
                    <p className="text-gray-600 text-sm">
                      {attraction.description}
                    </p>
                  )}
                  {attraction.feature && (
                    <p className="text-gray-600 text-sm">
                      Feature: {attraction.feature}
                    </p>
                  )}
                  {attraction.activity && (
                    <p className="text-gray-600 text-sm">
                      Activity: {attraction.activity}
                    </p>
                  )}
                  {attraction.highlight && (
                    <p className="text-gray-600 text-sm">
                      Highlight: {attraction.highlight}
                    </p>
                  )}
                  {attraction.difficulty && (
                    <p className="text-gray-600 text-sm">
                      Difficulty: {attraction.difficulty}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Adventure Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn}>
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("adventure")}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Adventure Activities
          </h2>
          <motion.div
            animate={{ rotate: expandedSection === "adventure" ? 180 : 0 }}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expandedSection === "adventure" ? "auto" : 0,
            opacity: expandedSection === "adventure" ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Trekking & Hiking
                </h3>
                <p className="text-gray-600 mb-4">
                  Fairy Meadows offers some of the most spectacular trekking
                  routes in Pakistan:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Fairy Meadows to Beyal Camp (3-4 hours)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Beyal Camp to Nanga Parbat Base Camp (5-6 hours)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Fairy Meadows to Rama Lake (full day trek)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Photography
                </h3>
                <p className="text-gray-600 mb-4">
                  Fairy Meadows is a photographer's paradise with endless
                  opportunities:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Sunrise and sunset over Nanga Parbat
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">Starry night skies</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Alpine flora and fauna
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-500 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Plan Your Adventure</h3>
              <p className="mb-6">
                Fairy Meadows offers amazing landscapes - from lush meadows to
                views of the mighty Nanga Parbat. These tours are perfect for
                those who want to enjoy nature's serenity while having an
                adventurous experience. The region is ideal for mountaineering,
                camping, hiking, and trekking at various difficulty levels.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-400 transition-colors"
              >
                Explore Tour Packages
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FairyMeadowsContent;
