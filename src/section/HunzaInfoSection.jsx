import React from "react";
import { motion } from "framer-motion";
import HunzaPlacesSection from "./HunzaPlacesSection";
import BookingForm from "../components/BookingForm";

const Section = ({ title, content, image, reverse }) => (
  <div
    className={`flex flex-col md:flex-row items-center gap-8 py-12 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    <motion.img
      src={image}
      alt={title}
      className="w-full md:w-1/2 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    />
    <motion.div
      className="md:w-1/2"
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">
        {title}
      </h2>
      {content.map((p, idx) => (
        <p
          key={idx}
          className="text-gray-600 text-base md:text-lg mb-3 leading-relaxed"
        >
          {p}
        </p>
      ))}
    </motion.div>
  </div>
);

const HunzaToursPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* -----------------------BookingForm------------------------------ */}
      {/* <BookingForm/> */}
      {/* -----------------------SubCard------------------------------- */}
      {/* <section className="bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary-700 mb-10">
          Tour Itinerary
        </h2>

        {itineraryData.map((item, index) => (
          <SubCard key={index} {...item} />
        ))}
      </div>
    </section> */}
      {/* ------------------------SubHero----------------------------- */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-center text-primary-600 my-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hunza Valley Tours 2025 With Affordable Hunza Tour Packages
      </motion.h1>

      <Section
        title="Introduction"
        image="https://seepakistantours.com/wp-content/uploads/2022/11/Fairy-Meadows-Skardu-Hunza-12-Days-tour-580x240.jpg"
        content={[
          "Hunza Valley tours are the best demanded tours by travelers to explore in Hunza tour packages 2025 by Zufta Travels. Under the shadows of mighty mountains, Hunza Valley lies in Gilgit-Baltistan.",
          "Hunza Valley is one of the most beautiful tourist locations in Pakistan. Karimabad is the central town and a popular tourist attraction in Hunza.",
          "Hunza tours 2025 are very popular and a must-visit location for the tourists visiting the northern areas of Pakistan because of its beauty, diversity, and hospitality.",
        ]}
      />
      <HunzaPlacesSection />

      <Section
        title="Why Choose Hunza Tour Packages 2025?"
        image="https://rezkit-tour-images.b-cdn.net/01h7ywwd7at70t98wdj69emng5/images/01H8Y4EF7382XPSZWHG8CNPRDP.jpg?width=1600&height=1000&crop=3600%2C2250%2C0%2C289"
        content={[
          "We proudly present our top-notch Hunza valley tour services in 2025, including transport, accommodation, breakfast, and guided tours.",
          "Our packages are offered from Islamabad, Rawalpindi, and Karachi at affordable prices with unmatched value.",
        ]}
        reverse
      />

      <Section
        title="Hunza Honeymoon & Family Tours 2025"
        image="https://hunzaadventuretours.com/wp-content/uploads/2022/04/Karimabad-Hunza-Valley.jpg"
        content={[
          "We have special honeymoon packages for newlyweds seeking a romantic escape in the serene Hunza Valley.",
          "Our family trip packages are customizable, affordable, and trusted by countless happy travelers who have chosen us again.",
        ]}
      />

      <Section
        title="Weather & Temperature In Hunza"
        image="https://naturehikepakistan.pk/wp-content/uploads/2024/03/gulmit-a-min.jpeg"
        content={[
          "Hunza weather is pleasant in summers, with cooler temperatures than other regions. Cherry blossoms in spring and golden foliage in autumn create a surreal experience.",
          "Our packages are crafted for every season, with added discounts on early bookings.",
        ]}
        reverse
      />

      <Section
        title="Top Attractions in Hunza Valley"
        image="https://miro.medium.com/v2/resize:fit:799/1*2goY8TJTCORBSHv-O4FTfw.jpeg"
        content={[
          "Explore Baltit Fort, Altit Fort, Borith Lake, Attabad Lake, Passu Cones, Khunjerab Pass, and more.",
          "Each location has a rich history, culture, and scenic beauty worth experiencing with our curated tours.",
        ]}
      />

      <Section
        title="Baltit Fort"
        image="https://i0.wp.com/gbit.pk/wp-content/uploads/2016/05/12733525_1520605634911806_1108672074893824842_n.jpg?fit=640%2C426&ssl=1"
        content={[
          "Located in Karimabad, Baltit Fort is over 800 years old and a key historical site in Hunza Valley.",
          "The fort offers stunning views of Rakaposhi and Ultar Glacier and is part of all our Hunza tour packages.",
        ]}
        reverse
      />

      <Section
        title="Attabad Lake & Khunjerab Pass"
        image="https://vacayadviser.com/wp-content/uploads/2022/08/Attabad-Lake-1024x613.jpg.webp"
        content={[
          "Attabad Lake, formed by a landslide in 2010, offers boating and scenic views. It's a highlight of the Hunza trip.",
          "Khunjerab Pass, the highest paved international border at 4,693m, connects Pakistan with China and offers unmatched mountain views.",
        ]}
      />

      <Section
        title="Rush Lake & Passu Cones"
        image="https://hunzaexplorers.com/storage/2023/01/RUSH-lake-Nagar-Valley-HunzaExplorers-Pakistan.webp"
        content={[
          "Rush Lake is one of the highest alpine lakes in the world and offers a thrilling trek with views of Spantik and Ultar peaks.",
          "Passu Cones, famous for their unique shape and height (6,000m), are located in upper Hunza and offer breathtaking vistas.",
        ]}
        reverse
      />

      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">
          Book Your Hunza Tour Package Now
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Choose from our curated Hunza Valley Tour Packages based on your
          interests and budget. Plan now and avail early bird discounts!
        </p>
        <button className="bg-primary-500 text-black text-xl font-semibold px-6 py-3 rounded-xl shadow hover:bg-primary-600 transition">
          Explore Packages
        </button>
      </motion.div>
    </div>
  );
};

export default HunzaToursPage;
