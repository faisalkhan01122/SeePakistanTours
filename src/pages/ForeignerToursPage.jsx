import { motion } from "framer-motion";
import { useState } from "react";

const ForeignerToursPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const foreignerTours = [
    {
      id: 1,
      title: "Swat, Kalam, Malam Jabba & Islamabad Tour",
      duration: "7 Days 7 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/12/Swat-Kalam-Islamabad-7-Days-Tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/foreigner-tours/swat-kalam-malam-jabba-and-islamabad-7-days-7-nights-tour/",
    },
    {
      id: 2,
      title: "Hindu Kush & Karakoram Adventure Tour",
      duration: "14 Days 14 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/03/Hindu-Kush-Karakoram-14-Days-Tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/foreigner-tours/pakistan-hindu-kush-adventure/",
    },
    {
      id: 3,
      title: "Karakoram, Hunza and Skardu Valley Tour",
      duration: "12 Days 12 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/03/Karakoram-Hunza-and-Skardu-Valley-12-Days-Tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/foreigner-tours/karakoram-hunza-skardu-tour/",
    },
  ];

  const groupTours = [
    {
      id: 1,
      title: "Hike Pakistan",
      duration: "Tour Date: Expired",
      image:
        "https://seepakistantours.com/wp-content/uploads/2023/01/SPT-Group-Tour-Page-Design-Slices_03-580x240.jpg",
      link: "https://seepakistantours.com/group-tour/hike-pakistan/",
    },
  ];

  const popularPlaces = [
    "Naran Kaghan Valley",
    "Skardu Valley",
    "Khunjrab Border",
    "Hunza Valley",
    "Swat Valley",
    "Azad Kashmir",
    "Neelum Valley",
    "Badshahi Mosque",
    "Wahga Border",
    "Karakoram",
    "Gawadar Port",
    "Mazar-e-Quaid",
    "Makli",
    "Murree",
    "Islamabad the beautiful",
  ];

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
    initial: {
      y: 0,
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  };

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] overflow-hidden">
        <img
          src="https://seepakistantours.com/wp-content/uploads/2022/12/Foreigner-Tours-1.jpg"
          alt="Foreigner Tours"
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
              Foreigner Tours 2025
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Discover Pakistan's breathtaking landscapes and rich culture
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Foreigner Tours Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Foreigner Tours 2025
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foreignerTours.map((tour) => (
              <motion.div
                key={tour.id}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(tour.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <a href={tour.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform:
                          hoveredCard === tour.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                    <div className="absolute bottom-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {tour.title}
                    </h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredCard === tour.id ? "100%" : "0%",
                      }}
                      className="h-1 bg-primary-400 mt-2"
                    ></motion.div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Group Tours Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Group Tours & Trips 2025-26
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupTours.map((tour) => (
              <motion.div
                key={tour.id}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(tour.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <a href={tour.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform:
                          hoveredCard === tour.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                    <div className="absolute bottom-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {tour.title}
                    </h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredCard === tour.id ? "100%" : "0%",
                      }}
                      className="h-1 bg-primary-400 mt-2"
                    ></motion.div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Exciting Pakistan Tour Packages 2025 For Foreign Tourists
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Being one of the best tour operators in Pakistan, See Pakistan
                Tours offers many adventurous Pakistan tour packages 2025 for
                foreign tourists visiting Pakistan.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                We have pre-planned foreigner tours in Pakistan tour packages
                specifically designed for international visitors. In 2018,
                around 1.9 million foreign travelers visited Pakistan and
                labeled it as one of the{" "}
                <strong className="text-primary-600">
                  Safest Countries in the World
                </strong>
                .
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                These Pakistan tour packages for foreigners cover almost every
                famous place in Northern Pakistan. Travelers can explore the
                three highest mountain ranges - Himalaya, Hindukush, and
                Karakoram. Moreover, they can experience the rich culture,
                traditions, and history of Northern Pakistan.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Unique Experiences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-prim400bg-primary-400 text-2xl">
                        🏔️
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Mountain Ranges
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Explore the world's highest peaks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-prim400bg-primary-400 text-2xl">
                        🎎
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Cultural Diversity
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Experience unique traditions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-prim400bg-primary-400 text-2xl">
                        🏕️
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Adventure Activities
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Trekking, jeep safaris & more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-prim400bg-primary-400 text-2xl">
                        🕌
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Historical Sites
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Ancient civilizations & monuments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Best Places Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-16"
            >
              <div
                className="cursor-pointer flex justify-between items-center mb-4"
                onClick={() =>
                  setExpandedSection(
                    expandedSection === "places" ? null : "places"
                  )
                }
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  Best Places To Visit For Foreign Tourists in 2025
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
                <div className="pt-2">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Following are some of the most visited historical and
                    beautiful tourist places in Pakistan included in our{" "}
                    <a
                      href="https://seepakistantours.com"
                      className="text-primary-600 hover:underline"
                    >
                      Pakistan Tour Packages 2025
                    </a>
                    .
                  </p>

                  <motion.ul
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8"
                  >
                    {popularPlaces.map((place, index) => (
                      <motion.li
                        key={index}
                        variants={listItem}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        {place}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Review Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            >
              <a
                href="https://www.facebook.com/pg/SeePakistanTours/reviews/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://seepakistantours.com/wp-content/uploads/2019/08/SPT-Facebook-Review-Graphic-Innerpage-2.jpg"
                  alt="Facebook Reviews"
                  className="w-full h-auto"
                />
              </a>
            </motion.div>

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-primary-600 text-white p-4">
                <h3 className="text-xl font-bold">Tour Summary</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-medium">4.5/5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Based on</span>
                  <span className="font-medium">685 reviews</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">7-14 Days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Starting From</span>
                  <span className="font-medium text-primary-600">
                    PKR 65,000
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-medium text-primary-400">
                    Available
                  </span>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <button className="w-full bg-primary-600 hover:bg-primary-400 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Custom Tour Inquiry
              </h3>
              <p className="text-gray-600 mb-4">
                Need a personalized itinerary? Contact us!
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim400bg-primary-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim400bg-primary-400"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim400bg-primary-400"
                />
                <textarea
                  placeholder="Your Tour Requirements"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim400bg-primary-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 text-white p-8 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready for Your Pakistani Adventure?
              </h3>
              <p className="mb-6 text-lg">
                Experience the wonders of Pakistan with our specially designed
                foreigner tours. From majestic mountains to vibrant cultures,
                create memories that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="get-a-quote"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-800 transition-colors text-lg"
                >
                  Book Your Tour Now
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors text-lg"
                >
                  Get More Information
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ForeignerToursPage;
