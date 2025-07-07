import React from "react";

const tours = [
  {
    title: "Hunza Valley & Naltar Valley Standard Tour",
    duration: "7 Days 6 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2017/11/Hunza-Valley-Standard-7-Days-Tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/hunza-valley-tours/hunza-valley-standard-tour/",
  },
  {
    title: "Murree, Nathia Gali & Swat Valley Couple Tour",
    duration: "5 Days 4 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2019/02/Malam-Jabba-Nathia-Gali-5-Days-Tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/murree-tours/murree-nathiagali-swat-couple-tour-5days-4nights/",
  },
  {
    title: "Murree & Shogran Tour",
    duration: "3 Days 2 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2019/02/Shogran-Murree-3-Days-tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/murree-tours/murree-shogran-3days-2nights-tour/",
  },
  {
    title: "Malam Jabba Swat Tour",
    duration: "3 Days 2 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2019/02/Swat-Malam-Jabba-3-days-Tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/swat-valley-tours/swat-valley-3days-2nights-tour/",
  },
  {
    title: "Swat, Kalam & Malam Jabba Deluxe Tour",
    duration: "5 Days 4 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2019/02/Swat-Valley-Deluxe-5-days-Tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/swat-valley-tours/swat-valley-5days-4nights-deluxe-tour/",
  },
  {
    title: "Swat & Malam Jabba Deluxe Tour",
    duration: "3 Days 2 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2019/02/Swat-Valley-Deluxe-3-days-Tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/swat-valley-tours/swat-valley-deluxe-tour/",
  },
  {
    title: "Patriata, Murree and Nathia Gali Tour",
    duration: "3 Days 2 Nights",
    image: "https://seepakistantours.com/wp-content/uploads/2018/02/Murree-Basic-3-days-Tour-580x240.jpg",
    link: "https://seepakistantours.com/destination/murree-tours/murree-basic-tour/",
  },
];

const HoneymoonTourList = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-600 mb-10">
        Explore Our Honeymoon Tour Deals
      </h2>
      <div className="grid max-w-4xl mx-auto  grid-cols-1 md:grid-cols-2 gap-5">
        {tours.map((tour, index) => (
          <a
            key={index}
            href={tour.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
          >
            <div className="relative">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-white/90 text-primary-600 font-semibold px-3 py-1 text-sm rounded-full">
                {tour.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600">
                {tour.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HoneymoonTourList;
