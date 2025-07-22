import { motion } from "framer-motion";
import { useState } from "react";
import OneDayToursContent from "../section/OneDayToursContent";

const OneDayTourPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const tours = [
    {
      id: 1,
      title: "Murree Hills, Patriata and Islamabad Tour",
      duration: "1 Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/12/Murree-Islamabad-1-day-tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/1-day-tour/murree-hills-patriata-and-islamabad/",
    },
    {
      id: 2,
      title: "Taxila Museum and Khanpur Dam Tour",
      duration: "1 Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/12/Taxila-Khanpur-1-day-tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/1-day-tour/taxila-museum-and-khanpur-dam/",
    },
    {
      id: 3,
      title: "Khewra Salt Mines and Katas Raj Temple Tour",
      duration: "1 Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/12/Khewra-salt-mine-Katas-Raj-1-Day-tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/1-day-tour/khewra-salt-mines-and-katas-raj-temple/",
    },
    {
      id: 4,
      title: "Pakistan Monument, Lok Virsa & Margalla Hills Tour",
      duration: "1 Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/12/Islamabad-city-1-day-tour-1-580x240.jpg",
      link: "https://seepakistantours.com/destination/1-day-tour/islamabad-city/",
    },
    {
      id: 5,
      title: "Murree, Nathia Gali and Ayubia Tour",
      duration: "1 Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/12/Murree-1-day-tour-580x240.jpg",
      link: "https://seepakistantours.com/destination/1-day-tour/murree-nathia-gali-and-ayubia/",
    },
  ];

  const popularTours = [
    "Murree Hills, Patriata & Islamabad Tour",
    "Taxila Museum & Khanpur Dam Tour",
    "Khewra Salt Mines & Katas Raj Temple Tour",
    "Pakistan Monument, Lok Virsa & Margalla Hills Tour",
    "Murree, Nathia Gali & Ayubia Tour",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] overflow-hidden">
        <img
          src="https://seepakistantours.com/wp-content/uploads/2022/12/1-Day.jpg"
          alt="1 Day Tours"
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
              1 Day Tours From Islamabad 2025
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Quick escapes to Pakistan's most beautiful destinations
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Experience Pakistan in a Day
              </h2>
              <p className="text-gray-600 mb-4">
                Are you fond of 1 day tours from Islamabad? Any day trip will
                not only help you save time but money as well. In Pakistan's
                most popular tourist destinations, accommodation often comes
                with a hefty price tag.
              </p>
              <p className="text-gray-600 mb-4">
                Multi-day trips require hotels or resorts, while on a day trip,
                you can return to your accommodation overnight. If budget is one
                of your concerns, then our day trips are the perfect solution.
              </p>
              <p className="text-gray-600 mb-6">
                A well-designed day trip will give you a quick and deep insight
                into these marvelous landscapes, bewitching mountains, and
                UNESCO World Heritage Sites. Sometimes it doesn't matter how
                many days you have; what matters is the experiences you can
                have.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Why Choose Our 1 Day Tours?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-600 text-2xl">⏱️</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Time Efficient
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Maximize your experience in minimal time
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-600 text-2xl">💰</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Cost Effective
                        </h4>
                        <p className="text-gray-600 text-sm">
                          No overnight stays needed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="text-primary-600 text-2xl">🏞️</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Diverse Experiences
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Nature, history & culture in one day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tours Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Featured 1 Day Tours
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
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
                              hoveredCard === tour.id
                                ? "scale(1.05)"
                                : "scale(1)",
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
                          className="h-1 bg-primatext-primary-600 mt-2"
                        ></motion.div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Hot-Selling 1 Day Tours
              </h3>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <ul className="space-y-3">
                  {popularTours.map((tour, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <div className="text-primary-600 mr-3 mt-1">•</div>
                      <span className="text-gray-700 font-medium">{tour}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
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
                  <span className="font-medium">1 Day</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Starting From</span>
                  <span className="font-medium text-primbg-primary-600">
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
                <a
                  href="/get-a-quote"
                  className="w-full bg-primary-600 hover:bg-primary-400 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </motion.div>

            {/* Quick Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Quick Inquiry
              </h3>
              <p className="text-gray-600 mb-4">
                Have questions about our 1 day tours? Send us a message!
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primatext-primary-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primatext-primary-600"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primatext-primary-600">
                  <option>Select Tour</option>
                  {tours.map((tour) => (
                    <option key={tour.id}>{tour.title}</option>
                  ))}
                </select>
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primatext-primary-600"
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
      </div>
      <OneDayToursContent />
    </div>
  );
};

export default OneDayTourPage;
