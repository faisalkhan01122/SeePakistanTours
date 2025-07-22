import TourCard from "../components/TourCard";
import img1 from "../assets/tourinfo/hunza1.jpg";
import img2 from "../assets/tourinfo/hunza2.jpg";
import img3 from "../assets/tourinfo/hunza3.jpg";
import img4 from "../assets/tourinfo/hunza4.jpg";
import img5 from "../assets/tourinfo/hunza5.jpg";
import img6 from "../assets/tourinfo/hunza6.jpg";
import img7 from "../assets/tourinfo/hunza7.jpg";
import img8 from "../assets/tourinfo/hunza8.jpg";
import img9 from "../assets/tourinfo/hunza9.jpg";
import img10 from "../assets/tourinfo/hunza10.jpg";
import img11 from "../assets/tourinfo/hunza11.webp";
import img12 from "../assets/tourinfo/hunza12.jpg";
import img13 from "../assets/tourinfo/hunza13.jpg";
import img14 from "../assets/tourinfo/hunza14.jpg";
import img15 from "../assets/tourinfo/hunza15.jpg";
import img16 from "../assets/tourinfo/hunza16.jpg";
import img17 from "../assets/tourinfo/hunza17.jpg";
// const tourData = [
const tourData = [
  {
    image: img1,
    duration: "5 Days 4 Nights",
    title: "Cherry Blossom Hunza & Nagar Valley 5 Days 4 Nights Tour (BY AIR)",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img2,
    duration: "8 Days 7 Nights",
    title: "Hunza, Nagar & Naltar Valley Cherry Blossom 8 Days 7 Nights Tour",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img3,
    duration: "7 Days 6 Nights",
    title: "Hunza, Minapin & Nagar Valley Cherry Blossom 7 Days 6 Nights Tour",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img4,
    duration: "6 Days 5 Nights",
    title: "Hunza, Attabad Lake & Hopper 6 Days 5 Nights Tours (BY AIR)",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img5,
    duration: "5 Days 4 Nights",
    title:
      "Hunza, Hopper Glacier & Naltar Valley 5 Days 4 Nights Tours (BY AIR)",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img6,
    duration: "7 Days 6 Nights",
    title: "Fairy Meadows & Hunza Valley 7 Days 6 Nights Tour (BY AIR)",
    link: "/destination/fairy-meadows-pakistan",
  },
  {
    image: img7,
    duration: "10 Days 9 Nights",
    title:
      "Fairy Meadows, Hunza Valley & Skardu Valley 10 Days 9 Nights Tour (BY AIR)",
    link: "/destination/fairy-meadows-pakistan",
  },
  {
    image: img8,
    duration: "12 Days 11 Nights",
    title: "Fairy Meadows, Skardu Valley & Hunza Valley 12 Days 11 Nights Tour",
    link: "/destination/fairy-meadows-pakistan",
  },
  {
    image: img9,
    duration: "15 Days 14 Nights",
    title: "Fairy Meadows, Skardu Valley & Hunza Valley 15 Days 14 Nights Tour",
    link: "/destination/fairy-meadows-pakistan",
  },
  {
    image: img10,
    duration: "11 Days 10 Nights",
    title: "Chitral Kalash, Shandur & Hunza 11 Days 10 Nights Summer Tour",
    link: "/destination/chitral-valley-tours",
  },
  {
    image: img11,
    duration: "10 Days 9 Nights",
    title: "Chitral, Kalash & Hunza 10 Days 9 Nights Winter Tour",
    link: "/destination/chitral-valley-tours",
  },
  {
    image: img12,
    duration: "4 Days 3 Nights",
    title: "Hunza, Khunjerab Pass & Naltar 4 Days 3 Nights Tour (BY AIR)",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img13,
    duration: "8 Days 7 Nights",
    title: "Fairy Meadows, Hunza & Khunjerab Pass 8 Days 7 Nights Tour",
    link: "/destination/fairy-meadows-pakistan",
  },
  {
    image: img14,
    duration: "6 Days 5 Nights",
    title: "Hunza, Attabad Lake & Naltar Valley Deluxe 6 Days 5 Nights Tour",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img15,
    duration: "10 Days 9 Nights",
    title: "Hunza, Naran & Shongran Summer Tour",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img16,
    duration: "7 Days 6 Nights",
    title: "Hunza Valley, Attabad Lake &  Valley Deluxe 7 Days 6 Nights Tour",
    link: "/destination/hunza-valley-tours",
  },
  {
    image: img17,
    duration: "7 Days 6 Nights",
    title: "Hunza Valley  & Naltar Valley Deluxe 7 Days 6 Nights Tour",
    link: "/destination/hunza-valley-tours",
  },
];

// ];

export default function TourSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Hunza Valley Tours 2025
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Explore our curated Hunza Valley tour packages for 2025
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourData.map((tour, i) => (
          <TourCard key={i} tour={tour} />
        ))}
      </div>
    </div>
  );
}
