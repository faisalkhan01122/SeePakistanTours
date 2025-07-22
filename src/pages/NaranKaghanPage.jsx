import { motion } from "framer-motion";
import { useState } from "react";
// import NaranKaghanContent from "../section/NaranKaghanContent";

const NaranKaghanPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const tours = [
    {
      id: 1,
      title: "Fairy Meadows, Naran & Shogran Summer Tour",
      duration: "6 Days 5 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Naran-Shogran-6-days-tour-580x240.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Naran, Shogran, Siri Paye & Neelum Valley Tour",
      duration: "9 Days 8 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/02/Naran-Shogran-Neelum-9-Days-Tour-580x240.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Naran Kaghan & Neelum Valley Tour",
      duration: "7 Days 6 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/02/Naran-Kaghan-Neelum-7-Days-Tour-580x240.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Naran & Shogran Luxury Tour",
      duration: "5 Days 4 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/02/Naran-Shogran-Luxury-5-Days-Tour-580x240.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Hunza, Naran & Shogran Summer Tour",
      duration: "10 Days 9 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/02/Hunza-Naran-Shogran-10-Days-summer-Tour-580x240.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Naran, Saif-ul-Malook & Neelum Valley Tour",
      duration: "6 Days 5 Nights",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/02/Naran-Neelum-Valley-6-Days-Tour-580x240.jpg",
      link: "#",
    },
  ];

  const popularPlaces = [
    "Saif ul Malook Lake",
    "Shogran Meadows",
    "Siri Paye",
    "Babusar Top",
    "Lulusar Lake",
    "Ansoo Lake",
    "Lalazar",
    "Kunhar River",
  ];

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
    initial: {
      y: 0,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[100vh] overflow-hidden">
        <img
          src="https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Naran-Kaghan.jpg"
          alt="Naran Kaghan"
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
              Naran Kaghan Tours 2025
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Explore the breathtaking beauty of Naran Kaghan with our exclusive
              tour packages
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
                Visit Naran Kaghan with Affordable Tour Packages 2025
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Naran Kaghan Tours</strong> offer an unforgettable
                experience for tourists from Pakistan and abroad. Many travelers
                combine their Naran Kaghan tours with other Pakistan tour
                packages to explore more of the country's stunning northern
                areas.
              </p>
              <p className="text-gray-600 mb-4">
                Naran Kaghan is a picturesque valley in the Khyber Pakhtunkhwa
                province, known for its breathtaking landscapes, serene lakes,
                and lush green meadows. We have a list of adventurous{" "}
                <strong>Naran Kaghan tour packages for 2025</strong>
                that cater to all types of travelers.
              </p>
            </motion.div>

            {/* Tours Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Featured Tour Packages
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
                          className="h-1 bg-primary mt-2"
                        ></motion.div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Popular Places */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Beautiful Places to Visit in Naran Kaghan
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {popularPlaces.map((place, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center text-center hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 font-medium">{place}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Weather Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Weather in Naran Kaghan
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Weather in Naran Kaghan</strong> varies significantly by
                season. Summers (May to September) are pleasant with
                temperatures ranging from 15°C to 30°C, making it the ideal time
                to visit. Winters (November to February) bring heavy snowfall
                with temperatures often dropping below freezing.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-primary-600 text-3xl">☀️</div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Summer (May-Sep)
                      </h4>
                      <p className="text-gray-600 text-sm">15°C to 30°C</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-[200px] bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-primary-600 text-3xl">❄️</div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Winter (Nov-Feb)
                      </h4>
                      <p className="text-gray-600 text-sm">-5°C to 15°C</p>
                    </div>
                  </div>
                </div>
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
              <a href="#">
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
                    <span className="font-medium">4/5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Based on</span>
                  <span className="font-medium">685 reviews</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">3-10 days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Starting From</span>
                  <span className="font-medium text-primbg-primary-600">
                    PKR 65,000
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-medium text-green-600">Available</span>
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

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Get Tour Updates
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest deals and updates
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim6text-primary-600"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <NaranKaghanContent /> */}
    </div>
  );
};

export default NaranKaghanPage;
