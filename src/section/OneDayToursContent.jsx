import { motion } from "framer-motion";
import { useState } from "react";

const OneDayToursContent = () => {
  const [expanded, setExpanded] = useState(false);

  const popularTours = [
    "1 Day Murree Hills, Patriata & Islamabad Tour",
    "1 Day Taxila Museum & Khanpur Dam Tour",
    "1 Day Khewra Salt Mines & Katas Raj Temple Tour",
    "1 Day Pakistan Monument, Lok Virsa & Margalla Hills Tour",
    "1 Day Murree, Nathia Gali & Ayubia Tour"
  ];

  const benefits = [
    {
      icon: "⏱️",
      title: "Time Efficient",
      description: "Experience more in less time"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Save on accommodation costs"
    },
    {
      icon: "🏞️",
      title: "Diverse Experiences",
      description: "Nature, history & culture in one day"
    },
    {
      icon: "🚗",
      title: "Convenient",
      description: "Return to your hotel the same day"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
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
          1 Day Tours From Islamabad
        </motion.h2>
        
        <motion.p className="text-gray-600 mb-4 leading-relaxed">
          Are you fond of 1 day tours from Islamabad? Any day trip will not only help you save time but money as well. In Pakistan's most popular tourist destinations, accommodation often comes with a hefty price tag.
        </motion.p>
        
        <motion.p className="text-gray-600 mb-6 leading-relaxed">
          Multi-day trips require hotels or resorts, while on a day trip, you can return to your accommodation overnight. If budget is one of your concerns, then our day trips are the perfect solution. A well-designed day trip will give you a quick and deep insight into these marvelous landscapes, bewitching mountains, and UNESCO World Heritage Sites.
        </motion.p>

        {/* Benefits Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={listItem}
              whileHover={{ y: -5 }}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Popular Tours Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div 
          className="cursor-pointer flex justify-between items-center mb-4"
          onClick={() => setExpanded(!expanded)}
        >
          <h2 className="text-2xl font-bold text-gray-800">Our Hot-Selling One-Day Tour Packages</h2>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: expanded ? 'auto' : 0,
            opacity: expanded ? 1 : 0
          }}
          className="overflow-hidden"
        >
          <div className="pt-2">
            <motion.ul 
              variants={staggerContainer}
              className="space-y-3"
            >
              {popularTours.map((tour, index) => (
                <motion.li
                  key={index}
                  variants={listItem}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="text-primary-600 mr-3 mt-1">•</div>
                  <span className="text-gray-700 font-medium">{tour}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              variants={fadeIn}
              className="mt-6 bg-blue-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Our 1 Day Tours?</h3>
              <p className="text-gray-600 mb-4">
                Sometimes it doesn't matter how many days you have; what matters is the experiences you can have. Our carefully crafted itineraries ensure you make the most of every minute.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="text-primary-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Expert Guides</h4>
                    <p className="text-gray-600 text-sm">Knowledgeable local guides enhance your experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Comfortable Transport</h4>
                    <p className="text-gray-600 text-sm">Travel in air-conditioned vehicles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Flexible Options</h4>
                    <p className="text-gray-600 text-sm">Customize your tour experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-primary-600 text-xl">✓</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Value for Money</h4>
                    <p className="text-gray-600 text-sm">More experiences at lower cost</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="bg-gradient-to-r from-primary-600 to-primary-400 text-white p-8 rounded-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Day Adventure?</h3>
            <p className="mb-6">
              Book now and experience the best of Pakistan in just one day. Our tours are perfect for those with limited time who don't want to miss out on the country's incredible sights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#book-now" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Book Now
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OneDayToursContent;