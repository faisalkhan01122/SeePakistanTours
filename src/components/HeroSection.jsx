import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/Destination-Hunza-Valley.jpg'
import img2 from '../assets/Kalam_Valley_Swat.jpg'
import img3 from '../assets/mesmerizing-view-of-fairy.jpg'

const sliderImages = [
  {
    url: img1,
    title: "Hunza Valley Tours",
  },
  {
    url: img2,
    title: "Fairy Meadows",
  },
  {
    url: img3,
    title: "Swat Valley",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-700 text-lg" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-700 text-lg" />
  </button>
);

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="p-2">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 transition"></div>
    ),
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-xl mt-3">
      <Slider {...settings}>
        {sliderImages.map((slide, i) => (
          <div key={i}>
            <div className="relative h-[80vh] w-full">
              <img
                src={slide.url}
                alt={slide.title}
                className="object-cover  w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2
  className="font-opensans text-[4.6em] leading-[1.6] tracking-[.2px] text-[#F9F9F9] antialiased"
>
  {slide.title}
</h2>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
