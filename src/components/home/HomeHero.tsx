import React, { useEffect, useState } from 'react';

// SidePopup Component
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const SidePopup: React.FC<PopupProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <>
      {isOpen && (
        <section
          id="side-popup-alumni"
          className="fixed top-0 z-30 right-0 h-[100vh] w-[100vw] bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            id="read-more"
            className="relative lg:w-[50vw] w-[100vw] bg-gray-50 flex flex-col gap-4 p-8"
          >
            <span
              id="close-popup-alumni"
              className="material-symbols-outlined absolute top-4 right-4 cursor-pointer"
              onClick={onClose}
            >
              &#10006;
            </span>
            <h3 id="side-popup-alumni-head" className="text-2xl font-semibold">
              {title}
            </h3>
            <p
              id="side-popup-alumni-paragraph"
              className="text-lg text-gray-700 overflow-y-auto"
            >
              {content}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

// Main Component with Carousel and Donation/News Tabs
const HomeHero = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [donations, setDonations] = useState<DonationNewsData[]>([]);
  const [news, setNews] = useState<DonationNewsData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'donation' | 'news'>('donation');
  const [popup, setPopup] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: '',
  });

  useEffect(() => {
    fetch('/admin/homeMainCarousel.json')
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error('Error loading carousel data:', error));

    fetch('/admin/donations.json')
      .then((response) => response.json())
      .then((data) => setDonations(data))
      .catch((error) => console.error('Error loading donations data:', error));

    fetch('/admin/news.json')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error loading news data:', error));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleOpenPopup = (title: string, content: string) => {
    setPopup({ isOpen: true, title, content });
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, isOpen: false });
  };

  return (
    <div>
      {/* Carousel Section */}
      <section className="relative">
        <div className="lg:max-h-[68%]">
          <div className="swiper-container">
            <div className="swiper-wrapper lg:max-h-[68%] h-[50vh] md:h-[70vh]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`swiper-slide flex relative flex-col shadow overflow-hidden ${
                    index === currentIndex ? 'block' : 'hidden'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <img
                      className="imageMainCarousel h-[50vh] md:h-[70vh] w-full object-cover"
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="absolute bottom-0 left-0 flex space-x-2 p-4">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="swiper-button-prev-main bg-white m-2 hidden md:flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="chevron-left w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="swiper-button-next-main bg-white m-2 hidden md:flex justify-center items-center w-10 h-10 rounded-full shadow focus:outline-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="chevron-right w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Black Overlay with Tabs */}
          <div className="z-20 md:absolute top-0 right-0 md:w-[28%] md:h-full bg-black bg-opacity-50 text-white py-5 md:rounded-md">
            <div className="inline-flex w-4/5 mx-[10%] rounded-md shadow-sm">
              <p
                className={`cursor-pointer px-4 py-2 text-sm w-1/2 font-medium text-center ${
                  activeTab === 'donation'
                    ? 'text-black bg-white'
                    : 'text-white bg-black'
                } rounded-l-lg hover:ring-2 focus:z-10`}
                onClick={() => setActiveTab('donation')}
              >
                Donation
              </p>
              <p
                className={`cursor-pointer px-4 py-2 text-sm font-medium w-1/2 text-center ${
                  activeTab === 'news'
                    ? 'text-black bg-white'
                    : 'text-white bg-black'
                } rounded-r-md hover:ring-2 focus:z-10`}
                onClick={() => setActiveTab('news')}
              >
                News
              </p>
            </div>

            <ul className="w-4/5 mx-[10%] my-1 max-h-[400px] overflow-y-auto">
              {activeTab === 'donation'
                ? donations.map((donation, index) => (
                    <li key={index}>
                      <a
                        onClick={() =>
                          handleOpenPopup(donation.title, donation.info)
                        }
                        className="cursor-pointer block px-4 py-2 text-sm font-[500] text-white hover:bg-gray-600 rounded-lg hover:bg-opacity-50 hover:text-blue-200 ease-in-out duration-300 truncate"
                      >
                        {donation.title}
                        <p className="text-white font-[350]">{donation.date}</p>
                      </a>
                    </li>
                  ))
                : news.slice().reverse().map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() =>
                          handleOpenPopup(item.title, item.info)
                        }
                        className="cursor-pointer block px-4 py-2 text-sm font-[500] text-white hover:bg-gray-600 rounded-lg hover:bg-opacity-50 hover:text-blue-200 ease-in-out duration-300 truncate"
                      >
                        {item.title}
                        <p className="text-white font-[350]">{item.date}</p>
                      </a>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Side Popup */}
      <SidePopup
        isOpen={popup.isOpen}
        onClose={handleClosePopup}
        title={popup.title}
        content={popup.content}
      />
    </div>
  );
};

// Type Definitions
interface SlideData {
  image: string;
}

interface DonationNewsData {
  title: string;
  info: string;
  date: string;
}

export default HomeHero;
