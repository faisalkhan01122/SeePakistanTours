import { motion } from "framer-motion";
import { useState } from "react";

const CarRentalspage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const cars = [
    {
      id: 1,
      name: "Honda City Aspire 2015",
      price: "5,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Honda-City-Aspire-2015-01-390x293.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "Toyota Corolla GLI 2014-16",
      price: "5,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Corolla-GLI-2014-16-01-390x293.jpg",
      link: "#",
    },
    {
      id: 3,
      name: "Toyota Corolla Gli 2017-19",
      price: "6,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Corolla-GLI-2017-19-02-390x293.jpg",
      link: "#",
    },
    {
      id: 4,
      name: "Honda BR-V 2018-21",
      price: "6,500 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Honda-BR-V-2018-19-02-390x293.jpg",
      link: "#",
    },
    {
      id: 5,
      name: "Toyota Grand Cabin 2017",
      price: "9,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Grand-Cabin-2014-17-01-390x293.jpg",
      link: "#",
    },
    {
      id: 6,
      name: "Suzuki APV 2007/08",
      price: "5,500 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2019/11/Suzuki-APV-01-390x293.jpg",
      link: "#",
    },
    {
      id: 7,
      name: "Toyota Prado 2005/08",
      price: "16,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2023/01/prado-2007.jpg",
      link: "#",
    },
    {
      id: 8,
      name: "Toyota Prado 2014/15",
      price: "20,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Prado-2014-2015-01-390x293.jpg",
      link: "#",
    },
    {
      id: 9,
      name: "Toyota Prado 2018",
      price: "25,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Prado-2018-01-390x293.jpg",
      link: "#",
    },
    {
      id: 10,
      name: "Toyota Saloon Coaster 2013",
      price: "15,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Saloon-Coaster-2013-02-390x293.jpg",
      link: "#",
    },
    {
      id: 11,
      name: "Toyota Saloon Coaster 2017",
      price: "18,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Toyota-Saloon-Coaster-2017-01-390x293.jpg",
      link: "#",
    },
    {
      id: 12,
      name: "Daewoo Bus 2017",
      price: "60,000 Rs/- Per Day",
      image:
        "https://seepakistantours.com/wp-content/uploads/2018/02/Daewoo-Bus-2017-01-1-390x293.jpg",
      link: "#",
    },
  ];

  const carBrands = [
    "Toyota",
    "Mitsubishi",
    "Mazda",
    "Honda",
    "Suzuki",
    "Ford",
    "Chevrolet",
    "Mercedes",
  ];

  const popularDestinations = [
    { name: "Lahore", link: "#islamabad-to-lahore" },
    { name: "Gilgit", link: "#islamabad-to-gilgit" },
    { name: "Murree", link: "#islamabad-to-murree" },
    { name: "Naran Kaghan", link: "#islamabad-to-naran" },
    { name: "Neelum Valley", link: "#islamabad-to-neelum" },
    { name: "Muzaffarabad", link: "#islamabad-to-muzaffarabad" },
    { name: "Hunza Valley", link: "#islamabad-to-hunza" },
    { name: "Swat Kalam", link: "#islamabad-to-swat" },
    { name: "Skardu", link: "#islamabad-to-skardu" },
  ];

  const touristSpots = [
    { name: "Naran Kaghan Valley", link: "#" },
    { name: "Chitral Valley", link: "#" },
    { name: "Murree Nathiagali", link: "#" },
    { name: "Swat Kalam Valley", link: "#" },
    { name: "Hunza Valley", link: "#" },
    { name: "Skardu", link: "#" },
    { name: "Neelum Valley", link: "#" },
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
          alt="Rent A Car Islamabad"
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
              Rent A Car Islamabad
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Premium car rental services in Pakistan's capital
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Cars Grid */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Fleet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <motion.div
                key={car.id}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(car.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <a href={car.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform:
                          hoveredCard === car.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
                    <div className="absolute bottom-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {car.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {car.name}
                    </h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: hoveredCard === car.id ? "100%" : "0%",
                      }}
                      className="h-1 bg-primary-600 mt-2"
                    ></motion.div>
                    <a
                      href={car.link}
                      className="mt-3 inline-block text-prim6bg-primary-600 hover:text-primary-400 font-medium"
                    >
                      View Details →
                    </a>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Introduction */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Best Rent A Car In Islamabad Services
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                <span className="text-prim6bg-primary-600 font-medium">
                  Zufta Travels
                </span>{" "}
                now offers the best Rent a car service in Islamabad for your
                trips and tours. Islamabad is the second most beautiful capital
                in the world, and we provide premium services to match its
                stature.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Why Choose Us?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-pri6bg-primary-600 text-2xl">💰</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Affordable Rates
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Cheapest rates in Islamabad & Rawalpindi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-pri6bg-primary-600 text-2xl">🚗</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Wide Selection
                        </h4>
                        <p className="text-gray-600 text-sm">
                          From economy cars to luxury SUVs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-pri6bg-primary-600 text-2xl">🛠️</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Well-Maintained
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Regularly serviced vehicles
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="text-pri6bg-primary-600 text-2xl">👨‍✈️</div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Professional Drivers
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Experienced in all road conditions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Car Brands */}
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
                    expandedSection === "brands" ? null : "brands"
                  )
                }
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  Types Of Cars For Rent In Islamabad
                </h2>
                <motion.div
                  animate={{ rotate: expandedSection === "brands" ? 180 : 0 }}
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
                  height: expandedSection === "brands" ? "auto" : 0,
                  opacity: expandedSection === "brands" ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="pt-2">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We own an extensive line of well-maintained vehicles for
                    rent in Islamabad to serve our prestigious clients.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We offer cars of all types from top brands including:
                  </p>

                  <motion.ul
                    variants={staggerContainer}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8"
                  >
                    {carBrands.map((brand, index) => (
                      <motion.li
                        key={index}
                        variants={listItem}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-3 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                      >
                        {brand}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.section>

            {/* Popular Destinations */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Popular Rental Destinations
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide car rental services to all major tourist destinations
                across Pakistan with experienced drivers familiar with all road
                conditions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularDestinations.map((destination, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      <a
                        href={destination.link}
                        className="hover:text-prim6bg-primary-600"
                      >
                        Islamabad to {destination.name}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comfortable rides with professional drivers for your
                      journey to {destination.name}.
                    </p>
                    <a
                      href={destination.link}
                      className="text-prim6bg-primary-600 hover:text-primary-400 font-medium"
                    >
                      Learn More →
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Airport Transfer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            >
              <div className="bg-primary-600 text-white p-4">
                <h3 className="text-xl font-bold">Airport Transfer Service</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  We provide premium rent-a-car service for Islamabad
                  International Airport with timely pickups and drop-offs.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-pri6bg-primary-600">✓</div>
                  <span className="text-gray-700">24/7 Availability</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-pri6bg-primary-600">✓</div>
                  <span className="text-gray-700">Flight Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-pri6bg-primary-600">✓</div>
                  <span className="text-gray-700">Meet & Greet Service</span>
                </div>
                <button className="w-full mt-4 bg-primary-600 hover:bg-primary-400 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Book Airport Transfer
                </button>
              </div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            >
              <div className="bg-primary-600 text-white p-4">
                <h3 className="text-xl font-bold">Quick Inquiry</h3>
              </div>
              <div className="p-4">
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri6bg-primary-600"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri6bg-primary-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri6bg-primary-600"
                  />
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pri6bg-primary-600">
                    <option>Select Vehicle Type</option>
                    <option>Economy Car</option>
                    <option>SUV</option>
                    <option>Luxury Vehicle</option>
                    <option>Minibus/Coaster</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-primary-700 hover:bg-primary-800 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Get Quote
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Tourist Spots */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-primary-600 text-white p-4">
                <h3 className="text-xl font-bold">Popular Tourist Spots</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {touristSpots.map((spot, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-pri6bg-primary-600 mr-2 mt-1">•</div>
                      <a
                        href={spot.link}
                        className="text-gray-700 hover:text-prim6bg-primary-600 hover:underline"
                      >
                        {spot.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
                Ready to Book Your Ride?
              </h3>
              <p className="mb-6 text-lg">
                Experience the comfort and convenience of our premium car rental
                services in Islamabad. Whether for business or leisure, we have
                the perfect vehicle for your needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/get-a-quote"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-800 bg-primary-600 transition-colors text-lg"
                >
                  Book Now
                </a>
                <a
                  href="tel:+923430762110"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-800 bg-primary-600 transition-colors text-lg"
                >
                  Call Us: +92 343 0762 110
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CarRentalspage;
