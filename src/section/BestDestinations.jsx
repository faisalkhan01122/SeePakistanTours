import React from "react";

const destinations = [
  {
    title: "1 Day Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/12/1-Day-580x240.jpg",
    link: "#",
  },
  {
    title: "Azad Kashmir Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Azad-Kashmir-580x240.jpg",
    link: "#",
  },
  {
    title: "Chitral Valley Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Chitral-Valley-580x240.jpg",
    link: "#",
  },
  {
    title: "Fairy Meadows Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Fairy-Meadows-580x240.jpg",
    link: "#",
  },
  {
    title: "Foreigner Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/12/Foreigner-Tours-1-580x240.jpg",
    link: "#",
  },
  {
    title: "Hunza Valley Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Hunza-Valley-580x240.jpg",
    link: "#",
  },
  {
    title: "Murree Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Murree-Nathia-Gali-580x240.jpg",
    link: "#",
  },
  {
    title: "Naran Kaghan Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Naran-Kaghan-580x240.jpg",
    link: "#",
  },
  {
    title: "Neelum Valley Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Azad-Kashmir-580x240.jpg",
    link: "#",
  },
  {
    title: "Skardu Valley Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Skardu-Valley-580x240.jpg",
    link: "#",
  },
  {
    title: "Swat Valley Tours",
    image:
      "https://seepakistantours.com/wp-content/uploads/2022/04/Destination-Swat-Valley-580x240.jpg",
    link: "#",
  },
];

const BestDestinations = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary-600 mb-2">
          Best Destinations For 2025-26
        </h2>
        <p className="text-lg text-gray-600">Best Northern Areas of Pakistan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {destinations.map((dest, index) => (
          <a
            href={dest.link}
            key={index}
            className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600">
                {dest.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BestDestinations;
