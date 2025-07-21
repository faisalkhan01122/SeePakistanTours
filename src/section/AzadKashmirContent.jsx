import { motion } from "framer-motion";
import { useState } from "react";

const AzadKashmirContent = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const districts = [
    "Muzzafarabad",
    "Kotli",
    "Mirpur",
    "Bagh",
    "Bhimber",
    "Sudhnoti",
    "Neelum Valley",
    "Jhelum Valley",
    "Poonch",
    "Haveli",
  ];

  const popularPlaces = [
    "Neelum Valley",
    "Jhelum Valley",
    "Leepa Valley",
    "Ganga Choti",
    "Tolipir",
    "Banjosa Lake",
    "Mangla Dam",
    "Pir Chinasi",
  ];

  const neelumAttractions = [
    { name: "Chitta Katha Lake", elevation: "4,100 m (13,500 ft)" },
    {
      name: "Taobat",
      description: "First village where Krishen Ganga enters Pakistan",
    },
    { name: "Arang Kel", access: "Chair lift + 40 min hike" },
    { name: "Ratti Gali Lake", season: "July-September" },
    { name: "Shounter Valley", feature: "Camping under starry skies" },
    { name: "Keran Village", highlight: "Views across LOC" },
  ];

  const otherAttractions = [
    {
      name: "Leepa Valley",
      elevation: "3,000 m (10,000 ft)",
      feature: "Traditional wooden houses",
    },
    {
      name: "Ganga Choti",
      elevation: "3,044 m (9,987 ft)",
      activity: "Trekking",
    },
    {
      name: "Banjosa Lake",
      type: "Artificial lake",
      setting: "Surrounded by alpine forest",
    },
    {
      name: "Pir Chinasi",
      elevation: "2,900 m (9,500 ft)",
      type: "Mountain shrine",
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
      {/* Introduction Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Visit AJK with the affordable Azad Kashmir Tour Packages 2025
        </motion.h2>

        <motion.p className="text-gray-600 mb-4 leading-relaxed">
          <strong className="text-primary-600">Azad Kashmir Tours</strong> is
          always excited for tourists from Pakistan and abroad when getting a
          chance to visit AJK. Most of the travelers get the Azad Kashmir tours
          package along with Pakistan tour packages.
        </motion.p>

        <motion.p className="text-gray-600 mb-4 leading-relaxed">
          Commonly, known to be AJK, Azad Jammu and Kashmir is in the Northern
          areas of Pakistan. While there are some points from where you can see
          Indian Occupied Kashmir just on another side of the river like Keran
          village. We have a list of adventurous{" "}
          <strong className="text-primary-600">
            Azad Kashmir tours package 2025
          </strong>
          .
        </motion.p>

        <motion.p className="text-gray-600 mb-6 leading-relaxed">
          Moreover, Azad Kashmir has borders with different regions and
          provinces of Pakistan. Like border with Gilgit-Baltistan on North,
          Punjab province on South and Khyber Pakhtunkhwa on East. Furthermore,
          Indian Occupied Kashmir resides on East divided by Line of Control
          (LOC). The total areas in Azad Jammu and Kashmir are 13,297 square
          kilometers (5,134 sq. mi) and a total population of 4,045,366 as per
          the 2017 survey.
        </motion.p>

        <motion.div className="bg-primary-400 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Quick Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-primary-600 font-medium">Area</div>
              <div className="text-gray-700">13,297 km²</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-primary-600 font-medium">Population</div>
              <div className="text-gray-700">4.04 million</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-primary-600 font-medium">
                Drive from Islamabad
              </div>
              <div className="text-gray-700">~3 hours</div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Districts Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Administrative Districts
        </h2>
        <p className="text-gray-600 mb-6">
          Azad Kashmir is divided into ten districts for administration:
        </p>

        <motion.ul
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8"
        >
          {districts.map((district, index) => (
            <motion.li
              key={index}
              variants={listItem}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-3 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
            >
              {district}
            </motion.li>
          ))}
        </motion.ul>
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
            Weather in Azad Kashmir
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
                Weather in Azad Kashmir
              </strong>{" "}
              varies by district. Mirpur and Bhimber districts are warmer in
              summer, while other areas have lower temperatures. Heavy snowfall
              occurs in Sudhnuti, Poonch, Bagh, and Neelum districts in winter.
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
                      Temperature: 15°C to 30°C
                    </div>
                    <div className="text-gray-600 text-sm">
                      Best for sightseeing and outdoor activities
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Most tourists visit Azad Kashmir in summer to see the stunning
                  sites. The weather is pleasant for exploring valleys, lakes,
                  and meadows.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primbg-primary-400 to-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Winter (November-February)
                </h3>
                <div className="flex items-center mb-2">
                  <div className="text-3xl mr-3">❄️</div>
                  <div>
                    <div className="text-gray-700">
                      Temperature: -5°C to 15°C
                    </div>
                    <div className="text-gray-600 text-sm">
                      Heavy snowfall in northern districts
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Winter brings heavy snowfall, especially in Neelum Valley,
                  creating magical winter landscapes perfect for snow lovers and
                  photographers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Beautiful Places Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("places")}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Beautiful Places to Visit in Azad Kashmir
          </h2>
          <motion.div
            animate={{ rotate: expandedSection === "places" ? 180 : 0 }}
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
            height: expandedSection === "places" ? "auto" : 0,
            opacity: expandedSection === "places" ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <p className="text-gray-600 mb-6 leading-relaxed">
              There is a lot of astonishing destinations for travelers to
              explore in Azad Kashmir of Pakistan. Most of the tourist sites
              reside in the Neelum Valley.{" "}
              <strong className="text-primary-600">
                Azad Kashmir Pakistan
              </strong>{" "}
              has many things to offer its wanderers, whether it is lush green
              valleys, dense alpine forests, mighty waterfalls, deep crystal
              clear blue water lakes, lush green meadows, Azad Kashmir has
              everything that visitors want to see.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Popular Destinations
            </h3>
            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8"
            >
              {popularPlaces.map((place, index) => (
                <motion.li
                  key={index}
                  variants={listItem}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-3 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  {place}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Neelum Valley Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("neelum")}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Neelum Valley - The Crown Jewel
          </h2>
          <motion.div
            animate={{ rotate: expandedSection === "neelum" ? 180 : 0 }}
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
            height: expandedSection === "neelum" ? "auto" : 0,
            opacity: expandedSection === "neelum" ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <p className="text-gray-600 mb-4 leading-relaxed">
              On the top of the list, we have the Neelum valley of{" "}
              <strong className="text-primary-600">
                Azad Jammu and Kashmir
              </strong>{" "}
              of Pakistan. This mesmerizing valley lies in between the northern
              areas of Pakistan. This valley is easily accessible starting from
              Islamabad through Muzzafarabad.
            </p>

            <div className="bg-primary-400 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Getting There
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary-600 font-medium">
                    From Islamabad
                  </div>
                  <div className="text-gray-700">~3 hours to Muzaffarabad</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary-600 font-medium">
                    From Muzaffarabad
                  </div>
                  <div className="text-gray-700">Via Athmuqam town</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary-600 font-medium">
                    Unique Feature
                  </div>
                  <div className="text-gray-700">Views across LOC</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Top Attractions in Neelum Valley
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {neelumAttractions.map((attraction, index) => (
                <motion.div
                  key={index}
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
                      Elevation: {attraction.elevation}
                    </div>
                  )}
                  {attraction.description && (
                    <p className="text-gray-600 text-sm">
                      {attraction.description}
                    </p>
                  )}
                  {attraction.access && (
                    <p className="text-gray-600 text-sm">
                      Access: {attraction.access}
                    </p>
                  )}
                  {attraction.season && (
                    <p className="text-gray-600 text-sm">
                      Best season: {attraction.season}
                    </p>
                  )}
                  {attraction.feature && (
                    <p className="text-gray-600 text-sm">
                      Feature: {attraction.feature}
                    </p>
                  )}
                  {attraction.highlight && (
                    <p className="text-gray-600 text-sm">
                      Highlight: {attraction.highlight}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Other Attractions Section */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn}>
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("other")}
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Other Notable Attractions
          </h2>
          <motion.div
            animate={{ rotate: expandedSection === "other" ? 180 : 0 }}
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
            height: expandedSection === "other" ? "auto" : 0,
            opacity: expandedSection === "other" ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherAttractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {attraction.name}
                  </h4>
                  <div className="space-y-2">
                    {attraction.elevation && (
                      <div className="flex items-center text-sm text-gray-600">
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
                    {attraction.type && (
                      <p className="text-gray-600 text-sm">
                        Type: {attraction.type}
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
                    {attraction.setting && (
                      <p className="text-gray-600 text-sm">
                        Setting: {attraction.setting}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary-600  to-primary-500 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Plan Your Adventure</h3>
              <p className="mb-6">
                Azad Kashmir offers amazing landscapes - from meadows and lakes
                to high mountain peaks. These tours are perfect for those who
                want to enjoy nature's serenity while having a smooth traveling
                experience. The region is ideal for mountaineering, camping,
                hiking, trekking, and even rock climbing at various difficulty
                levels.
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

export default AzadKashmirContent;
